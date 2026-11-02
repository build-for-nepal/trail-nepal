import type { TriviaQuestion } from './data/questions';
import { ROUND_SIZE } from './round';

// The web's game, from frontend/src/components/details/TrekTrivia.tsx, as pure state so the
// rules can be checked without rendering anything.

export type TriviaScreen = 'intro' | 'question' | 'result';

export type TriviaState = {
  readonly screen: TriviaScreen;
  readonly round: readonly TriviaQuestion[];
  /** The question showing, by position in `round`. */
  readonly index: number;
  /** The answer picked for it, until the next question. */
  readonly selected: number | null;
  /** Per question: right, wrong, or not answered yet. */
  readonly results: readonly (boolean | null)[];
};

export type TriviaAction =
  | { type: 'start'; round: readonly TriviaQuestion[] }
  | { type: 'choose'; answer: number }
  | { type: 'advance' };

const UNANSWERED: readonly null[] = Array(ROUND_SIZE).fill(null);

export const TRIVIA_INTRO: TriviaState = {
  screen: 'intro',
  round: [],
  index: 0,
  selected: null,
  results: UNANSWERED,
};

/**
 * One answer per question: a second tap does nothing. Moving on needs an answer first, and
 * after the last question it shows the result. A round shorter than ROUND_SIZE is not
 * started.
 */
export function triviaReducer(
  state: TriviaState,
  action: TriviaAction,
): TriviaState {
  switch (action.type) {
    case 'start':
      if (action.round.length < ROUND_SIZE) return state;
      return { ...TRIVIA_INTRO, screen: 'question', round: action.round };
    case 'choose': {
      const question = state.round[state.index];
      if (state.screen !== 'question' || state.selected !== null || !question) {
        return state;
      }
      const results = [...state.results];
      results[state.index] = action.answer === question.correctAnswer;
      return { ...state, selected: action.answer, results };
    }
    case 'advance':
      if (state.screen !== 'question' || state.selected === null) return state;
      if (state.index === ROUND_SIZE - 1) return { ...state, screen: 'result' };
      return { ...state, index: state.index + 1, selected: null };
  }
}

/** The question showing, while one is. */
export function currentQuestion(
  state: TriviaState,
): TriviaQuestion | undefined {
  return state.screen === 'question' ? state.round[state.index] : undefined;
}

/** Whether the shown answer is wrong: the explanation shows, and waits for Next. */
export function isWrongAnswer(state: TriviaState): boolean {
  const question = currentQuestion(state);
  return (
    question !== undefined &&
    state.selected !== null &&
    state.selected !== question.correctAnswer
  );
}

export function scoreOf(state: TriviaState): number {
  return state.results.filter((result) => result === true).length;
}

export const isLastQuestion = (state: TriviaState) =>
  state.index === ROUND_SIZE - 1;
