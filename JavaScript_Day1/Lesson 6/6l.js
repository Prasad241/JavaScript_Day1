let cartQuantity = 3;

if (cartQuantity - 2 < 0) {
  console.log('Not enough items in the cart');
} else {
  cartQuantity -= 2;
  console.log(cartQuantity);
}

if (cartQuantity - 1 < 0) {
  console.log('Not enough items in the cart');
} else {
  cartQuantity -= 1;
  console.log(cartQuantity);
}