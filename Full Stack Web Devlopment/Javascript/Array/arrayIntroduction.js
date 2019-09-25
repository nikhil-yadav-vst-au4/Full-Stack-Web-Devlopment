/**  Array are the most Important part of any Programming they are like reserviour for many variables 
 means we can store many values inside an array.
 Array are like list of items.

 * JavaScript array is an object that represents a collection of similar type of elements.

 It is like a variable and can store any type of data inside it 
 In javascript Array is a Global Object (Javascript is Vastly depends on Objects each thing in js is 
    treated like Object.
        We may define array also like it is a special variable which have property or characterstic to contain 
        more than one value at a time.

        Array values are stored according to the index value and each value has assigned its own index 

        Index value in arrays are strat from zero means that first element or value in the array is always a 
        zero index
    
    )
 */



/** Methods for Defining arrays 
 * 
 * there are Three methods by which we could define arrays 


There are 3 ways to construct array in JavaScript

1.By array literal
2.By creating instance of Array directly (using new keyword)
3.By using an Array constructor (using new keyword)
*/



/*1.By array literal*/

var name = ['Nikhil','Ram','Sandeep'];

/**We can also add more elements in the array as like but they are then added after last element */
name[3]='Ansal';

for (i=0;i<name.length;i++){
  console.log(name[i]);
}


/* OR */
var name = [];
name[0] ='Nikhil';
name[1]= 'Ram';
name[2]='Sandeep';
name[3]= 'Ansal';

for (i=0;i<name.length;i++){
    console.log(name[i]);
}
 



/**2.By creating instance of Array directly (using new keyword)*/

var name = new Array();
name[0] ='Nikhil';
name[1]= 'Ram';
name[2]='Sandeep';
name[3]= 'Ansal';

for (i=0;i<name.length;i++){
    console.log(name[i]);
}


/*3.By using an Array constructor (using new keyword)*/

var name= new Array('Nikhil','Ram','Sandeep');
name[3]='Ansal';

for (i=0;i<name.length;i++){
    console.log(name[i]);
}



 

/**Important Note : 
 * 
 * There is no need to use new Array().
For simplicity, readability and execution speed, use the first one (the array literal method). */