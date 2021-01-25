/*
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
*/



let firstName : Object = 'Luis';

switch (firstName) {
    case 'Luis':
        console.log('Hola, soy Luis');
        break;
    case 'Juan':
        console.log('Hola, soy Juan');
        break;
    default:
        console.log('No soy Juan y tampoco soy Luis.');
        break;
}