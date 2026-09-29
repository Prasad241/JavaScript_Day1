function convertLength(length, from, to) {
  if (from === to) {
    return length;
  }

  if (from === 'km' && to === 'miles') {
    return length * 0.625;
  }

  if (from === 'miles' && to === 'km') {
    return length * 1.6;
  }

  if (from === 'miles' && to === 'feet') {
    return length * 5280;
  }

  if (from === 'feet' && to === 'miles') {
    return length / 5280;
  }

  return 'Invalid unit';
}

console.log(convertLength(5, 'lbs', 'lbs'));