import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
  (
    <div className={`app ${theme}`}>
      <ThemeProvider>
        <StoryComponent />
      </ThemeProvider>
    </div>
  );
