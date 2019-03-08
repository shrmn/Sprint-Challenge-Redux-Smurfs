1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

>.map() .filter() .concat() do not produce side effects.

>Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

>`Actions` Objects with up to two properties. A type and an optional payload.

>`Reducers` calculate a new version of state based on current state and a given action. They're pure functions.

>`Store` is where state is stored in a redux app. It is called the "single source of truth" because it is where the current state of the application lives. You might have multiple `actions` and `reducers` but only ever one store and thus only ever one place for application state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

>Application State is the state of the entire application. Component state is a local state that lives inside an individual component. You should use Application State by default, and Component State when you need to make changes to state before passing it along to Application state, such as in a form component. You want the user to complete the form and submit before you pass their input to Application State and Component state gives you a place to store that "state-in-flux". 

1.  What is middleware?

>Middleware is something used to catch a process, run a funciton on it, then continue or stop the process depending on the desired outcome.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

>`redux-think` is a middleware to handle async operations inside redux action creators. We've been using it to make flow asynchronous so we can make API calls. `redux-thunk` intercepts and looks at what is returned by `action-creators`. If it's an action, it gets forwarded. If it's a function, `redux-thunk` will invoke it and pass in a dispatch function as an argument. This is what makes the process asynchronous.

1.  Which `react-redux` method links up our `components` with our `redux store`?

>connect