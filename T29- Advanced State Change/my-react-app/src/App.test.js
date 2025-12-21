import { render, screen } from '@testing-library/react';
import App from '/Volumes/My Disk 2/React/React_learnings/T24-Create React App using Javascript/my-react-app/src/App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});