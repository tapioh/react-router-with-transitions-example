import React, { createElement } from 'react'
import { withRouter } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'
import { routes } from './routes'
import {
  Fade,
  Modal,
  SlideForwards,
  SlideBack,
  TRANSITION_FADE,
  TRANSITION_MODAL,
  TRANSITION_SLIDE_BACK,
  TRANSITION_SLIDE_FORWARDS
} from './ScreenTransitions'

function renderScreen(route, location, key) {
  const isCurrentRoute = route.pathname === location.pathname
  if (!isCurrentRoute) {
    return null
  }

  const transition = location.state && location.state.transition
  switch(transition) {
    case TRANSITION_MODAL:
      return (
        <Modal key={key}>
          {createElement(route.component)}
        </Modal>
      )
    case TRANSITION_SLIDE_FORWARDS:
        return (
          <SlideForwards key={key}>
            {createElement(route.component)}
          </SlideForwards>
        )
    case TRANSITION_SLIDE_BACK:
        return (
          <SlideBack key={key}>
            {createElement(route.component)}
          </SlideBack>
        )
    case TRANSITION_FADE:
    default:
      return (
        <Fade key={key}>
          {createElement(route.component)}
        </Fade>
      )
  }
}

const Screens = ({ location }) => {
  return (
    <div className='screen'>
      <TransitionGroup>
        {
          routes.map((route, index) => {
            return renderScreen(route, location, index)
          })
        }
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Screens)
