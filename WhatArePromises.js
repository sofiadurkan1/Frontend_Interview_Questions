//What is Promise?


// A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:
// Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
// Rejected: onRejected() will be called (e.g., reject() was called)
// Pending: not yet fulfilled or rejected

//They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.


//PARAMETERS

// Promise constructor takes only one argument,a callback function.
// Callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.