import React from "react"
import { useInView } from "react-intersection-observer";

export function FadeInSection(props) {
  const { ref, inView } = useInView({
    threshold: (props.threshold || 0),
    triggerOnce: true,
  });

  return (
    <div className={`fade-in-section ${inView ? "is-visible" : ''}`} style={props.style}>
      <div ref={ref}>
          {props.children}
      </div>
  </div>
  )
}

export function TweenInSection(props) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={`tween-in-section ${inView ? "is-visible" : ''}`} style={props.style}>
      <div ref={ref}>
          {props.children}
      </div>
  </div>
  )
}
