fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const index in collection) {
          callback(collection[index])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []
      for (const index in collection) {
          let updated = callback(collection[index])
          newCollection.push(updated)
      }
      return newCollection
    },

    reduce: function(collection, callback, acc=0) {
      for (const index in collection) {
          acc = callback(acc, collection[index], collection)
        }
      return acc
    },

    find: function(collection, predicate) {
      for (const index in collection) {
        if (predicate(collection[index])) {
          return collection[index]
          }
        }
      },

    filter: function(collection, predicate) {
        const newCollection = []
        for (const index in collection) {
          if (predicate(collection[index])) {
            newCollection.push(collection[index])
            }
          }
          return newCollection
        },

    size: function(collection) {
      const keys = Object.keys(collection)
      return keys.length
    },

    first: function(array, n=1) {
      const results = []
      let values = array.slice(0, n)
      for (const index in values) {
        results.push(values[index])
      }
      if (n == 1) {
        return results[0]
      } else {
        return results
      }
    },

    last: function(array, n=1) {
      const results = []
      let values = array.slice(-n)
      for (const index in values) {
        results.push(values[index])
      }
      if (n == 1) {
        return results[0]
      } else {
        return results
      }
    },

    compact: function(array) {
      const results = []
      for (const index in array) {
        if (array[index]) {
          results.push(array[index])
        }
      }
      return results
    },

    sortBy: function(array, callback){
      const newArray = array.slice()
      newArray.sort((a,b) => callback(a) - callback(b))
      return newArray
    },

    flatten: function(array, shallow) {
      const newArray = []
      function deepIterator(array) {
        for (const index in array) {
            if (typeof array[index] == "object") {
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

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
    const functions = []
    for (const index in object) {
      if (typeof object[index] === "function") {
        functions.push(index)
        }
      }
      return functions.sort()
    },

  }
})()

fi.libraryMethod()
