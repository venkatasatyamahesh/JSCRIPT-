function RunCallback(a, b, cb) {
    let sum = a + b;
   return cb(sum)
};
module.exports = RunCallback;
