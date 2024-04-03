// Utility function to generate a new Session Id using random numbers
exports.generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};


// Utility function to evaluate mathematical expressions
exports.evaluateExpression = (expression) => {
  // Regex to remove spaces from the input string
  const sanitizedExpression = expression.replace(/\s+/g, '');
  try {
    
    const result = eval(sanitizedExpression);
    console.log('/n');
    return result;
  } catch (e) {
    // Return an error message if the expression is invalid
    return " Invalid expression ";
  }
}

