(function () {
  
  var testInputs = [24, 55, 15, 16, 120000];
  
  window.fizzbuzzChallenge = {
    title: "fizzbuzz in a tweet",
    description: `
  Write a function called <code>fizzbuzz</code> that accepts a single argument <code>n</code>. <code>fizzbuzz</code> should return \"Fizz\" if <code>n</code> is a multiple of 3, \"Buzz\" if <code>n</code> is a multiple of 5, “FizzBuzz” if <code>n</code> is a multiple of both 3 and 5, and <code>n</code> if <code>n</code> is a multiple of neither 3 nor 5.
`,
    initialCode: `function fizzbuzz (n) {\n  // ...\n}`,
    output: {
      description: "Program must correctly implement a fizzbuzz function",
      verify: function (...currentOutput) {
        var expectedOutput = testInputs.map(i => (i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
        return _.isEqual(expectedOutput, currentOutput);
      },
      teardown: "__verify__(...[" + testInputs + "].map(fizzbuzz));"
    }
  };
  
})();


