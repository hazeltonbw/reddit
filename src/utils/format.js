import round from "./round";

var pow = Math.pow,
  floor = Math.floor,
  abs = Math.abs,
  log = Math.log;
var abbrev = "kmb";

/**
 * @param {number} n
 * Formats large numbers into shortened numbers
 * using abbreviations
 *
 * "k" for thousands,
 * "m" for millions,
 * "b" for billions.
 *
 * Ex: 35,069 => 35k
 * Ex: 919 => 919
 */

export default function format(n) {
  var base = floor(log(abs(n)) / log(1000));
  var suffix = abbrev[Math.min(2, base - 1)];
  base = abbrev.indexOf(suffix) + 1;
  return suffix ? round(n / pow(1000, base), 1) + suffix : "" + n;
}
