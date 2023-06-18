import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button';

describe('classNames', () => {
  test('with only first param', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('with only first param', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
