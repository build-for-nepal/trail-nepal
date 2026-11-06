import { TriviaHubScreen } from '@/features/trivia';
import { useGoBack } from '@/hooks/useGoBack';

export default function TriviaHub() {
  const goBack = useGoBack();
  return <TriviaHubScreen onBack={goBack} />;
}
