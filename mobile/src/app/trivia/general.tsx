import { TriviaGameScreen, triviaName } from '@/features/trivia';
import { useGoBack } from '@/hooks/useGoBack';

// No trip's own questions: a round of eight general ones, under the web's 'Trail Nepal'.
const NO_TRIP_QUESTIONS = [] as const;

export default function GeneralTrivia() {
  const goBack = useGoBack();
  return (
    <TriviaGameScreen
      name={triviaName(undefined)}
      questions={NO_TRIP_QUESTIONS}
      onBack={goBack}
    />
  );
}
