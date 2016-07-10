(function () {
  
  window.minChallenge = {
    title: "Min",
    description: `
      Write a function called <code>min</code> that returns the minimum value of an array.
    `,
    initialCode: `function min (array) {
   
}`,
    output: {
      description: `
        expect(min([1, 2, 3])).to.equal(1);<br/>
        expect(min([1, 2, -3])).to.equal(1);<br/>
        expect(min([])).to.equal(undefined);<br/>
      `,
      verify: function (...tests) {
        return _.every(tests, test => test.actual === test.expected);
      },
      teardown: `
      __verify__(
        {actual: min([1, 2, 3]), expected: 1},
        {actual: min([1, 2, -3]), expected: -3}
        {actual: min([]), expected: undefined}
      )  
      `
    }
  };
  
})();
