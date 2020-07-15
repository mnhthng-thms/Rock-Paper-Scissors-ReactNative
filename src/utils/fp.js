
/* memoizer :: (Any -> Any) -> Any -> Any 
    @arg:     an unary function
    @return:  the respective memoized function
*/
const memoizer = (f) => {
  let cache = {}
  return function (n) {
    if (cache[n] != undefined) {
      return cache[n]
    } else {
      let res = f(n)
      cache[n] = res
      return res 
    }
  }
}

const compose = (...fns) => x => 
  fns.reduceRight(
    (v, f) => f(v),
    x
  )

export {
  memoizer,
  compose
}