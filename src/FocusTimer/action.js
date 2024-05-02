import state from './state.js'
import * as timer from './timer.js'
import * as audio from './audio.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')

  state.minutes = 0
  state.seconds = 0

  timer.updateDisplay()
}

export function addFiveMoreMinutes(){
  state.minutes = state.minutes + 5

  if (state.minutes > 60){
    state.minutes = 60
    return
  }

  timer.updateDisplay()
}

export function removeFiveMinutes(){
  state.minutes = state.minutes - 5

  if (state.minutes < 0){
    reset()
    return
  }

  timer.updateDisplay()
}

export function florest(){
  audio.florest.play()
}

export function rain(){
  audio.rain.play()
}

export function store(){
  audio.store.play()
}

export function fire(){
  audio.fire.play()
}