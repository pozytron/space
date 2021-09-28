import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import {BrowserRouter as Router} from "react-router-dom"

test('renders The Final Frontier text', () => {
  render(<Router><Header /></Router>);
  const linkElement = screen.getByText(/The Final Frontier/i);
  expect(linkElement).toBeInTheDocument();
});
