// A library for formatting dates and times
let strftime = require('strftime');

/**
 * Prints out a server log message that includes a category and the
 * current time. Useful for seeing what's happening on a server.
 *
 * @example
 * // Prints: [2020-02-23 13:44:32] [CONNECT] Hello, world!
 * serverLog('CONNECT', 'Hello, world!');
 *
 * // Prints: [2020-02-24 16:48:32] [MEEP] Time to party
 * serverLog('MEEP', 'Time to party');
 *
 * @param {string} category - The message category
 * @param {string} message - The message text
 */
function serverLog(category, message) {
  if (category === undefined || message === undefined) {
    throw new Error('serverLog requires both a category and a message');
  }

  let now = new Date();
  let formattedDate = strftime('%Y-%m-%d %H:%M:%S', now);

  console.log('[%s] [%s] %s', formattedDate, category, message);
}

module.exports = serverLog;
