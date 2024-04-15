import React from "react";
import render from 'react-test-renderer';
import App from '../App'

describe('App', () => {
  test('should render correctly', () => {
    render.create(<App />);
  })
})

