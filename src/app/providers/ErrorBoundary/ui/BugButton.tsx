import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';

// Компонент для тестирования ErrorBouhdary. Не работатет, скорее всего изза плагина "hotmodulereplacementplugin "
// который не дает еще один рендер, что бы ErrorBoundary мог отрисовать fallback
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>Throw error</Button>;
};
