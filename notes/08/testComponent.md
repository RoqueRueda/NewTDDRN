# To test react components.

We can create a describe and test, just as we do in jest. For testing components in react we use a wrapper that is used to interact with the component, when the wrapper is created, we can assert or perform actions in the component.

```
import React from "react";
import render from 'react-test-renderer';
import App from '../App'

describe('App', () => {
  test('should render correctly', () => {
    render.create(<App />);
  })
})
```

