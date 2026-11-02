import {
  GENERAL_TRIVIA_QUESTIONS,
  TRIVIA_QUESTIONS_BY_TRIP,
} from './data/questions';
import type { TriviaQuestion } from './data/questions';

// The web's rules, from frontend/src/components/details/TrekTrivia.tsx.

export const ROUND_SIZE = 8;
/** How many of a round's questions are the trip's own; the rest are general. */
export const TRIP_QUESTION_COUNT = 2;
export const ANSWER_LETTERS = ['A', 'B', 'C', 'D'] as const;

/** Fisher–Yates, into a new array. `random` is there so a check can fix the order. */
export function shuffle<T>(items: readonly T[], random = Math.random): T[] {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

/** A trip's own questions. Own keys only, so an id like 'constructor' finds none. */
export function tripQuestions(
  id: string | undefined,
): readonly TriviaQuestion[] {
  if (
    !id ||
    !Object.prototype.hasOwnProperty.call(TRIVIA_QUESTIONS_BY_TRIP, id)
  ) {
    return [];
  }
  return TRIVIA_QUESTIONS_BY_TRIP[id];
}

/**
 * One round: up to two of the trip's own questions, made up to eight with general ones, in
 * a random order. Each question's answers are shuffled too, and `correctAnswer` follows the
 * right one. With no trip questions, as on the general test, all eight are general.
 */
export function createRound(
  own: readonly TriviaQuestion[] = [],
  random = Math.random,
): TriviaQuestion[] {
  const picked = shuffle(own, random).slice(0, TRIP_QUESTION_COUNT);
  const general = shuffle(GENERAL_TRIVIA_QUESTIONS, random).slice(
    0,
    ROUND_SIZE - picked.length,
  );

  return shuffle([...general, ...picked], random).map((question) => {
    const answers = shuffle(
      question.answers.map((answer, index) => ({
        answer,
        correct: index === question.correctAnswer,
      })),
      random,
    );
    return {
      ...question,
      answers: answers.map(({ answer }) => answer) as TriviaQuestion['answers'],
      correctAnswer: answers.findIndex(({ correct }) => correct),
    };
  });
}

/**
 * What the trivia is called: the trip's name without a trailing Trek, Hike or Tour, so 'ABC
 * Trek' is 'ABC', and Everest for EBC, as on the web. With no trip, the general test's name.
 */
export function triviaName(name: string | undefined, id?: string): string {
  if (!name) return 'Trail Nepal';
  if (id === 'ebc-trek') return 'Everest';
  return name.replace(/\s+(Trek|Hike|Tour)$/i, '').trim();
}

/** The line under the score, as the web words it. */
export function resultMessage(score: number): string {
  if (score === ROUND_SIZE) return 'Perfect trek knowledge!';
  if (score >= 6) return 'You know the trail well!';
  return 'Every trek starts with a little learning.';
}
