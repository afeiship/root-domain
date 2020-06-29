(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxDelete = nx.delete || require('@feizheng/next-delete');
  var MSG_ERROR = 'The arguments.length at least one.'
  var DELETE_FIELDS = ['url', 'method', 'data']

  nx.parseRequestArgs = function (inArguments) {
    var args = nx.slice(inArguments);
    var length = args.length;
    var options = null;

    // 1. (config)
    // 2. (url, config)
    // 3. (url, method, config)
    // 4. (url, method, data, config)

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
    return options;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.parseRequestArgs;
  }
})();
