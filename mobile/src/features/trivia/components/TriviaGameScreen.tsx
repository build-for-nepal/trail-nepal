import { StatusBar } from 'expo-status-bar';
import { Check, RotateCcw, X } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { LayoutChangeEvent } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  Keyframe,
  LinearTransition,
  SlideInDown,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { triviaColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import type { TriviaQuestion } from '../data/questions';
import { useTriviaGame } from '../hooks/useTriviaGame';
import { ANSWER_LETTERS, resultMessage, ROUND_SIZE } from '../round';
import { TriviaBackButton } from './TriviaBackButton';
import { TriviaButton } from './TriviaButton';
import { SCENE_FOOT, TriviaScene } from './TriviaScene';

// TrekTrivia.module.css's entrances, all on its cubic-bezier(0.22, 0.75, 0.3, 1). Layout
// animations skip themselves under Reduce Motion, as the web's do.
const ENTER_EASE = Easing.bezier(0.22, 0.75, 0.3, 1);
/** scene-enter: each question rises 12 px into place as it fades in. */
const SCENE_ENTER = new Keyframe({
  0: { opacity: 0, transform: [{ translateY: 12 }] },
  100: { opacity: 1, transform: [{ translateY: 0 }], easing: ENTER_EASE },
}).duration(480);
/** feedback-enter: "Correct!" and "OOPS, WRONG ONE" pop in. */
const FEEDBACK_ENTER = new Keyframe({
  0: { opacity: 0, transform: [{ translateY: 5 }, { scale: 0.94 }] },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }],
    easing: ENTER_EASE,
  },
}).duration(360);
/** The question block's glide to its new centre when the feedback or explanation shows. */
const RECENTRE = LinearTransition.duration(300).easing(ENTER_EASE);

type TriviaGameScreenProps = {
  /** What the trivia is called, from triviaName(): 'Everest', 'Lumbini'. */
  name: string;
  /** The trip's own questions; none for the general test. */
  questions: readonly TriviaQuestion[];
  onBack: () => void;
};

/**
 * A round of trivia, full screen, as the web's TrekTrivia once started: the questions one at
 * a time, an explanation after a wrong answer, then the score. It opens on the first
 * question; the trip's intro card is the web's intro.
 */
