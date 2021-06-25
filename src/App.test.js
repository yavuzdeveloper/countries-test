import { render,cleanup, waitFor, screen } from '@testing-library/react';
import App from './App';
import mockedAxios from 'axios';



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


//axios-mock;

afterEach(cleanup);

test('mocking axios request', async () => {
  const data = {
    countries: [
      { name: 'country1' },
      { name: 'country2' },
      { name: 'country3' }
    ]
  };

  mockedAxios.get.mockResolvedValueOnce(data);
  const { getByText } = render(<App />);

  await waitFor(() => {
    expect(getByText('country1')).toBeInTheDocument();
  });
});