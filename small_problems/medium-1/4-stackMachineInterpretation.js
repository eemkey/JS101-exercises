//register: current value. not part of the stack.
//topmost item (end of array) from stack is removed
// ex: start with stack [3, 6, 4], register value of 7.
  //4 is removed, then 4 * 7 = 28 is left in the register. 
  //6 is removed, then 6 * 28 = 168 is left in the register. 

//Rules:
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.

//algo
//split string into array using space as a separator.
//loop through array, and do an operation based on the command
function isStackEmpty(stack) {
  return stack.length === 0;
}
function minilang(program) {
  let stack = [];
  let register = 0;
  program.split(" ").forEach(command => {
    if (stack.length <= 0 && ["ADD", "SUB", "MULT", "DIV", "MOD", "POP"].includes(command)) {
      console.log("stack is empty!");
    } else {
      let num;
      if (!isNaN(command)) {
        num = command;
      }

      switch (command) {
        case "PUSH":
          stack.push(register);
          break;
        case "ADD":
            register = register + stack.pop();
          break;
        case "SUB":
          register = register - stack.pop();
          break;
        case "MULT":
          register = register * stack.pop();
          break;
        case "DIV":
          register = Math.floor(register / stack.pop());
          break;
        case "MOD":
          register = Math.floor(register % stack.pop());
          break;
        case "POP":
          register = stack.pop();
          break;
        case "PRINT":
          console.log(register);
          break;
        case num:
          register = Number(command);
          break;
        default:
          error = "invalid command!";
          console.log(`${command} is an unknown command!`);
      } 
    }
  });
  return register;
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)