# Tools for Testing.

Writing tests is one thing but at some point we need to organize them, find them in our files, run them in a given environment and get the results of the tests. This is the job of a test runner.

Usually we will have to verify some values match with the expected ones, this is the role of Assertions.

When we create our unit test some of them may have external dependencies, we may have a dependency that is native and not available in our test environment. Or make a call to an API that is not accessible in our environment.
This is where mocks and spys becomes handy, they allow you to replace or provide some fake data.

## Test Runner.

Jest is a complete testing framework that comes with assertions, tools, and spys.

## Implementation details
: We should not test the details of the implementation 
https://www.youtube.com/watch?v=EZ05e7EMOLM

The trigger to a test must be a requirement not a simple function to be added. And we should not focus on the details of that implementation but rather their behaviour (it's exposed interface).

**Example**
A button with a text that increments every time the user clicks on it.

If we implement this a class component in react and we test that the state inside the component changes with the user clicks, we will be testing the implementation details, and if we change this to a function component where no state is used then the test will fail.

However if we test the click and just verify the text displayed in the button, we could change this class component to a stateless component and the test should remain valid.

