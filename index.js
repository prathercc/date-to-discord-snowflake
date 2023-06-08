/**
 *
 * @param {*} date Javascript Date object.
 * @returns Discord snowflake in String format.
 */
const generate = (date = new Date()) =>
  ((BigInt(date.valueOf()) - BigInt(1420070400000)) << BigInt(22)).toString();

module.exports = generate;
