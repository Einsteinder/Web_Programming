const calculator = require("./calculator");
const prompt = require("prompt");

function getInfo(){
    prompt.start();

    const operation = {
        name: 'operation',
        description: 'Which operation do you w ant to do',     // Prompt displayed to the user. If not supplied name will be used.
        type: 'string',                 // Specify the type of input to expect.
        replace: '*',                        // If `hidden` is set it will replace each hidden character with the specified string.
        default: 'add',             // Default value to use if no value is entered.
        required: true                        // If true, value entered must be non-empty.
      };

      const num1Prompt = {
          name: 'num1',
          description: 'what is the first number?',
          type: 'number',
          required: true

      }
      const num2Prompt = {
        name:'num2',
        description: 'what is the second number?',
        type: 'number',
        required: true

    }
    const quitPrompt = {
        name:'quit',
        description: 'Do you want to quit after this opertation?',
        type: 'boolean',
        require: true
    }

    function stringToOperation(str){
        if (!str) return "add";
        if(str ==="*"|| str ==="multiply")return "multiply";
        if(str === "/"||str ==="divide")return "divide";
        if(str ==="-"|| str ==="subtract")return "subtract";
        return "add"
    }
    prompt.get([operation, num1Prompt,num2Prompt,quitPrompt], function (err, result) {
        //
        // Log the results.
        //
        

        if(result){
            let operation = stringToOperation(result.operation);
            console.log(operation);
            let num1 = result.num1;
            let num2 = result.num2;
            let quit = result.quit;
            let opertaionFunction = undefined;

            switch (operation){
                case "multiply":
                    operationFunction = calculator.multiplyTwoNumbers;
                    break;
                case "subtract":
                    operationFunction = calculator.subtractTwoNumbers;
                    break;
                case "divide":
                    operationFunction = calculator.divideTwoNumbers;
                    break;
                case "add":
                    operationFunction = calculator.addTwoNumbers;
                    break;


            }
            let result = operationFunction(num1,num2);
            console.log(`when you ${operation} ${num1} with ${num2} you get ${result}`);

            if(!quit){
                getInfo();

            }
            console.log(result)
            getInfo()
        }else if(err){
            console.error(err)
        }
        console.log(result);
    

        getInfo()
      });

     
}
getInfo();