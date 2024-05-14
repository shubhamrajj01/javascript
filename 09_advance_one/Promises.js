// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

//Promise id for "eventual" completion of task . It is an object in JS. It is a solution to the callback hell.

// A Promise is in one of these states: pending, fulfilled, or rejected.
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// syntax: let promise = new Promise((resolve, reject) => { ...... }) 
// resolve & reject are callbacks provided by JS. They get called when the operation completes successfully or an error occurs.

let promise = new Promise((resolve, reject) => {
    console.log('Promise started');
})

promise; 
// class MyPromise {
//     constructor(executor) {
//         this.state = PENDING;
//         this.value = undefined;
//         this.reason = undefined;
//         this.onFulfilled = [];
//         this.onRejected = [];

//         const resolve = value => {
//             if (this.state === PENDING) {
//                 this.state = FULFILLED;
//                 this.value = value;
//                 this.onFulfilled.forEach(fn => fn());
//             }
//         };

//         const reject = reason => {
//             if (this.state === PENDING) {
//                 this.state = REJECTED;
//                 this.reason = reason;
//                 this.onRejected.forEach(fn => fn());
//             }
//         };

//         try {
//             executor(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }

//     then(onFulfilled, onRejected) {
//         if (this.state === FULFILLED) {
//             onFulfilled(this.value);
//         } else if (this.state === REJECTED) {
//             onRejected(this.reason);
//         } else if (this.state === PENDING) {
//             this.onFulfilled.push(() => onFulfilled(this.value));
//             this.onRejected.push(() => onRejected(this.reason));
//         }
//     }
// }