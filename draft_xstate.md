# Draft XState

## Event

Event object is object having `type` property

```js
const timerEvent = {
  type: 'TIMER'
}

/* which equals */
const timerEvent = 'TIMER'
```

Event object can have property

```js
const keyDownEvent = {
  type: 'keydown',
  key: 'Enter'
}
```