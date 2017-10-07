function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function() {
  return getRandomInt(-1, 1);
}
