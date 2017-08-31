import React from 'react'
import { CSSTransition } from 'react-transition-group'

const FADE_DURATION_IN_MS = 300
const MODAL_DURATION_IN_MS = 300
const SLIDE_DURATION_IN_MS = 300

export const TRANSITION_FADE = 'screen-transition-fade'
export const TRANSITION_MODAL = 'screen-transition-modal'
export const TRANSITION_SLIDE_BACK = 'screen-transition-slide-back'
export const TRANSITION_SLIDE_FORWARDS = 'screen-transition-slide-forwards'

export const Fade = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={FADE_DURATION_IN_MS}
      classNames={TRANSITION_FADE}
    >
      {children}
    </CSSTransition>
  )
}

export const Modal = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={MODAL_DURATION_IN_MS}
      classNames={TRANSITION_MODAL}
    >
      {children}
    </CSSTransition>
  )
}

export const SlideForwards = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={SLIDE_DURATION_IN_MS}
      classNames={TRANSITION_SLIDE_FORWARDS}
    >
      {children}
    </CSSTransition>
  )
}

export const SlideBack = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={SLIDE_DURATION_IN_MS}
      classNames={TRANSITION_SLIDE_BACK}
    >
      {children}
    </CSSTransition>
  )
}
