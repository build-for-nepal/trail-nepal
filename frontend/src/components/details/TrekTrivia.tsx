'use client';

import { Check, RotateCcw, Share2, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { TREK_DETAILS } from '@/static/trekDetails';
import {
  TRIVIA_QUESTIONS_BY_TREK,
  type TriviaQuestion,
} from '@/static/triviaQuestions';
import {
  Airplane,
  Cloud2,
  Destination,
  GrassBg,
  Mascot,
} from '@/assets/trivia';
import styles from './TrekTrivia.module.css';

type Props = {
  trekId?: string;
  questionPool?: TriviaQuestion[];
  triviaNameOverride?: string;
  autoStart?: boolean;
  embedded?: boolean;
};
type GameScreen = 'intro' | 'question' | 'result';

const ROUND_SIZE = 8;
const LETTERS = ['A', 'B', 'C', 'D'];
const getTriviaName = (name: string) => name.replace(/\s+Trek$/i, '').trim();

const shuffle = <T,>(items: T[]) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
};

const createRound = (questions: TriviaQuestion[]) =>
  shuffle(questions)
    .slice(0, ROUND_SIZE)
    .map((question) => {
      const shuffledAnswers = shuffle(
        question.answers.map((answer, index) => ({
          answer,
          correct: index === question.correctAnswer,
        })),
      );

      return {
        ...question,
        answers: shuffledAnswers.map(
          ({ answer }) => answer,
        ) as TriviaQuestion['answers'],
        correctAnswer: shuffledAnswers.findIndex(({ correct }) => correct),
      };
    });

