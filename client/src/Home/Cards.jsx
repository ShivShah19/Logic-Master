import React from 'react'
import NumericalReasoning from '../image/Numerical-reasoning-img.png'
import Logicalreasoning from '../image/Logical-reasoning-img.png'
import verbalintelligence from '../image/verbal-intelligence-img.jpg'
import spatialintelligence from '../image/spatial-intelligence-img.jpg'
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
    <a name="explore"></a>
    <section className="main-container">
        <div className="card">
            <div className="card-content">
                <img src={NumericalReasoning} alt="Card Image"/>
                <h2>Numerical Reasoning</h2>
                <p>Crack tough math, solve problems with clear qualitative thinking</p>
                <Link to="/Numerical-Reasoning" className="button">Learn More</Link>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <img src={Logicalreasoning} alt="Card Image" style={{backgroundColor: "#fde5c8"}}/>
                <h2>Logical Reasoning</h2>
                <p>Enhance critical thinking, analyze patterns and draw precise conclusions.</p>
                <Link to="/Logical-Reasoning" className="button">Learn More</Link>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <img src={verbalintelligence} alt="Card Image"/>
                <h2>Verbal Intelligence</h2>
                <p>Evaluate vocabulary, refine comprehension and boost word skills.</p>
                <Link to="/Verbal-Ability" className="button">Learn More</Link>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <img src={spatialintelligence} alt="Card Image"/>
                <h2>Spatial Intelligence</h2>
                <p>Visualize shapes, decode spatial puzzles to enhance visual thinking abilities.</p>
                <Link to="/Spatial-Intelligence" className="button">Learn More</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cards