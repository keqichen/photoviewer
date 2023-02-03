import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello world text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React/i);
    expect(textElement).toBeInTheDocument();
});