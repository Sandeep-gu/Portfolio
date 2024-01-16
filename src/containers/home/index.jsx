import React, { useState } from "react";
import "./style.css";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const handlehireme = () => {
    navigate("/contact");
  };
  return (
    <>
      <section id="home" className="home">
        <div className="home_text_wrapper">
          <h1>
            Hello, I',m Sandeep Kumar Gupta
            <br />
            MERN STACK DEVELOPER
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          <div className="home_hire_me">
            <button onClick={handlehireme}>Hire Me</button>
          </div>
        </Animate>
      </section>
    </>
  );
}
