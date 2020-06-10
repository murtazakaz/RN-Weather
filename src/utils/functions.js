// check if the object is empty
// obj - Object
export const isObjectEmpty = obj =>  {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// PLUCK - Plucks the given key off of each item in the array. Returns a new array of these values.
// key - Key name to pluck from the object
// array - List of items.
// e.g: 
// pluck('name', [{ name: 'Batman' }, { name: 'Robin' }, { name: 'Joker' }]);
// ['Batman', 'Robin', 'Joker']

// pluck(0, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// [1, 4, 7]
export const pluck = (key, array) =>
  array.reduce((values, current) => {
    values.push(current[key]);

    return values;
  }, []);


  
// Memoization function
export const Memoizer = (function(){
    //Private data
   var cache = {};
   
   function cacher(func){
      return function(){
        var key = JSON.stringify(arguments);
        if(cache[key]){
          return cache[key];
        }
        else{
          val = func.apply(this, arguments);
          cache[key] = val;
          return val;
      }
    }
  }    
    //Public data
   return{
     memo: function(func){
       return cacher(func);
     }
   }
})()
