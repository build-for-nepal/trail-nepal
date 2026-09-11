"""Generate the app trivia bank from the approved Trails Nepal review DOCX."""

import json
import re
import sys
from pathlib import Path

from docx import Document


SECTION_IDS = {
    "Tilicho Lake Trail - Trivia 20 Questions": "tilicho-lake-trek",
    "Mardi Himal Trail - Trivia 20 Questions": "mardi-himal-trek",
    "Gokyo Valley Trail - Trivia Questions": "gokyo-valley-trek",
    "Shey Phoksundo Trail - Trivia 20 Questions": "shey-phoksundo",
    "EBC Trails - Trivia Questions": "ebc-trek",
    "Ghorepani Poon Hill Trail - Trivia Questions": "ghorepani-poon-hill-trek",
    "ABC Trail - Trivia Questions": "abc-trek",
    "Manaslu Circuit Trail - Trivia Questions": "manaslu-circuit",
    "Langtang Valley Trail - Trivia Questions": "langtang-valley",
}


def clean(text: str) -> str:
    return (
        text.replace("\ufffd", "'")
        .replace("\u2018", "'")
        .replace("\u2019", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .strip()
    )


def main() -> None:
    source = Path(sys.argv[1])
    output = Path(sys.argv[2])
    paragraphs = Document(source).paragraphs
    banks: dict[str, list[dict[str, object]]] = {trek_id: [] for trek_id in SECTION_IDS.values()}
    active_id: str | None = None

    for index, paragraph in enumerate(paragraphs):
        text = clean(paragraph.text)
        if text in SECTION_IDS:
            active_id = SECTION_IDS[text]
            continue
        if active_id is None or paragraph.style.name != "Heading 3" or not re.match(r"^\d+\.\s", text):
            continue

        question = re.sub(r"^\d+\.\s*", "", text)
        options_text = clean(paragraphs[index + 1].text)
        answers = [clean(match) for match in re.findall(r"(?:^|\n)\s*[A-D]\.\s*(.+)", options_text)]
        correct_text = clean(paragraphs[index + 2].text)
        correct_match = re.search(r"Correct answer:\s*([A-D])\.", correct_text, re.IGNORECASE)
        explanation = re.sub(r"^Explanation:\s*", "", clean(paragraphs[index + 3].text), flags=re.IGNORECASE)
        if len(answers) != 4 or not correct_match:
            raise ValueError(f"Could not parse question at paragraph {index}: {text}")

        banks[active_id].append(
            {
                "question": question,
                "answers": answers,
                "correctAnswer": ord(correct_match.group(1).upper()) - ord("A"),
                "explanation": explanation,
            }
        )

    invalid = {trek_id: len(items) for trek_id, items in banks.items() if len(items) != 20}
    if invalid:
        raise ValueError(f"Expected exactly 20 questions per trek, got: {invalid}")

    serialized = json.dumps(banks, ensure_ascii=False, indent=2)
    content = """// Generated from Design Review - Trails Nepal.docx. Do not edit question content manually.\n\nexport type TriviaQuestion = {\n  question: string;\n  answers: [string, string, string, string];\n  correctAnswer: number;\n  explanation: string;\n};\n\nexport const TRIVIA_QUESTIONS_BY_TREK: Record<string, TriviaQuestion[]> = """
    content += serialized + ";\n"
    output.write_text(content, encoding="utf-8")
    print(json.dumps({trek_id: len(items) for trek_id, items in banks.items()}, indent=2))


if __name__ == "__main__":
    main()
