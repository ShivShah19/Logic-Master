import React from "react";

const NumericalReasoning = () => {
  return (
    <>
      <header>
        <h1>Numerical Reasoning</h1>
      </header>
      <section className="intro">
        <div className="intro-text">
          <h2>What is Numerical Reasoning?</h2>
          <p>
            A numerical reasoning test is used to assess a candidate's ability
            to handle and interpret numerical data. You will be required to
            analyse and draw conclusions from the data, which may be presented
            in the form of tables or graphs. The tests are timed and in a
            multiple choice format.
            <br />
            Numerical reasoning tests differ from the sort of numerical tests
            you may be familiar with from GCSE or A level exams. The tests you
            will face are designed to measure your ability to problem solve,
            often mimicking the type of analysis you will be required to
            undertake in your future role, e.g., Comparing the productivity of
            two different branches of a company.
          </p>
        </div>
      </section>
      <section className="types">
        <div className="type">
          <h2>Types of Numerical Reasoning</h2>
          <ul className="list-style-type:circle">
            <br></br>
            <li>Simple and Compound Interest</li>
            <li>Clocks</li>
            <li>Statistics and Probability</li>
            <li>Percentage</li>
          </ul>
        </div>
      </section>
      <section className="highlights">
        <div className="highlight">
          <h3 style={{ textAlign: "center" }}>
            Why is Numerical Reasoning important?
          </h3>
          <ol>
            <li>
              Numerical Reasoning includes reflecting on solutions to problems
              to make sure they make sense.
            </li>
            <li>
              It is a critical skill that enables people to use all of their
              other math skills.
            </li>
            <li>
              It helps to easily process, analyze and interpret numerical
              charts, trends, and relationships.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default NumericalReasoning;
