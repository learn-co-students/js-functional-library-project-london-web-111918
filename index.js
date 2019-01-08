fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      const newArr = []
      for (const key in collection) {
        newArr.push(callback(collection[key], key, collection))
      }
      return newArr
    },

    reduce: function(collection, callback, acc = 0) {
      const newArr = collection.slice()
      for (const element of newArr) {
        acc = callback(acc, element, collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key]
        }
      }
    },

    filter: function(collection, predicate) {
      const newArr = []
      for (const key in collection) {
        if (predicate(collection[key])) {
          newArr.push(collection[key])
        }
      }
      return newArr
    },

    size: function(collection) {
      let count = 0
      for (const key in collection) {
        count++
      }
      return count
    },

    first: function(collection, n = 1) {
      const newArr = collection.slice(0, n)
      return newArr.length === 1 ? newArr[0] : newArr
    },

    last: function(collection, n = -1) {
      n > 0 ? n = 0 - n : n
      const newArr = collection.slice(n)
      return newArr.length === 1 ? newArr[0] : newArr
    },

    compact: function(collection) {
      const newArr = []
      for (const element of collection) {
        if (!!element) {
          newArr.push(element)
        }
      }
      return newArr
    },

    sortBy: function(collection, callback) {
      const newArr = collection.slice()
      newArr.sort((a, b) => callback(a) - callback(b))
      return newArr
    },

    arr: [],

    flatten: function(collection, shallow = false) {
      if (!shallow) {
        for (const element of collection) {
          if (typeof element === "object") {
            fi.flatten(element)
          } else {
            fi.arr.push(element)
          }
        }
        return fi.arr
      } else {
        fi.arr.length = 0
        for (const element of collection) {
          if (typeof element === "object") {
            fi.arr.push(...element)
          } else {
            fi.arr.push(element)
          }
        }
        return fi.arr
      }

    },

    uniq: function(collection, isSorted = true, callback) {
      const newArr = []
      const cbArr = []
      for (const element of collection) {
        if (isSorted) {
          if (!newArr.includes(element)) {
            newArr.push(element)
          }
        } else {
          let val = callback(element)
          if (!cbArr.includes(val)) {
            cbArr.push(val)
            newArr.push(element)
          }
        }
      }
      return newArr
    },

    keys: function(collection) {
      const newArr = []
      for (const key in collection) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(collection) {
      const newArr = []
      for (const key in collection) {
        newArr.push(collection[key])
      }
      return newArr
    },

    functions: function(collection) {
      const newArr = []
      for (const key in collection) {
        if (typeof collection[key] === "function") {
          newArr.push(key)
        }
      }
      return newArr
    }

  }
})()

fi.libraryMethod()
