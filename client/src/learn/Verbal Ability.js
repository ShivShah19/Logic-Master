import React from "react";
import "./learnmore.css";

const VerbalAbility = () => {
  return (
    <>
      <header>
        <h1>Verbal Ability</h1>
      </header>
      <section className="intro">
        <div className="intro-text">
          <h2>What is Verbal Ability?</h2>
          <p>
            Verbal Ability is a major component of various competitive exams, it
            tests a capability of an individual to communicate effectively and
            accurately using words in a clear sound manner. Verbal Ability is an
            important measure for interviews and competitive examinations in
            India. For aspirants who want to excel in Verbal Ability, having a
            strong vocabulary and the ability to form sentences are essential
            skills. Verbal ability tests are designed to assess a candidate’s
            writing skills and abilities in questions like spotting errors,
            sentence corrections, sentence formation, synonyms, antonyms, and
            more.
          </p>
        </div>
      </section>
      <section className="types">
        <div className="type">
          <h2>Types of Verbal Ability</h2>
          <ul className="list-style-type:circle">
            <br></br>
            <li>Spotting Errors</li>
            <li>Antonyms and Synonyms</li>
            <li>Sentence corrections</li>
            <li>Verbal Analogies</li>
          </ul>
        </div>
      </section>
      <section className="highlights">
        <div className="highlight">
          <h3 style={{ textAlign: "center" }}>
            Why Verbal Ability is important?
          </h3>
          <ol>
            <li>
              Strong verbal ability enables individuals to express themselves
              clearly, understand complex ideas, and communicate effectively
              with others.
            </li>
            <li>
              It is a capacity to understand and use language effectively.
            </li>
            <li>
              People who are strong in verbal ability can express themselves
              clearly, understand others' ideas, and engage in meaningful
              conversations.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default VerbalAbility;
