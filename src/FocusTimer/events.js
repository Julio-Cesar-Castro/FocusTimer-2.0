import { buttonsCountTime, buttons } from './elements.js'
import * as actions from './action.js'

export function registerControls(){
  buttonsCountTime.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function"){
      return;
    }

    actions[action]()
  })
}

export function registerButtons(){
  buttons.addEventListener('click', event => {
    const sound = event.target.dataset.sound
    if (typeof actions[sound] != "function"){
      return
    }
    actions[sound]()
  })
}