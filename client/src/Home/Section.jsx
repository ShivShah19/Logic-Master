import React from 'react'

const Section = () => {
  return (
    <>
    <section className="feature-section">
    <h2 className="section-title">The Benefits of Knowing Your IQ</h2>
    <div className="card-container">
        <div className="feature-card">
            <h3 className="card-title">Self-Awareness & Development</h3>
            <p className="card-description">Knowing your IQ score can help you understand your cognitive abilities and use them to improve your academic or professional performance.</p>
        </div>
        <div className="feature-card">
            <h3 className="card-title">Personal Growth</h3>
            <p className="card-description">Finding out your IQ score can be a fun and enlightening experience, helping you to learn more about yourself and your potential.</p>
        </div>
        <div className="feature-card">
            <h3 className="card-title">Career Opportunities</h3>
            <p className="card-description">Certain professions may require individuals with higher IQ scores. Finding out your IQ could help you discover new career paths and opportunities.</p>
        </div>
    </div>
</section>
    </>
  )
}

export default Section