const sentence = "hello there from lighthouse labs";

let t = 1000;

function type () {
  for (const char of sentence) {

    setTimeout( () => {
      process.stdout.write(char)
  
    }, t)
  
    t += 30;
  }
  return Promise.resolve()
} 

type().then( () => {
  setTimeout( () => {
    process.stdout.write("\nSomething");
  }, t)
})

