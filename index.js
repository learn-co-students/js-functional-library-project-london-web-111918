fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
          values = Object.values(collection)
            for (let i=0; i < values.length; i++) {
              /* for (const index in collection) {
              //callback(collection[index])
            }*/
              callback(values[i])
            }
            return collection
          },

    map: function(collection, callback) {
          const newCollection = [];
            values = Object.values(collection)
              for (let i=0; i < values.length; i++) {
                /* for (const index in collection) {
                //callback(collection[index])
              }*/
              let updated = callback(values[i])
              newCollection.push(updated)
              }
              return newCollection
            },

// function timesBy3(num) {num*3}

    reduce: function(collection, callback, acc=0) {
      values = Object.values(collection)
        for (let i=0; i < values.length; i++) {
          acc = callback(acc, values[i], collection)
        }
        console.log(acc)
        return acc
    },

    find: function(collection, predicate) {
          values = Object.values(collection)
            for (let i=0; i < values.length; i++) {
              if (predicate(values[i] /*== true */))
              return values[i]
            }
            // return undefined
        },

    filter: function(collection, predicate) {
            const newCollection = []
            values = Object.values(collection)
              for (let i=0; i < values.length; i++) {
                if (predicate(values[i] /*== true */))
                newCollection.push(values[i])
              }
              return newCollection
          },

    size: function(collection){
      keys = Object.keys(collection)
      return keys.length
    },

    first: function(collection, n=1) {
            const newCollection = [];
              values = Object.values(collection)
                for (let i=0; i < n; i++) {
                  /* for (const index in collection) {
                  //callback(collection[index])
                }*/
                // let updated = values[i]
                newCollection.push(values[i])
                  if (n == 1){
                    return newCollection[0]
                  }
                }
                return newCollection
              },

      last: function(collection, n=1) {
        const newCollection = [];
          values = Object.values(collection)
            for (let i= collection.length - n; i < collection.length; i++) {
            newCollection.push(values[i])
              if (n == 1){
                return newCollection[0]
              }
            }
            console.log(newCollection)
            return newCollection
          },

        compact: function(array) {
          const newArray = []
            for (let i=0; i < array.length; i++)
              if (array[i]){
                newArray.push(array[i])
              }
              return newArray
        },

        sortBy: function(array, callback) {
          const newArray = [...array]
            newArray.sort((a, b) => callback(a) - callback(b))

              return newArray
        },

        flatten: function(array, shallow) {
         const newArray = []
         function deepIterator(array) {
           for (const index in array) {
               if (typeof array[index] == 'object') {
                 if (shallow) {
                   newArray.push(...array[index])
                 } else {
                   deepIterator(array[index])
               }
               } else {
                 newArray.push(array[index])
               }
             }
           }
         deepIterator(array)
         return newArray
       },

       uniq: function(array, isSorted, callback) {
             const callbackArray = []
             const newArray = []
             if (!isSorted) {
               if (callback) {
                 for (const index in array) {
                   let newVariable = callback(array[index])
                   if (!callbackArray.includes(newVariable)) {
                     callbackArray.push(newVariable)
                     newArray.push(array[index])
                     }
                   }
                 } else {
                   for (const index in array) {
                     if (!newArray.includes(array[index])) {
                       newArray.push(array[index])
                       }
                   }
                 }
               }
               return newArray
           },

        keys: function(object) {
              return Object.keys(object)
        },
        //
        values: function(object) {
                return Object.values(object)
        },
        //
        functions: function(object) {
                    const functions = []
                      for (const index in object) {
                        if (typeof object[index] === 'function') {
                          functions.push(index)
                          }
                      }
                      return functions.sort()
                    },
}

})()

fi.libraryMethod()
