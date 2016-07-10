(function () {
  
  /*
function helloWorld (n) {
  return "Hello World";
}
  */
  
  window.helloWorldChallenge = {
    title: "Hello World",
    description: `
      Write a function called <code>helloWorld</code> that returns "Hello World".
    `,
    initialCode: `function helloWorld (n) {
      
}`,
    output: {
      description: `Program should return "Hello World"`,
      verify: function (result) {
        return result === "Hello World";
      },
      teardown: "__verify__(helloWorld());"
    }
  };
  
})();
