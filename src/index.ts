import { tap, Observable, Observer, map, take, fromEvent } from 'rxjs'

const source = new Observable((obs: Observer<number>) => {

  let number = 0
  setInterval(() => {
    obs.next(++number)
  }, 1000)
})

const mouseMoveSource = fromEvent(document, 'mousemove')

const root = document.getElementById('root')

const counter = document.createElement('h3')
const mouseTrackerX = document.createElement('h3')
const mouseTrackerY = document.createElement('h3')
root!.appendChild(counter)
root!.appendChild(mouseTrackerX)
root!.appendChild(mouseTrackerY)

source
  .pipe(
    tap(x => counter.innerText = x.toString()),
    take(5)
  )
  .subscribe()

mouseMoveSource
  .pipe(
    tap((mouseEvent: MouseEvent) => {
      mouseTrackerX.innerText = mouseEvent.screenX.toString()
      mouseTrackerY.innerText = mouseEvent.screenY.toString()
    })
  ).subscribe()
