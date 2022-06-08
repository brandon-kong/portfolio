import React from "react"
import { useInView } from "react-intersection-observer";

function FadeInSection(props) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div inView={inView} className={`fade-in-section ${inView ? "is-visible" : ''}`} style={props.style}>
      <div ref={ref}>
          {props.children}
      </div>
  </div>
  )
}

  export default FadeInSection