import { render } from '@testing-library/react';
import Country from "./Country";
import App from "./App";


beforeEach(() => {
  render(<App />);
});

test("renders country components", () => {
render(<Country />);
});
