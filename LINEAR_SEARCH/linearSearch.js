// LINEAR SEARCH FOR JAVASCRIPT

//runtime complexity O(n)

//Disadvantages:
//Slow for large data sets

//Advantages:
//Fast for searching small and medium data sets
//Does not need to be sorted
//Useful for data structure that does not have random access(Linked List)

const A = [9, 5, 1, 3 , 8, 9, 6, 4, 7, 0, 2]
var i;

const linearSearch =(searchValue)=>{
   for( i = 0; i< A.length; i++){
    if(Number(searchValue) === A[i]){
     return i;
    }
   }
}

const index = linearSearch(7) //Search Here in the function call parameter.....

if(index){
    console.log(`Element was found at index : ${i}`);
}else{
   console.log(`Element was not found`)
}




