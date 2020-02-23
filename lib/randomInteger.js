/**
 * Returns a random integer between 1 and a maximum integer (inclusive).
 *
 * @param {number} max - The largest random integer we want to return
 */
function randomInteger(max) {
  return 1 + Math.floor(Math.random() * max);
}

module.exports = randomInteger;
