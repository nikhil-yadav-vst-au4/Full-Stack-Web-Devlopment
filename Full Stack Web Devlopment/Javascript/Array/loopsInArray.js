/**Loops are like a procedure a task which we want to repeteadly untill a condition 
 * or we can say that when we want to perform same action repeatadly then we use the Looping Concept.
 * In array loops are used to perform desired action in the each iteration until our condition do not setistfied
 * 
 */



/* 1.For Loop **/

/**Assume we have an array which has name as there value in it and we want to check each value of that 
 * loop then we just use the loop concept .
 * 
 * 
 * here is the example for that 
 */

var name = ['Nikhil','Ram','Sandeep','Ansal'];



for (i=0;i<name.length;i++){
  console.log(name[i]);
}


/**ForEach */

/**In the real world for loop is not so consider for array iteration as it cause like an extra effort
 * where we first have to find the array lenghth then according to it we pass our condition and all
 * for this problem we use a loop javascript method(Function) for the arrays which is foreach and this
 *  property is specially for the array purpose Foreach loop simply eliminates the multiple declaration 
 * of the variables
 */

 /**Note: ForEach function is used only in the array datatype as it has key value concept and other data
  * types does not have index and value concept thus it is mainly used for array datatype   
  */

 var name = ['Nikhil','Ram','Sandeep','Ansal'];

name.forEach(function(value,key){
    console.log(value);

})


/** In for each we use array then foreach as the property with an anonymous function having two values as
 * their parameter first is for value which is the local scope of that function on each iteration.
 */
  