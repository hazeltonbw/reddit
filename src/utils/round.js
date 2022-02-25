/**
 * Rounds a number (n) to the nearest precision
 * @param {number} n
 * @param {number} precision
 */

export default function round(n, precision) {
  var prec = Math.pow(10, precision);
  return Math.round(n * prec) / prec;
}
