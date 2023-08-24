Function.prototype.bind = function (...args) {
  let fn = this;
  let context = args.shift();
  // Remaining arguments are "pre-bound" arguments that will be passed to fn

  return function (...moreargs) {
    let allArgs = args.concat(moreargs);
    // Combine pre-bound args with args supplied when calling the function
    // returned by `bind`.
    return fn.apply(context, allArgs);
  };
};