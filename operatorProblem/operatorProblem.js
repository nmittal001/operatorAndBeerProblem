const fs = require("fs");
const jsonFile = fs.readFileSync("jsonFile.JSON", "utf8");
const jsonExp = JSON.parse(jsonFile);
const operatorFunction = require("./operatorFunction");
let arr = [];
let inOrderArray = [];

module.exports = {
  operatorProblem: function() {
    //object to array
    function objectToArray(inputJson) {
      for (item in inputJson) {
        if (typeof inputJson[item] == "object") {
          objectToArray(inputJson[item]);
        } else {
          arr.push(operatorFunction.convertToSymbol(inputJson[item]));
        }
      }
      return arr;
    }
    function toInOrder(arr) {
      for (i = 0; i < arr.length; i++) {
        if (operatorFunction.operatorFun(arr[i])) {
          inOrderArray.push(
            "( " +
              inOrderArray.pop() +
              " " +
              arr[i] +
              " " +
              inOrderArray.pop() +
              " )"
          );
        } else {
          inOrderArray.push(arr[i]);
        }
      }
    }
    function equate(leftEq, rightEq) {
      for (let i = 0; i < leftEq.length; i++) {
        if (operatorFunction.operatorFun(leftEq[i])) {
          rightEq.push(operatorFunction.oppositeOperator(leftEq[i]));
          rightEq.unshift("(");
          if (leftEq[i - 1] == "x") {
            rightEq.push(leftEq[i + 1]);
          } else {
            rightEq.push(leftEq[i - 1]);
          }
          rightEq.push(")");
        }
      }
    }

    objectToArray(jsonExp);
    toInOrder(arr.reverse());
    equation = inOrderArray[0].split("=");
    leftEq = equation[0].split(" ");
    rightEq = equation[1].split(" ");
    leftEq.shift();
    leftEq.pop();
    rightEq.shift();
    rightEq.pop();
    equate(leftEq, rightEq);

    console.log("Equation-->>", inOrderArray[0]);
    console.log("Simplified Equation-->> x=", rightEq.join(""));
    console.log("Solution of Equation-->>", eval(rightEq.join("")));
  }
};
