(function () {
  
/*
function countChars (str) {
  return str.replace(/\s*!/g, "").length
}
*/
  
  window.countCharsChallenge = {
    title: "Count Chars",
    description: `
      Write a function called <code>countChars</code> that count the letters of a string.
    `,
    initialCode: `function countChars (str) {
   
}`,
    output: {
      description: `
      expect(countChars("abc")).to.equal(3);<br/>
      expect(countChars("")).to.equal(0); <br/>
      expect(countChars("a b c")).to.equal(3); <br/>
      `,
      verify: function (...tests) {
        return _.every(tests, test => test.actual === test.expected);
      },
      teardown: `
      __verify__(
        {actual: countChars("abc"), expected: 3},
        {actual: countChars(""), expected: 0},
        {actual: countChars("a b c"), expected: 3}
      )  
      `
    }
  };
  
})();
