import { useEffect, useEffectEvent, useReducer } from 'react';

import type { TriviaQuestion } from '../data/questions';
import {
  currentQuestion,
  isLastQuestion,
  isWrongAnswer,
  scoreOf,
  TRIVIA_INTRO,
  triviaReducer,
} from '../game';
import { createRound } from '../round';

/** How long "Correct!" shows before the next question, as on the web. */
export const CORRECT_ADVANCE_MS = 1100;

type TriviaGameOptions = {
  /** Deal a round straight away instead of showing the intro, as the web's `autoStart`. */
  autoStart?: boolean;
};

/**
 * One game of trivia over a trip's own questions, or none for the general test. A right
 * answer moves on by itself; a wrong one waits for `advance`, after its explanation.
 */
export function useTriviaGame(
  questions: readonly TriviaQuestion[],
  { autoStart = false }: TriviaGameOptions = {},
) {
  const [state, dispatch] = useReducer(triviaReducer, TRIVIA_INTRO);

  const start = () =>
    dispatch({ type: 'start', round: createRound(questions) });

  // Dealt after mount rather than during render: the static web export renders screens in
  // Node, and a random round there would not match the one dealt on the device. Until then
  // the screen is 'intro'.
  const dealFirstRound = useEffectEvent(start);
  useEffect(() => {
    if (autoStart) dealFirstRound();
  }, [autoStart]);

  const wrong = isWrongAnswer(state);
  const answeredRight = state.selected !== null && !wrong;
  // Cleared by any change that ends the wait: the move itself, a new round, or leaving the
  // screen, so a timer can never move on a game that is gone.
  useEffect(() => {
    if (!answeredRight) return;
    const timer = setTimeout(
      () => dispatch({ type: 'advance' }),
      CORRECT_ADVANCE_MS,
    );
    return () => clearTimeout(timer);
  }, [answeredRight, state.index]);

  return {
    screen: state.screen,
    round: state.round,
    index: state.index,
    question: currentQuestion(state),
    selected: state.selected,
    results: state.results,
    score: scoreOf(state),
    isWrong: wrong,
    isLast: isLastQuestion(state),
    start,
    choose: (answer: number) => dispatch({ type: 'choose', answer }),
    advance: () => dispatch({ type: 'advance' }),
  };
}
