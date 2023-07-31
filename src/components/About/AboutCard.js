import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Karan khatik </span>
            from <span className="purple"> Shahdol (M.P.), India.</span>
            <br /> A recent graduate in Masters of Computer Application with expertise in computer
              programming.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create things which create impact"{" "}
          </p>
          <footer className="blockquote-footer">Karan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
