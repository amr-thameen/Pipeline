

const set = (arg) => {
      return arg*1;
    }

const add =  (input, arg)=> {
      //we need to add to something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input + arg*1;
    }

const mult = (input, arg)=> {
      //we need to multiply by something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input * arg*1;
    }



const sync = (str) =>{
// parsing the string by using a split on the string (|)
// loop through the array of operations 
// split each item in the array with  (' ')
// if arr[0] === 'set' then set(arr[1])
    let result = 0;
    let newArr = str.split(' | ');
    for (let i = 0; i < newArr.length; i++){
        let innerArr = newArr[i].split(' ');
        if (innerArr[0] === 'set'){
            result = set(innerArr[1], innerArr[1])
        }
        if (innerArr [0] === 'add'){
            result = add(result, innerArr[1])
        }
        if (innerArr[0] === 'mult'){
            result = mult(result, innerArr[1])
        }
    }
    return result;
}



module.exports = {
    add,
    set,
    sync,
    mult
}