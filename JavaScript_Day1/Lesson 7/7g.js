function convertLength(length, from, to) {
  if (from === 'km' && to === 'miles') {
    return length * 0.625;
  } else if (from === 'miles' && to === 'km') {
    return length * 1.6;
  } else if (from === 'miles' && to === 'feet') {
    return length * 5280;
  } else if (from === 'feet' && to === 'miles') {
    return length / 5280;
  } else if (from === 'km' && to === 'feet') {
    return length * 3280.84;
  } else if (from === 'feet' && to === 'km') {
    return length / 3280.84;
  } else if (from === to) {
    return length;
  }
}

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'feet'));