"""Generate the app trivia banks from the approved Trail Nepal trivia DOCX."""

import json
import re
import sys
from pathlib import Path

from docx import Document


TREK_SECTION_IDS = {
    "Everest Base Camp (EBC)": "ebc-trek",
    "Gokyo Valley": "gokyo-valley-trek",
    "Langtang": "langtang-valley",
    "Annapurna Base Camp (ABC)": "abc-trek",
    "Mardi Himal": "mardi-himal-trek",
    "Ghorepani Poon Hill": "ghorepani-poon-hill-trek",
    "Manaslu Circuit": "manaslu-circuit",
    "Tilicho Lake": "tilicho-lake-trek",
    "Shey Phoksundo": "shey-phoksundo",
}

EXCLUDED_SECTION_TITLES = {
    "Annapurna Circuit (general)",
    "Dhulikhel to Namobuddha",
    "Nagarkot to Changunarayan",
    "Day hikes around Pokhara",
    "Kathmandu Valley rim hikes",
    "Kathmandu Durbar Square",
    "Patan Durbar Square",
    "Bhaktapur Durbar Square",
    "Lumbini",
    "Bandipur hill town",
}

GENERAL_SECTION_TITLES = {
    "Newari architecture and heritage",
    "Nepali festivals (Dashain, Tihar, Holi)",
    "Religious sites (temples, stupas, monasteries)",
    "Local cuisine and food culture",
    "Traditional clothing and crafts",
    "Nepal's mountain ranges (Himalaya facts)",
    "Highest peaks (Everest, Kanchenjunga, Lhotse, etc.)",
    "Rivers and lakes",
    "National parks and conservation areas",
    "Flora and fauna (rhododendron, red panda, snow leopard)",
    "Climate zones by altitude",
    "Altitude sickness and acclimatization",
    "Permits (TIMS, conservation area, restricted area)",
    "Packing essentials and gear",
    "Best trekking seasons",
    "Hiring guides and porters",
    "Teahouse trekking basics",
    "Emergency/rescue procedures",
    "Trail etiquette",
    "Sherpa culture and mountaineering history",
    "Ethnic groups of Nepal (Gurung, Tamang, Newar, etc.)",
    "Famous Nepali mountaineers",
    "History of Everest expeditions",
    "History of kingdom era and unification",
    "Geography and borders",
    "Languages spoken",
    "Currency and cost of travel",
    "Transportation (domestic flights, buses, trekking access)",
    "Sustainable and responsible tourism",
    "Nepal's UNESCO World Heritage Sites",
}


def clean(text: str) -> str:
    return (
        text.replace("\ufffd", "-")
        .replace("\u2018", "'")
        .replace("\u2019", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .strip()
    )


def parse_compact_question(text: str) -> dict[str, object]:
    lines = [clean(line) for line in text.splitlines() if clean(line)]
    question = re.sub(r"^\d+\.\s*", "", lines[0])
    answers = [re.sub(r"^[A-D]\)\s*", "", line) for line in lines[1:5]]
    correct_match = re.match(r"Correct:\s*([A-D])", lines[5], re.IGNORECASE)
    explanation = re.sub(r"^Explanation:\s*", "", lines[6], flags=re.IGNORECASE)
    if len(answers) != 4 or not correct_match:
        raise ValueError(f"Could not parse general question: {text}")
    return {
        "question": question,
        "answers": answers,
        "correctAnswer": ord(correct_match.group(1).upper()) - ord("A"),
        "explanation": explanation,
    }


def parse_split_question(paragraphs: list[str], index: int) -> dict[str, object]:
    question = re.sub(r"^\d+\.\s*", "", paragraphs[index])
    answers = [
        clean(match)
        for match in re.findall(
            r"(?:^|\n)\s*[A-D]\)\s*(.+)", paragraphs[index + 1]
        )
    ]
    correct_match = re.match(
        r"Correct:\s*([A-D])", paragraphs[index + 2], re.IGNORECASE
    )
    explanation = re.sub(
        r"^Explanation:\s*", "", paragraphs[index + 3], flags=re.IGNORECASE
    )
    if len(answers) != 4 or not correct_match:
        raise ValueError(f"Could not parse trek question: {paragraphs[index]}")
    return {
        "question": question,
        "answers": answers,
        "correctAnswer": ord(correct_match.group(1).upper()) - ord("A"),
        "explanation": explanation,
    }


def parse_question(paragraphs: list[str], index: int) -> dict[str, object]:
    if "\nCorrect:" in paragraphs[index]:
        return parse_compact_question(paragraphs[index])
    return parse_split_question(paragraphs, index)


def main() -> None:
    source = Path(sys.argv[1])
    output = Path(sys.argv[2])
    paragraphs = [clean(paragraph.text) for paragraph in Document(source).paragraphs]

    full_bank_index = next(
        index
        for index, text in enumerate(paragraphs)
        if text.startswith("Trail Nepal Trivia")
    )
    general_questions = [
        parse_compact_question(text)
        for text in paragraphs[:full_bank_index]
        if re.match(r"^\d+\.\s", text)
    ]

    trek_questions: dict[str, list[dict[str, object]]] = {
        trek_id: [] for trek_id in TREK_SECTION_IDS.values()
    }
    active_trek_id: str | None = None
    include_in_general = False
    for index in range(full_bank_index + 1, len(paragraphs)):
        text = paragraphs[index]
        if text in TREK_SECTION_IDS:
            active_trek_id = TREK_SECTION_IDS[text]
            include_in_general = False
            continue
        if text in EXCLUDED_SECTION_TITLES:
            active_trek_id = None
            include_in_general = False
            continue
        if text in GENERAL_SECTION_TITLES:
            active_trek_id = None
            include_in_general = True
            continue
        if re.match(r"^\d+\.\s", text):
            question = parse_question(paragraphs, index)
            if active_trek_id:
                trek_questions[active_trek_id].append(question)
            elif include_in_general:
                general_questions.append(question)

    if len(general_questions) < 8:
        raise ValueError(f"Expected at least 8 general questions, got {len(general_questions)}")
    empty_treks = [trek_id for trek_id, questions in trek_questions.items() if not questions]
    if empty_treks:
        raise ValueError(f"No trek-specific questions found for: {empty_treks}")

    general_serialized = json.dumps(general_questions, ensure_ascii=False, indent=2)
    trek_serialized = json.dumps(trek_questions, ensure_ascii=False, indent=2)
    content = """// Generated from trivia qns.docx. Do not edit question content manually.

export type TriviaQuestion = {
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
};

export const GENERAL_TRIVIA_QUESTIONS: TriviaQuestion[] = """
    content += general_serialized
    content += ";\n\nexport const TRIVIA_QUESTIONS_BY_TREK: Record<string, TriviaQuestion[]> = "
    content += trek_serialized + ";\n"
    output.write_text(content, encoding="utf-8")

    print(
        json.dumps(
            {
                "general": len(general_questions),
                "treks": {
                    trek_id: len(questions)
                    for trek_id, questions in trek_questions.items()
                },
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
