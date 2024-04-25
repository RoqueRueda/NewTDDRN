# React-Native Testing Library

To start working with the react native testing library we can install it using the following command:

``` yarn add -D @testing-library/react-native ```

Then we need to replace the imports from react-test-render to.

`import { render } from '@testing-library/react-native'`

After that we can execute `npm run test` to see the execution of the test.
Also is important to remember provide a test id attribute for the components so we can retrieve elements from the reference of the component.

```
    const wrapper = render(<App />);
    wrapper.getByTestId('app');
```
This is useful to find the element that we want to interact to.

