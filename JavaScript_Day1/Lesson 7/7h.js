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

  if (from === 'km' && to === 'feet') {
    return length * 3280.84;
  }

  if (from === 'feet' && to === 'km') {
    return length / 3280.84;
  }

  if (from === 'km' && to === 'm') {
    return length * 1000;
  }

  if (from === 'm' && to === 'km') {
    return length / 1000;
  }

  if (from === 'miles' && to === 'm') {
    return length * 1609.34;
  }

  if (from === 'm' && to === 'miles') {
    return length / 1609.34;
  }

  if (from === 'm' && to === 'feet') {
    return length * 3.28084;
  }

  if (from === 'feet' && to === 'm') {
    return length / 3.28084;
  }

  return 'Invalid unit';
}