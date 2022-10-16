const A = [2, 7, 11, 15]

var i,j

const target = 26

console.log(`Searching...`)

const twoSuminArray =(A , target)=>{

  for(let i = 0; i < A.length; i++){
    for( let j = i + 1; j < A.length; j++){

        if(A[i] + A[j] == target){

          return [ i, j ]
        }
    }
}

}


const checkIndex = twoSuminArray(A , target)

if(checkIndex){
    setTimeout(()=>{
    console.log(`Found 👍`)
    console.log(checkIndex)
    },2000)
}else{
    setTimeout(()=>{
    console.log(`Not Found 👎`)
    }, 2000)
}