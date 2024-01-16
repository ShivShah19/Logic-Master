import React from "react";

function LogicalReasoning() {
  return (
    <div>
      <header>
        <h1>Logical Reasoning</h1>
      </header>
      <section className="intro">
        <div className="intro-text">
          <h2>Welcome to the World of Logic and Reasoning!</h2>
          <p>
            Logical Reasoning is a key component of many competitive and
            ability-testing exams in India and abroad. Reasoning questions allow
            organizations to assess a candidate’s problem-solving skills,
            critical thinking capabilities, and capacity for logical and
            analytical thinking.
            <br />
            Logical Reasoning involves the ability to use and understand logical
            connections between facts or ideas. In verbal reasoning, questions
            are expressed in words or statements and require the reader to think
            critically about the language used in order to choose the correct
            answer from the given options. Non-verbal reasoning, meanwhile,
            involves questions presented as images and figures, requiring the
            reader to comprehend how one element relates to another before
            selecting the right answer out of a list of potential answers.
          </p>
        </div>
      </section>
      <section className="types">
        <div className="type">
          <h2>Types of Logical Reasoning</h2>
          <ul className="list-style-type:circle">
            <br></br>
            <li>Coding Decoding</li>
            <li>Analogies</li>
            <li>Letter Series</li>
            <li>Letter and Symbol Series</li>
          </ul>
        </div>
      </section>
      <section className="highlights">
        <div className="highlight">
          <h3 style={{ textAlign: "center" }}>
            Why Logical Reasoning is Important?
          </h3>
          <ol>
            <li>
              Logical Reasoning is important because it helps candidates to
              improve their decision-making skills.
            </li>
            <li>
              These are important for entrance tests for any program or even in
              job interviews.
            </li>
            <li>
              It also helps candidates to think out-of-the-box and start
              exploring great new ideas.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default LogicalReasoning;
