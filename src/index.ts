import { tap, Observable, Observer, map } from 'rxjs'

let numbers = [1,5,10]
let source = new Observable((obs: Observer<number>) => {

  let index = 0
  let produceValue = () => {
    obs.next(numbers[index++])
    if (index < numbers.length) {
      setTimeout(produceValue, 1000)
    } else {
      obs.complete()
    }
  }
  produceValue()
})

source
  .pipe(
    map(x => x * 2),
    tap(console.log)
  )
  .subscribe()