export function TriviaGameScreen({
  name,
  questions,
  onBack,
}: TriviaGameScreenProps) {
  const insets = useSafeAreaInsets();
  const game = useTriviaGame(questions, { autoStart: true });
  const scroll = useRef<ScrollView>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  // Each question, and the result, starts at the top.
  useEffect(() => {
    scroll.current?.scrollTo({ y: 0, animated: false });
  }, [game.index, game.screen]);

  useEffect(() => {
    if (game.screen !== 'result') return;
    AccessibilityInfo.announceForAccessibility(
      `You scored ${game.score} out of ${ROUND_SIZE}. ${resultMessage(game.score)}`,
    );
  }, [game.screen, game.score]);

  const choose = (answer: number) => {
    const question = game.question;
    if (!question || game.selected !== null) return;
    game.choose(answer);
    const right = question.correctAnswer;
    AccessibilityInfo.announceForAccessibility(
      answer === right
        ? 'Correct!'
        : `Wrong. The answer is ${ANSWER_LETTERS[right]}, ${question.answers[right]}.`,
    );
  };

  const onPanelLayout = (event: LayoutChangeEvent) => {
    setPanelHeight(event.nativeEvent.layout.height);
  };

  const question = game.question;
  const explaining = game.isWrong && question !== undefined;

  return (
    <View className="flex-1 bg-trivia-sky">
      <StatusBar style="dark" />
      <TriviaScene stage={game.screen === 'result' ? 'result' : 'question'} />

      <ScrollView
        ref={scroll}
        contentContainerStyle={{
          // At least the screen's height, so the content can sit centred in the sky.
          flexGrow: 1,
          paddingTop: insets.top + 8,
          // Clear of Himal and the hills, or of the explanation while it shows.
          paddingBottom: explaining ? panelHeight + 16 : SCENE_FOOT + 24,
        }}
      >
        <View className="px-[18px]">
          <TriviaBackButton onPress={onBack} />
        </View>

        {game.screen === 'question' && question ? (
          // A new view per question, so each one rises in as the web's does.
          <Animated.View
            key={game.index}
            entering={SCENE_ENTER}
            style={{ flex: 1 }}
          >
            <QuestionView
              name={name}
              question={question}
              index={game.index}
              results={game.results}
              selected={game.selected}
              wrong={game.isWrong}
              onChoose={choose}
            />
          </Animated.View>
        ) : null}

        {game.screen === 'result' ? (
          <View className="flex-1 items-center justify-center px-[18px] py-[24px]">
            <Text className="text-center font-poppins-semibold text-[13px] leading-[18px] tracking-[2.6px] text-trivia-right-text">
              {name} Trivia complete
            </Text>
            <Text
              accessibilityRole="header"
              accessibilityLabel={`You scored ${game.score} out of ${ROUND_SIZE}`}
              className="mt-[12px] text-center font-fraunces text-[32px] leading-[40px] text-ink"
            >
              You scored {game.score}/{ROUND_SIZE}
            </Text>
            <Text className="mt-[16px] max-w-[320px] text-center font-poppins-medium text-[14px] leading-[21px] text-trivia-slate">
              {resultMessage(game.score)}
            </Text>
            <View className="mt-[28px] w-full max-w-[384px]">
              <TriviaButton
                label="Play again"
                icon={RotateCcw}
                onPress={game.start}
              />
            </View>
          </View>
        ) : null}
      </ScrollView>

      {explaining ? (
        <>
          {/* The web blurs the game behind; a light wash stands in. */}
          <Animated.View
            entering={FadeIn.duration(300)}
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: triviaColor.scrim, pointerEvents: 'none' },
            ]}
          />
          <Animated.View
            entering={SlideInDown.duration(460).easing(ENTER_EASE)}
            style={styles.panelFrame}
          >
            <View
              onLayout={onPanelLayout}
              className="rounded-t-[16px] bg-surface px-[18px] pt-[28px]"
              style={[styles.panel, { paddingBottom: insets.bottom + 16 }]}
            >
              <View
                className="absolute -top-[16px] left-[24px] rounded-full bg-surface px-[16px] py-[8px]"
                style={styles.lift}
              >
                <Text className="font-poppins-semibold text-[12px] uppercase leading-[16px] text-trivia-slate">
                  Explanation
                </Text>
              </View>
              <Text className="font-poppins-medium text-[14px] leading-[21px] text-trivia-slate">
                Correct answer:{' '}
                <Text className="font-poppins-semibold">
                  {ANSWER_LETTERS[question.correctAnswer]} -{' '}
                  {question.answers[question.correctAnswer]}
                </Text>
              </Text>
              <Text className="mt-[12px] font-poppins text-[14px] leading-[22px] text-muted">
                {question.explanation}
              </Text>
              <View className="mt-[16px]">
                <TriviaButton
                  label={game.isLast ? 'See results' : 'Next question'}
                  onPress={game.advance}
                />
              </View>
            </View>
          </Animated.View>
        </>
      ) : null}
    </View>
  );
}

type QuestionViewProps = {
  name: string;
  question: TriviaQuestion;
  index: number;
  results: readonly (boolean | null)[];
  selected: number | null;
  wrong: boolean;
  onChoose: (answer: number) => void;
};

/**
 * One question: the title and progress, then the question, or how the answer went, over
 * its four answers. A wrong answer tightens the spacing, as the web's does, to leave room
 * for the explanation.
 */
