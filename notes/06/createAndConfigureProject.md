# Configure newly created project

We want to create a `src` folder that will hold the files also the test files by convention lives in a `__test__` directory inside of each subdirectory where a component or code will be tested.

Usually test files have the name of the component/class/thing to be tested suffix with test, ej if we have a file called `App.tsx` we will have a test file called `__test__/App.test.tsx`.

When we test using jest first we call the `describe` function. This function lets us indicate what does the test will do.
This function is also used to group tests.

Also we need to create one or more `test` calls where we can call and assert the values for our tests.

In order to run our tests, we can do it with.
`npm run test` command.
