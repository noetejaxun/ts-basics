// Número a string
let num : number = 10;
String(num);        // "10"
num.toString();     // "10"


// Boolean a string
String(true);       // "true"
true.toString();    // "true"
String(false);      // "false"
false.toString();   // "false"


// String a number
Number("1");        // 1
Number("0");        // 0


// Varios tipos a boolean
Boolean(false);     //false
Boolean(0);         //false
Boolean(NaN);       //false
Boolean("");        //false
Boolean(null);      //false
Boolean(undefined); //false
