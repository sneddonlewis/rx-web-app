import { tap, Observable, Observer, map, take } from 'rxjs'

let source = new Observable((obs: Observer<number>) => {

  let number = 0
  setInterval(() => {
    obs.next(++number)
  }, 1000)
})

const root = document.getElementById('root')

source
  .pipe(
    tap(x => root!.innerText = x.toString()),
    take(5)
  )
  .subscribe()
