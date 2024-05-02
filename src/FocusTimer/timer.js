import state from './state.js'
import * as countTime from './elements.js'

export function countdown(){
  if(!state.isRunning){
    return
  }

  let minutes = Number(countTime.minutes.textContent)
  let seconds = Number(countTime.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0 ){
    seconds = 0
    minutes = 0
  }

  updateDisplay(minutes,seconds)
  setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  countTime.minutes.textContent = String(minutes).padStart(2,"0")
  countTime.seconds.textContent = String(seconds).padStart(2,"0")
}