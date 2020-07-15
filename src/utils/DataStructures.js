const isNotNothing = x => !!(x) || x === 0

const QueueOf = (length) =>  ([...arr]) => {
  const sanitisedArr = ([...xs]) => xs.filter(isNotNothing)
  const trimmedArr = l => ([...xs]) => xs.slice(-l)
  const filledArr = l => ([...xs]) => Array(l - xs.length).fill(0).concat(xs) 

  const _arr = sanitisedArr(arr)
  if (_arr.length < length) return filledArr(length)(_arr)
  return trimmedArr(length)(_arr)
}

const enqueue = (length) => ([...arr]) => (value) => {
  const _queue = QueueOf(length)(arr)
  return _queue.concat(isNotNothing(value) ? value : 0).slice(1)
}

export {
  enqueue
}