var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt, {
  expressions: true
});
calculator.setExpression({ id: 'parabola', latex: 'y = x^2' });