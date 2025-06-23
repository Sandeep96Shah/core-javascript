if(0.1 + 0.2 === 0.3){
    console.log("True");
}else{
    console.log("False");
}

// False reason This is due to how floating-point numbers are represented in binary (IEEE 754 format). Numbers like 0.1 and 0.2 cannot be represented exactly in binary form, so a small rounding error occurs.

// In binary:

// 0.1 becomes 0.000110011001100... (repeating)

// 0.2 becomes 0.00110011001100... (repeating)

// Their sum is not exactly 0.3, but rather 0.30000000000000004.

NaN === NaN // false


// {} === {} // false


false == 0         // true
"" == 0            // true
null == undefined  // true


0.1 * 0.1 // 0.010000000000000002
