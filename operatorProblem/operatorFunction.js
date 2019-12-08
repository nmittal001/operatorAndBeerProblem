module.exports = {
  //replace operator with symbol
  convertToSymbol: function(operator) {
    switch (operator) {
      case "add":
        return "+";
        break;
      case "subtract":
        return "-";
        break;
      case "multiply":
        return "*";
        break;
      case "divide":
        return "/";
        break;
      case "equal":
        return "=";
        break;
      default:
        return operator;
    }
  },

  oppositeOperator: function(operator) {
    switch (operator) {
      case "-":
        return "+";
        break;
      case "+":
        return "-";
        break;
      case "/":
        return "*";
        break;
      case "*":
        return "/";
        break;
      default:
        return operator;
    }
  },

  //checking operator
  operatorFun: function(op) {
    if (op == "+" || op == "-" || op == "*" || op == "/" || op == "=")
      return true;
    else return false;
  }
};
