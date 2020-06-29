(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var MSG_ERROR = 'The arguments.length should between 1 ~ 4.'

  nx.parseRequestArgs = function (inArguments, inIsArray) {
    var args = nx.slice(inArguments);
    var length = args.length;
    var options = null;

    switch (length) {
      case 1:
        options = args[0];
        break;
      case 2:
        options = nx.mix({ url: args[0] }, args[1]);
        break;
      case 3:
        options = nx.mix({ url: args[0], method: args[1] }, args[2]);
        break;
      case 4:
        options = { url: args[0], method: args[1], data: args[2], options: args[3] };
        break;
      default:
        options = null;
        nx.error(MSG_ERROR)
    }

    return !inIsArray ? options : [
      options.url,
      options.method,
      options.data,
      options.options
    ];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.parseRequestArgs;
  }
})();
