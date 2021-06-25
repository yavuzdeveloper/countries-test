import { render, screen } from '@testing-library/react';
import App from './App';


test('renders react-logo', () => {
  render(<App />);
  const logoReact = screen.getByRole("img");
  
  expect(logoReact).toHaveAttribute("src", "https://avatars3.githubusercontent.com/u/60869810?v=4")
  expect(logoReact).toHaveAttribute('alt', "react-logo");
});


test('renders Countires title', () => {
  render(<App />);
  const titleElement = screen.getByText(/countries/i);

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent(/countries/i);
});


test('renders loading...', () => {
  render(<App />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
  expect(loadingElement).toHaveTextContent(/loading.../i)
});
