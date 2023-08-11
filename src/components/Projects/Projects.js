import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense_tracker from "../../Assets/Projects/expense-tracker.png";
import pokedex from "../../Assets/Projects/pokedex.png";
import justdabba from "../../Assets/Projects/justdabba1.png";
import k_mail from "../../Assets/Projects/k-mail.png";
import movie_app from "../../Assets/Projects/movie-app.png";

function Projects() {
  return (
    <Container fluid className="project-section" >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={justdabba}
              isBlog={false}
              title="JustDabba"
              description="I worked with two team members to create a special website using NodeJS, React JS, Mongo DB (Atlas), and Express JS. Our website helps people who cook and sell Tiffin meals connect with customers who want to buy Tiffin meals nearby. Our project was the best among 40 teams in our semester!"
              ghLink="https://github.com/Karankhatik/tiffin_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense_tracker}
              isBlog={false}
              title="Expense Tracker"
              description="Developed a secure web application using ReactJs, NodeJs, MongoDB, and ExpressJs, allowing users to track and analyze their expenses with interactive ChartJs visualization. The implementation of JWT authentication ensures enhanced project security and user data protection."
              ghLink="https://github.com/Karankhatik/expense-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex"
              description="I developed a fully responsive front-end application with React, Tailwind CSS, and Parcel, showcasing my passion for front-end development. My exceptional problem-solving skills were evident in how I effectively handled various API errors, ensuring a smooth user experience, while also incorporating visually appealing Shimmer effects to enhance the overall interface."
              ghLink="https://github.com/Karankhatik/Pokedex"
              demoLink="https://pokedex-karan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie_app}
              isBlog={false}
              title="Movie List"
              description="A responsive movie list web app built with React, Parcel bundler, and Bootstrap, allowing users to easily search for their favorite movies and book tickets hassle-free."
              ghLink="https://github.com/Karankhatik/movie-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k_mail}
              isBlog={false}
              title="k-mail"
              description="
              K-mail is a secure Gmail-inspired application developed using the MERN stack (MongoDB, Express, React, Node.js) and Material UI, implementing JWT authentication for enhanced security."
              ghLink="https://github.com/Karankhatik/k-mail-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
