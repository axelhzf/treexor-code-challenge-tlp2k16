(function () {
  
  window.uniqueChallenge = {
    title: "Unique",
    description: `
      Write a function called <code>unique</code> that remove duplicated elements from an array.
    `,
    initialCode: `function unique (array) {
   
}`,
    output: {
      description: `
      expect(countChars([1, 2, 3])).to.equal([1, 2, 3]);<br/>
      expect(countChars([1, 2, 1])).to.equal([1, 2]);
      `,
      verify: function (...tests) {
        return _.every(tests, test => _.isEqual(test.actual, test.expected));
      },
      teardown: `
      __verify__(
        {actual: unique([1, 2, 3]), expected: [1, 2, 3]},
        {actual: unique([1, 2, 1]), expected: [1, 2]}
      )  
      `
    }
  };
  
})();
