function arrayDiff(arr1, arr2) {
    let result =[];
  arr1.forEach(element1 => {
          if(!arr2.includes(element1))
            result.push(element1)
  });
   if(arr2.length===0){
      result= [...arr1]
  }
  return result;
  }
 let diff =  arrayDiff([1,2,3],[1,2]);
 console.log(diff);