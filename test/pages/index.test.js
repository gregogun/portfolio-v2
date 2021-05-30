import Homepage from '../../pages/';
import { render, screen } from '../test-utils';

test('renders only 2 projects in featured section', () => {
  render(<Homepage />);
  expect(screen.getAllByTestId('project-card')).toHaveLength(2);
});

test('renders required props for project cards', () => {
  render(<Homepage />);

  screen.getAllByRole('link', { name: /view code/i });
  screen.getAllByTestId('project-title');
  screen.getAllByTestId('project-description');
});

test('renders required props for newsletter card', () => {
  render(<Homepage />);
  screen.getByPlaceholderText('jimmy@choo.com');
  screen.getByRole('button', { name: /subscribe/i });
});
