(function () {
  
  /**
Solution
   
function strFormat (...args) {
  args = args.map(arg => `"${arg}"`)
    
  if (args.length === 0) return "You didn't give me any arguments.";
  if (args.length === 1) return `You gave me 1 argument and it is ${args[0]}.`;
   
  var head = args.slice(0, -1)
  var tail = args.slice(-1)
  var joinedArgs = [head.join(", "), tail].join(" and ")
      
  return `You gave me ${args.length} arguments and they are ${joinedArgs}.`;
}
   */
  
  window.strFormatChallenge = {
    title: "strFormat",
    description: `
      Write the function<code>strFormat</code>. It should return      
      <ul>
        <li>You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".</li>
        <li>You gave me 2 arguments and they are "pigs" and "giraffes".</li>
        <li>You gave me 1 argument and it is "pigs".</li>
        <li>You didn't give me any arguments.</li>
      </ul>      
    `,
    initialCode: `function strFormat (...args) {
   
}`,
    output: {
      description: `It should return the expected response.`,
      verify: function (...tests) {
        return _.every(tests, test => test.actual === test.expected);
      },
      teardown: `
      __verify__(
        {actual: strFormat("pigs", "giraffes", "unicorns"), expected: 'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".'},
        {actual: strFormat("pigs", "giraffes"), expected: 'You gave me 2 arguments and they are "pigs" and "giraffes".'},
        {actual: strFormat("pigs"), expected: 'You gave me 1 argument and it is "pigs".'},
        {actual: strFormat(), expected: "You didn't give me any arguments."}
      )  
      `
    }
  };
  
})();
