import { render, fireEvent, screen } from '@testing-library/react';
import Toggle from 'components/Toggle';

describe('Toggle', () => {
  it('displays Toggle', () => {
    // ARRANGE
    const changeTheme = () => {
      if (localStorage.theme === 'light') {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      } else {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
      }
    };
    const { container } = render(<Toggle onClick={changeTheme} theme="light" />);
    expect(container).toBeInTheDocument();

    it('changes theme', () => {
      fireEvent.click(screen.getByTestId('toggle'));

      expect(screen.getByTestId('toggle')).toHaveAttribute('data-theme');
    });
  });
});