function QuestionView({
  name,
  question,
  index,
  results,
  selected,
  wrong,
  onChoose,
}: QuestionViewProps) {
  const answered = selected !== null;

  return (
    <View className="flex-1 px-[18px] pt-[16px]">
      <Text className="font-fraunces text-[24px] leading-[30px] text-trivia-right-text">
        {name} Trivia
      </Text>
      <Text className="mt-[4px] font-poppins-medium text-[13px] leading-[18px] text-ink">
        {index + 1}/{ROUND_SIZE} Questions
      </Text>

      <View
        accessible
        accessibilityLabel={`Question ${index + 1} of ${ROUND_SIZE}`}
        className="mt-[12px] flex-row gap-[4px]"
      >
        {results.map((result, position) => (
          <View
            key={position}
            className={cn(
              'h-[10px] flex-1 rounded-full',
              result === false
                ? 'bg-trivia-wrong'
                : result === true
                  ? 'bg-trivia-right'
                  : position === index
                    ? 'bg-surface'
                    : 'bg-trivia-pending',
            )}
          />
        ))}
      </View>

      {/* The question and its answers sit centred in the sky between the progress bar and
          the hills, and glide to their new place as the feedback or explanation changes it. */}
      <View className="flex-1 justify-center py-[24px]">
        <Animated.View layout={RECENTRE}>
          <View
            className={cn(
              'items-center justify-center',
              wrong ? 'min-h-[48px]' : 'min-h-[64px]',
            )}
          >
            {wrong ? (
              <Animated.View entering={FEEDBACK_ENTER}>
                <Text className="text-center font-poppins-semibold text-[24px] leading-[32px] text-trivia-slate">
                  OOPS,{' '}
                  <Text className="text-trivia-wrong-text">WRONG ONE</Text>
                </Text>
              </Animated.View>
            ) : answered ? (
              <Animated.View entering={FEEDBACK_ENTER}>
                <Text className="text-center font-poppins-semibold text-[20px] leading-[28px] text-trivia-right-text">
                  Correct!
                </Text>
              </Animated.View>
            ) : (
              <Text
                accessibilityRole="header"
                className="text-center font-poppins-semibold text-[20px] leading-[28px] text-ink"
              >
                {question.question}
              </Text>
            )}
          </View>

          <View
            className={wrong ? 'mt-[12px] gap-[8px]' : 'mt-[24px] gap-[12px]'}
          >
            {question.answers.map((answer, position) => (
              <AnswerOption
                key={answer}
                letter={ANSWER_LETTERS[position]}
                answer={answer}
                state={
                  answered && position === question.correctAnswer
                    ? 'right'
                    : selected === position
                      ? 'wrong'
                      : 'idle'
                }
                chosen={selected === position}
                disabled={answered}
                compact={wrong}
                onPress={() => onChoose(position)}
              />
            ))}
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

type AnswerOptionProps = {
  letter: string;
  answer: string;
  /** Right once any answer is in; wrong only for the one picked. */
  state: 'idle' | 'right' | 'wrong';
  chosen: boolean;
  disabled: boolean;
  compact: boolean;
  onPress: () => void;
};

function AnswerOption({
  letter,
  answer,
  state,
  chosen,
  disabled,
  compact,
  onPress,
}: AnswerOptionProps) {
  const outcome =
    state === 'right'
      ? chosen
        ? ', correct'
        : ', the correct answer'
      : state === 'wrong'
        ? ', your answer, wrong'
        : '';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${letter}, ${answer}${outcome}`}
      accessibilityState={{ disabled, selected: chosen }}
      disabled={disabled}
      onPress={onPress}
    >
      {({ pressed }) => (
        <View
          className={cn(
            'flex-row items-center gap-[12px] rounded-[16px] border-2 px-[12px] py-[8px]',
            compact ? 'min-h-[48px]' : 'min-h-[64px]',
            state === 'right'
              ? 'border-trivia-right bg-trivia-right-tint'
              : state === 'wrong'
                ? 'border-trivia-wrong bg-trivia-wrong-tint'
                : pressed
                  ? 'border-trivia-right bg-surface'
                  : 'border-surface bg-surface',
          )}
          style={[
            styles.answer,
            { transform: [{ scale: pressed ? 0.98 : 1 }] },
          ]}
        >
          <View
            className={cn(
              'h-[36px] w-[36px] items-center justify-center rounded-[12px]',
              state === 'right'
                ? 'bg-trivia-right-tile'
                : state === 'wrong'
                  ? 'bg-trivia-wrong'
                  : 'bg-field',
            )}
          >
            {state === 'right' ? (
              <Check size={20} strokeWidth={3} color={triviaColor.tick} />
            ) : state === 'wrong' ? (
              <X size={20} strokeWidth={3} color={triviaColor.cross} />
            ) : (
              <Text className="font-poppins-semibold text-[14px] leading-[20px] text-muted">
                {letter}
              </Text>
            )}
          </View>
          <Text className="flex-1 font-poppins-medium text-[14px] leading-[20px] text-ink">
            {answer}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. As the web's: shadow-sm on answers and the pill, a soft lift on the panel.
const styles = StyleSheet.create({
  answer: { boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' },
  lift: {
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  },
  panelFrame: { position: 'absolute', left: 0, right: 0, bottom: 0 },
  panel: { boxShadow: '0 -8px 30px rgba(0, 0, 0, 0.14)' },
});
