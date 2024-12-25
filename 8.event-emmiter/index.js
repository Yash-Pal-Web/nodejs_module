/* const EventEmitter= require('events');

const myFirstEmitter = new EventEmitter();
 */
// register listener

/* myFirstEmitter.on("greet", (name)=>[
  console.log(`Hello ${name}`)
])

myFirstEmitter.emit("greet", "Yash Pal");
 */


/* myFirstEmitter.on('start', () => {
  console.log('started');
});

myFirstEmitter.emit('start'); */

// custom event emitter

const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello';
  }

 /*  sendMessage(message) {
    this.emit('message', message);
  } */
 greet(name){
  this.emit('greeting', `${this.greeting}, ${name}`)
 }
}


const myCustomEmitter = new MyCustomEmitter();
myCustomEmitter.on('greeting', (input)=>{
   console.log("gretting event", input);
})

myCustomEmitter.greet(" Sanjay singh")