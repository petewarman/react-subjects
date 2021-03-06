import React from 'react'
import { render } from 'react-dom'
import { Motion, StaggeredMotion, spring, presets } from 'react-motion'
import $ from 'jquery'

require('./styles')

///////////////////////////////////////////////////////////////////////////////
// Let's create a simple toggle switch that moves back and forth.

const ToggleSwitch = React.createClass({
  getInitialState() {
    return {
      isActive: false
    }
  },
  toggle() {
    this.setState({
      isActive: !this.state.isActive
    })
  },
  render() {
    const x = this.state.isActive ? 400 : 0

    return (
      <div id="switch1" className="toggle-switch" onClick={this.toggle}>
        <div className="toggle-switch-knob" style={{ left: x }}/>
      </div>
    )
  }
})

render(<ToggleSwitch/>, document.getElementById('app'))

///////////////////////////////////////////////////////////////////////////////
// We can integrate with other DOM animation libraries by doing imperative work
// in the usual lifecycle methods. But our render method isn't as obvious. :/

//const ToggleSwitch = React.createClass({
//  getInitialState() {
//    return {
//      isActive: false
//    }
//  },
//  toggle() {
//    this.setState({
//      isActive: !this.state.isActive
//    })
//  },
//  componentDidUpdate() {
//    const x = this.state.isActive ? 400 : 0
//    $('.toggle-switch-knob').animate({ left: x }, 'swing')
//  },
//  render() {
//    return (
//      <div id="switch1" className="toggle-switch" onClick={this.toggle}>
//        <div className="toggle-switch-knob"/>
//      </div>
//    )
//  }
//})
//
//render(<ToggleSwitch/>, document.getElementById('app'))

///////////////////////////////////////////////////////////////////////////////
// react-motion is an interesting library that gives us a way to do animation
// declaratively! Also, it uses springs to make animation feel more natural.
// Try different stiffness and damping values to see how they change the feel
// of the spring. The Spring Parameters Chooser demo lets you play with
// different stiffness/damping values.
//
// http://chenglou.me/react-motion/demos/demo5-spring-parameters-chooser/

//const ToggleSwitch = React.createClass({
//  getInitialState() {
//    return {
//      isActive: false
//    }
//  },
//  toggle() {
//    this.setState({
//      isActive: !this.state.isActive
//    })
//  },
//  render() {
//    const x = this.state.isActive ? 400 : 0
//
//    return (
//      <Motion style={{ x: spring(x, { stiffness: 170, damping: 26 }) }}>
//        {style =>
//          <div id="switch1" className="toggle-switch" onClick={this.toggle}>
//            <div className="toggle-switch-knob" style={{ left: style.x }}/>
//          </div>
//        }
//      </Motion>
//    )
//  }
//})
//
//render(<ToggleSwitch/>, document.getElementById('app'))

///////////////////////////////////////////////////////////////////////////////
// Use the same <Motion> to animate several springs at once. All animations
// should run concurrently and finish at roughly the same time. They're
// completely coordinated!

//const ToggleSwitch = React.createClass({
//
//  getInitialState() {
//    return {
//      isActive: false
//    }
//  },
//
//  toggle() {
//    this.setState({
//      isActive: !this.state.isActive
//    })
//  },
//
//  render() {
//    const x1 = this.state.isActive ? 400 : 0
//    const x2 = this.state.isActive ? 600 : 0
//    const x3 = this.state.isActive ? 300 : 0
//
//    return (
//      <Motion style={{ x1: spring(x1), x2: spring(x2), x3: spring(x3) }}>
//        {style => (
//          <div>
//            <div id="switch1" className="toggle-switch" onClick={this.toggle}>
//              <div className="toggle-switch-knob" style={{ left: style.x1 }}/>
//            </div>
//            <div id="switch2" className="toggle-switch" onClick={this.toggle}>
//              <div className="toggle-switch-knob" style={{ left: style.x2 }}/>
//            </div>
//            <div id="switch3" className="toggle-switch" onClick={this.toggle}>
//              <div className="toggle-switch-knob" style={{ left: style.x3 }}/>
//            </div>
//          </div>
//        )}
//      </Motion>
//    )
//  }
//
//})
//
//render(<ToggleSwitch/>, document.getElementById('app'))

///////////////////////////////////////////////////////////////////////////////
// Use a <StaggeredMotion> to render 5 knobs, each one showing the previous
// frame of the animation. This technique gives us a blur effect. It's also
// known as onion skinning.

//const ToggleSwitch = React.createClass({
//  getInitialState() {
//    return {
//      isActive: false
//    }
//  },
//  toggle() {
//    this.setState({
//      isActive: !this.state.isActive
//    })
//  },
//  render() {
//    const x = this.state.isActive ? 400 : 0
//
//    return (
//      <StaggeredMotion
//        defaultStyles={[{ x }, { x }, { x }, { x }, { x }]}
//        styles={prevStyles => prevStyles.map((_, i) => (
//          i === 0 ? { x: spring(x) } : prevStyles[i - 1]
//        ))}
//      >
//        {styles => (
//          <div id="switch1" className="toggle-switch" onClick={this.toggle}>
//            {styles.map((style, i) => (
//              <div key={i} className="toggle-switch-knob" style={{
//                left: style.x,
//                opacity: 1 - (0.2 * i)
//              }}/>
//            ))}
//          </div>
//        )}
//      </StaggeredMotion>
//    )
//  }
//
//})
//
//render(<ToggleSwitch/>, document.getElementById('app'))
