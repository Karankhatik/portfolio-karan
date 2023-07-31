import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiGithubBadge,
  
} from "react-icons/di";
import {
  
  SiFirebase,
 
  SiTailwindcss
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import {AiOutlineHtml5} from "react-icons/ai"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">       
        <DiNodejs />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />       
      </Col>
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
      </Col>
    </Row>
  );
}

export default Techstack;
