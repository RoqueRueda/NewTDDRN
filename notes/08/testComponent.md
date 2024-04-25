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
* The tests may request you to add @types/jest, you can do this with:

``` yarn add --dev @types/jest jest ```

https://dev.to/lbenie/how-to-add-types-with-jest-and-typescript-1bai#:~:text=or%20with%20yarn,number)%20=%3E%20a%20+%20b

