// Your code here
const mapToNegativize = arr => {
  const newArr = []
  for (const elem of arr){
    newArr.push(elem * -1)
  }
  return newArr
}

const mapToNoChange = arr => {
  const newArr = []
  for (const elem of arr) {
    newArr.push(elem)
  }
  return newArr
}

const mapToDouble = arr => {
  return arr.map(element => element * 2)
}

const mapToSquare = arr => {
  return arr.map(element => element ** 2)
}

const reduceToTotal = (arr, startingPoint) => {
  let total 
  startingPoint ? total = startingPoint : total = 0
  for (const elem of arr) {
    total += elem
  }
  return total
}

const reduceToAllTrue = arr => {
  let boolean = null
  for (const elem of arr) {
    if (!elem) {
      boolean = false
      return boolean
    } else {
      boolean = true
    }
  }
  return boolean
}

const reduceToAnyTrue = arr => {
  let boolean = null
  for (const elem of arr) {
    if (elem) {
      boolean = true
      return boolean
    } else {
      boolean = false
    }
  }
  return boolean
}

