import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {

  return (
    <>
    <a name="faq-section"></a>
    <div className='faq'>
    <div className='faq-title'>Frequently Asked Questions</div>
    <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is Logic Master?
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"> Logic Master is a type of IQ testing website that assesses your cognitive abilities in four categories: verbal intelligence, numerical reasoning, spatial intelligence, and logical reasoning.<br></br>
Logic master is a quest for excellence which is more than an assessment; it's a journey of continuous learning and growth. For each question, we provide comprehensive explanations and strategies to elevate your cognitive prowess.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Why logic master ?
        </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"> Logic Master offers a complimentary IQ testing platform, allowing users to assess their cognitive abilities without any cost or fees. Logic Master's commitment to inclusivity by offering free IQ tests comes with a mission to make cognitive development accessible to a broad range of individuals, regardless of their financial resources.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Can you increase your intelligence ?
        </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">It is generally believed that once you reach a certain age, your intelligence is your intelligence.<br></br>
            However, if you are taking the exam for a job or similar instance, you can practice for the exam and attempt to increase your score.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        How long does it take to complete the IQ test on Logic Master ?
        </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">The duration varies depending on the user, but it typically takes around 25 to 30 minutes to complete the IQ quiz.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        How would you describe the difficulty levels of the questions ?
        </button>
        </h2>
        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">The questions on our website span a range of difficulty levels, from medium to difficult.</div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default FAQ;