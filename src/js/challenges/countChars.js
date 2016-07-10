(function () {
  
  window.countChars = {
    title: "Count Chars",
    description: `
      Write a function called <code>countChars</code> that count the chars of a string.
    `,
    initialCode: `function countChars (str) {
   
}`,
    output: {
      description: `
      expect(countChars("abc")).to.equal(3);
      expect(countChars("")).to.equal(0);
      `,
      verify: function (...tests) {
        return _.every(tests, test => test.actual === test.expected);
      },
      teardown: `
      __verify__(
        {actual: countChars("abc"), expected: 3},
        {actual: countChars(""), expected: 0}
      )  
      `
    }
  };
  
})();
