function greet(name) {
  if (name === undefined) {
    console.log('Hello there!');
  } else {
    console.log(`Hello ${name}!`);
  }
}

greet();
greet('Simon');