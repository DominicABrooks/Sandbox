// let works similarly to var, but the variable it declares is block-scoped, it only exists within the current block. var is function-scoped.
var var_x; // function-scoped, mostly grandfathered
let let_x; // block-scoped
const const_x = null; // block-scoped; however, must be initialized and cannot be changed

func();
function func() {
    {
        var varTest = 5;
        let letTest = 6;
    }
    // varTest: in-scope, letTest: NOT in-scope
    console.log(varTest);
};


// you can actually can change value, just not re-assign
const const_x_arr = [];
// works, x is still has one storage binding
const_x_arr.push(1);
// doesn't work, changing storage binding
//const_x_arr = [5];

//console.log(const_x_arr);

/*////////////////////////////////////////////////////////////////
Hoisting 	                    Scope 	        Creates global properties
var 	    Declaration 	    Function 	    Yes
let 	    Temporal dead zone 	Block 	        No
const 	    Temporal dead zone 	Block 	        No
function 	Complete 	        Block 	        Yes
class 	    No 	                Block 	        No
import 	    Complete 	        Module-global 	No
*///////////////////////////////////////////////////////////////////
