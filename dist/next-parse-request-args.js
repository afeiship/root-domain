/*!
 * name: @feizheng/next-parse-request-args
 * description: Request arguments parser.
 * homepage: https://github.com/afeiship/next-parse-request-args
 * version: 1.0.5
 * date: 2020-06-29T02:37:44.976Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var MSG_ERROR = 'The arguments.length should between 1 ~ 4.'

  nx.parseRequestArgs = function (inArguments, inIsArray) {
    var args = inArguments;
    var length = args.length;
    var options = null;

    // input:
    // 1. (config)
    // 1. (url)
    // 2. (url, config)
    // 3. (method, url, config)
    // 4. (method, url, data, config)

    switch (length) {
      case 1:
        options = typeof args[0] === 'string' ? { url: args[0] } : args[0];
        break;
      case 2:
        options = nx.mix({ method: 'get', url: args[0] }, args[1]);
        break;
      case 3:
        options = nx.mix({ method: args[0], url: args[1] }, args[2]);
        break;
      case 4:
        options = { method: args[0], url: args[1], data: args[2], options: args[3] };
        break;
      default:
        options = null;
        nx.error(MSG_ERROR)
    }

    return !inIsArray ? options : [
      options.method,
      options.url,
      options.data,
      options.options
    ];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.parseRequestArgs;
  }
})();

//# sourceMappingURL=next-parse-request-args.js.map