export default function TrekTrivia({
  trekId,
  questionPool,
  triviaNameOverride,
  autoStart = false,
  embedded = false,
}: Props) {
  const trek = trekId ? TREK_DETAILS[trekId] : undefined;
  const availableQuestions =
    questionPool ?? (trekId ? TRIVIA_QUESTIONS_BY_TREK[trekId] ?? [] : []);
  const triviaName =
    triviaNameOverride ??
    (trek
      ? trekId === 'ebc-trek'
        ? 'Everest'
        : getTriviaName(trek.name)
      : 'Trail Nepal');
  const [screen, setScreen] = useState<GameScreen>(
    autoStart ? 'question' : 'intro',
  );
  const [round, setRound] = useState<TriviaQuestion[]>(() =>
    autoStart ? createRound(availableQuestions) : [],
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerResults, setAnswerResults] = useState<(boolean | null)[]>(() =>
    Array(ROUND_SIZE).fill(null),
  );
  const [score, setScore] = useState(0);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (availableQuestions.length < ROUND_SIZE) return null;

  const currentQuestion = round[questionIndex];
  const routeMaskId = `trivia-route-mask-${trekId ?? 'general'}`;
  const isWrongAnswer =
    screen === 'question' &&
    selectedAnswer !== null &&
    currentQuestion !== undefined &&
    selectedAnswer !== currentQuestion.correctAnswer;

  const startGame = () => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setRound(createRound(availableQuestions));
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswerResults(Array(ROUND_SIZE).fill(null));
    setScore(0);
    setScreen('question');
  };

  const chooseAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    setSelectedAnswer(answerIndex);
    setAnswerResults((results) => {
      const nextResults = [...results];
      nextResults[questionIndex] = isCorrect;
      return nextResults;
    });
    if (isCorrect) setScore((value) => value + 1);

    if (isCorrect) {
      advanceTimer.current = setTimeout(() => advanceQuestion(), 1100);
    }
  };

  const advanceQuestion = () => {
    if (questionIndex === ROUND_SIZE - 1) setScreen('result');
    else {
      setQuestionIndex((value) => value + 1);
      setSelectedAnswer(null);
    }
  };

  const shareTrivia = async () => {
    const shareData = {
      title: `${triviaName} Trivia | Trail Nepal`,
      text: `I scored ${score}/${ROUND_SIZE} on Trail Nepal's ${triviaName} Trivia!`,
      url: window.location.href,
    };
    if (navigator.share)
      await navigator.share(shareData).catch(() => undefined);
    else
      await navigator.clipboard?.writeText(
        `${shareData.text} ${shareData.url}`,
      );
  };

  return (
    <section
      className={
        embedded
          ? 'bg-transparent p-0'
          : 'bg-white px-6 pb-8 pt-2 sm:px-10 lg:px-20 lg:pb-12'
      }
    >
      <div
        id="trivia"
        className="relative mx-auto min-h-[560px] w-full max-w-7xl overflow-hidden rounded-3xl bg-[#bde4fa] px-5 py-8 shadow-[0_3px_8px_rgba(0,0,0,0.18)] sm:aspect-[2.5/1] sm:min-h-0 sm:px-10 lg:px-16"
      >
        <Cloud2
          className={`${styles.cloudLeft} pointer-events-none absolute left-5 top-20 w-28 sm:left-10 sm:w-36 lg:w-44`}
          aria-hidden="true"
        />
        <Cloud2
          className={`${styles.cloudRight} pointer-events-none absolute right-3 top-24 w-40 sm:right-8 sm:w-52 lg:w-64`}
          aria-hidden="true"
        />

        {screen === 'intro' && (
          <>
            <div
              className={`${styles.airplane} pointer-events-none absolute top-44 z-10 w-16 sm:w-22 lg:top-46 lg:w-28`}
              aria-hidden="true"
            >
              <Airplane className="h-auto w-full" aria-hidden="true" />
            </div>
            <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center pt-2 text-center lg:pt-4">
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#536c0b] sm:text-base">
                {triviaName} Trivia
              </p>
              <h2 className="max-w-xl text-3xl font-semibold text-[#272922] sm:text-4xl lg:text-[42px]">
                How well do you know {triviaName}?
              </h2>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium text-[#272922] sm:text-sm">
                <span>{ROUND_SIZE} Questions</span>
                <span className="size-1.5 rounded-full bg-white" />
                <span>~ 2 minutes</span>
              </div>
              <button
                type="button"
                onClick={startGame}
                className="mt-7 rounded-xl bg-[#88b112] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#789f00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#526e00] sm:text-base"
              >
                Play {triviaName} Trivia
              </button>
            </div>
          </>
        )}

        {screen === 'question' && currentQuestion && (
          <div
            key={questionIndex}
            className={`${styles.scene} relative ${isWrongAnswer ? 'z-40' : 'z-20'}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-heading text-2xl font-semibold text-[#5F7C0D] sm:text-2xl">
                  {triviaName} Trivia
                </p>
                <p className="mt-1 text-sm font-medium text-[#272922] sm:text-sm">
                  Question {questionIndex + 1}
                  <span className="mx-3 text-white">•</span>~ 25 secs
                </p>
              </div>
              <div
                className="flex gap-1.5 pt-2"
                aria-label={`Question ${questionIndex + 1} of ${ROUND_SIZE}`}
              >
                {round.map((_, index) => {
                  const result = answerResults[index];
                  const segmentColor =
                    result === false
                      ? 'bg-[#eb542d]'
                      : result === true || index === questionIndex
                        ? 'bg-[#88b112]'
                        : 'bg-[#f4f6e7]';

                  return (
                    <span
                      key={index}
                      className={`h-2.5 w-8 rounded-full transition-colors duration-300 sm:w-10 ${segmentColor}`}
                    />
                  );
                })}
              </div>
            </div>
            <div
              className={`mx-auto flex max-w-3xl items-center justify-center text-center transition-all duration-300 ${isWrongAnswer ? 'mt-3 min-h-12 sm:min-h-14' : 'mt-7 min-h-16 sm:min-h-20'}`}
            >
              {selectedAnswer !== null &&
              selectedAnswer !== currentQuestion.correctAnswer ? (
                <h2
                  className={`${styles.feedback} text-3xl font-semibold text-[#40545a]`}
                >
                  OOPS, <span className="text-[#eb542d]">WRONG ONE</span>
                </h2>
              ) : (
                <h2 className="text-2xl font-semibold text-[#272922]">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <span className={`${styles.feedback} text-[#668600]`}>
                      Correct!
                    </span>
                  ) : (
                    currentQuestion.question
                  )}
                </h2>
              )}
            </div>
            <div
              className={`mx-auto grid max-w-3xl grid-cols-1 transition-all duration-300 sm:grid-cols-2 ${isWrongAnswer ? 'mt-3 gap-2 sm:gap-3' : 'mt-6 gap-3 sm:gap-4'}`}
            >
              {currentQuestion.answers.map((answer, index) => {
                const isChosen = selectedAnswer === index;
                const isCorrect =
                  selectedAnswer !== null &&
                  index === currentQuestion.correctAnswer;
                const isWrong = isChosen && !isCorrect;
                return (
                  <button
                    key={answer}
                    type="button"
                    disabled={selectedAnswer !== null}
                    onClick={() => chooseAnswer(index)}
                    className={`${styles.optionTilt} flex items-center gap-4 rounded-2xl border-2 px-4 text-left text-sm font-medium text-[#272922] shadow-sm transition-all duration-300 sm:px-5 ${isWrongAnswer ? 'min-h-12 sm:min-h-14' : 'min-h-18'} ${isCorrect ? 'border-[#88B112] bg-[#F3F7E7]' : isWrong ? 'border-[#eb542d] bg-[#fff0ed]' : 'border-white bg-white hover:border-[#88B112]'}`}
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${isCorrect ? 'bg-[#9bc331] text-white' : isWrong ? 'bg-[#eb542d] text-white' : 'bg-[#eef0ed] text-[#72766e]'}`}
                    >
                      {isCorrect ? (
                        <Check
                          className="size-5"
                          strokeWidth={3}
                          aria-label="Correct"
                        />
                      ) : isWrong ? (
                        <X
                          className="size-5"
                          strokeWidth={3}
                          aria-label="Incorrect"
                        />
                      ) : (
                        LETTERS[index]
                      )}
                    </span>
                    <span>{answer}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {screen === 'question' &&
          currentQuestion &&
          isWrongAnswer && (
            <>
              <div
                className={`${styles.blurOverlay} pointer-events-none absolute inset-0 z-30 bg-white/5 backdrop-blur-[2px]`}
              />
              <div
                className={`${styles.explanationPanel} absolute inset-x-0 bottom-0 z-50 rounded-t-2xl bg-white p-5 pt-7 text-left shadow-[0_-8px_30px_rgba(0,0,0,0.14)] sm:px-7 sm:pb-6 sm:pt-8`}
              >
                <span className="absolute -top-5 left-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase text-[#40545a] shadow-sm">
                  Explanation
                </span>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex max-w-5xl flex-col gap-3">
                    <p className="text-sm font-medium text-[#40545a] sm:text-base">
                      Correct answer:{' '}
                      <strong>
                        {LETTERS[currentQuestion.correctAnswer]} -{' '}
                        {currentQuestion.answers[currentQuestion.correctAnswer]}
                      </strong>
                    </p>
                    <p className="text-sm leading-6 text-[#5f665f] sm:text-base">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={advanceQuestion}
                    className="shrink-0 self-start rounded-xl bg-[#88b112] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#789f00] sm:self-auto"
                  >
                    {questionIndex === ROUND_SIZE - 1
                      ? 'See results'
                      : 'Next question'}
                  </button>
                </div>
              </div>
            </>
          )}

        {screen === 'result' && (
          <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center pt-10 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#536c0b]">
              {triviaName} Trivia complete
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#272922] sm:text-5xl">
              You scored {score}/{ROUND_SIZE}
            </h2>
            <p className="mt-4 max-w-md text-sm font-medium text-[#40545a] sm:text-base">
              {score === ROUND_SIZE
                ? 'Perfect trek knowledge!'
                : score >= 6
                  ? 'You know the trail well!'
                  : 'Every trek starts with a little learning.'}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={startGame}
                className="inline-flex items-center gap-2 rounded-xl bg-[#88b112] px-6 py-3 font-medium text-white hover:bg-[#789f00]"
              >
                <RotateCcw className="size-4" />
                Play again
              </button>
              {/* <button
                type="button"
                onClick={shareTrivia}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-[#40545a] shadow-sm hover:text-[#668600]"
              >
                <Share2 className="size-4" />
                Share score
              </button> */}
            </div>
          </div>
        )}

        {screen !== 'intro' && (
          <svg
            className="pointer-events-none absolute bottom-12 left-[9%] z-10 hidden h-16 w-[82%] sm:block"
            viewBox="0 0 900 90"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <mask
                id={routeMaskId}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="900"
                height="90"
              >
                <rect width="900" height="90" fill="white" />
                {screen === 'result' && (
                  <rect
                    className={styles.routeEraser}
                    width="900"
                    height="90"
                    fill="black"
                  />
                )}
              </mask>
            </defs>
            <path
              d="M0 35 C170 90 260 5 430 45 S700 80 900 18"
              stroke="#263c2e"
              strokeWidth="2"
              strokeDasharray="12 14"
              mask={`url(#${routeMaskId})`}
            />
          </svg>
        )}
        {screen === 'result' &&
          Array.from({ length: 34 }, (_, index) => (
            <span
              key={index}
              className={styles.confetti}
              style={{
                left: `${(index * 37) % 100}%`,
                backgroundColor: ['#88b112', '#ee5a63', '#376bb6', '#ffcc49'][
                  index % 4
                ],
                animationDelay: `${2.75 + (index % 9) * 0.16}s`,
                animationDuration: `${2.2 + (index % 5) * 0.22}s`,
              }}
            />
          ))}
        <GrassBg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full"
          aria-hidden="true"
        />
        {screen === 'result' ? (
          <div
            className={`${styles.mascotJourney} absolute bottom-8 left-5 z-10 w-18 sm:w-24 lg:w-28`}
          >
            <div className={styles.mascotWalker}>
              <Mascot
                role="img"
                aria-label="Trail Nepal hiker mascot at the destination"
                className="h-auto w-full"
              />
            </div>
          </div>
        ) : (
          <Mascot
            role="img"
            aria-label="Trail Nepal hiker mascot"
            className={`${styles.mascot} absolute bottom-8 left-5 z-10 w-18 sm:left-12 sm:w-24 lg:left-24 lg:w-28`}
          />
        )}
        {screen !== 'intro' && (
          <Destination
            role="img"
            aria-label="Trail destination flag"
            className="absolute bottom-8 right-4 z-10 w-24 sm:right-10 sm:w-32 lg:right-18 lg:w-40"
          />
        )}
      </div>
    </section>
  );
}
