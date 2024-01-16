import React from 'react'
import img from '../image/about-us.jpg'

const Aboutus = () => {
  return (
    <>
    <a name="Aboutus"></a>
    <section id="about" class="py-5">
        <div class="container">
            <div class="about-wrapper ">
            <div class="about-content">
                <h2 className='about-title'>About Us</h2>
                <p>
                    Logic Master isn't just a website it's your digital ally in the pursuit of mental excellence. Whether you're a student preparing for exams, a professional aiming for career growth, or simply someone who loves a good brain teaser, Logic Master empowers you to reach new heights of cognitive prowess.<br></br><br></br>
                    The Logic Master website offers a the iQ quiz games across four distinct categories: Numerical reasoning , Verbal Intelligence, logical reasoning and Spatial intelligence.<br></br><br></br>
                    Logic Master unleashes your cognitive potential. Our quizzes sharpen critical thinking and problem-solving, leading you toward a smarter, more empowered mind. Join us on this transformative  journey.<br></br>
                    In the context of recruitment, numerical reasoning is important because it helps employers identify candidates who possess the skills and abilities necessary to perform well in a role that requires a strong understanding of mathematics.
                    Whereas Education is built around verbal or non-verbal reasoning and individuals who are verbally intelligent are among those who tend to learn things quick and also these individuals are efficient in teaching others. <br></br>
                </p>
                {/* <a href="#contact" class="btn btn-primary">Contact Us</a> */}
            </div>
            <div class="about-image">
                <img src={img} alt="About Us Image" class="img-fluid"/>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Aboutus