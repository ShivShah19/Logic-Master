// import React, { useEffect, useState } from 'react'
import "./learnmore.css";

const SpatialIntelligence = () => {
  return (
    <>
      <header>
        <h1>Spatial Intelligence</h1>
      </header>
      <section className="intro">
        <div className="intro-text">
          <h2>What is Spatial Intelligence ?</h2>
          <p>
            Spatial intelligence is the concept of being able to successfully
            perceive and derive insight from visual data. This cognitive process
            is known as an aptitude for understanding visual information in the
            real and abstract word as well as an innate ability to envision
            information. People with this spatial ability can usually create
            effective images that explain concepts and design prototypes that
            incorporate spatial reasoning. The term may also be seen as visual
            intelligence and is often used in relation to location intelligence
          </p>
        </div>
      </section>
      <section className="types">
        <div className="type">
          <h2>Types of Spatial Intelligence</h2>
          <ul className="list-style-type:circle">
            <br></br>
            <li>Musical-Rhythmic Intelligence</li>
            <li>Verbal-Linguistic Intelligence</li>
            <li>Visual-Spatial Intelligence</li>
            <li>Logical-Mathematical Intelligence</li>
          </ul>
        </div>
      </section>
      <section className="highlights">
        <div className="highlight">
          <h3 className="text-align: center;">
            Why is Spatial Intelligence important?
          </h3>
          <ol>
            <li>
              Spatial intelligence plays a crucial role in technical systems and
              software that aim to learn position-based information and update
              its behavior accordingly.
            </li>
            <li>
              Systems with spatial intelligence often have a complex
              infrastructure and are comprised of microlocation and data
              analytics functionalities.
            </li>
            <li>
              Software and hardware that incorporate spatial intelligence are
              more precise than GPS or radio-based solutions, are less expensive
              than camera-based location systems, do not require lighting
              components and are able to achieve location with scale down to the
              millimeter.
            </li>
          </ol>
        </div>
      </section>

      {/* <div className="center">
        <button className="fun-button">Start Test</button>
    </div> */}
    </>
  );
};

export default SpatialIntelligence;
