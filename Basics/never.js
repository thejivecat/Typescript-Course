"use strict";
//never type
//function return type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
//never is used when function never returns anything, not even undefined
//another function that never returns anything is an infinite loop
