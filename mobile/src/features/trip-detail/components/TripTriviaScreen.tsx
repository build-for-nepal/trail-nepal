import type { TripType } from '@/features/explore';
import { TriviaGameScreen, triviaName, tripQuestions } from '@/features/trivia';

import { getTripDetail } from '../data';
import { useGoBack } from '../hooks/useGoBack';
import { TripNotFound } from './TripNotFound';

type TripTriviaScreenProps = {
  type: TripType;
  id: string | undefined;
};

/** A trip's trivia: a round of its own questions and general ones, under its name. */
export function TripTriviaScreen({ type, id }: TripTriviaScreenProps) {
  const goBack = useGoBack();
  const detail = id ? getTripDetail(type, id) : undefined;
  if (!id || !detail) return <TripNotFound />;

  return (
    <TriviaGameScreen
      name={triviaName(detail.name, id)}
      questions={tripQuestions(id)}
      onBack={goBack}
    />
  );
}
