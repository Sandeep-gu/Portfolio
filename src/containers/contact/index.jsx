import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.css";
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText={"Contact"}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translate(-200px)",
          }}
          end={{
            transform: "translate(0px)",
          }}
        >
          <h3 className="contact_content_header_text">Let's Connect</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translate(-200px)",
          }}
          end={{
            transform: "translate(0px)",
          }}
        >
          <div className="contact_content_form">
            <div className="contact_content_form_controls">
              <div>
                <input required name="name" type="text" className="inputName" />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="Email"
                  type="email"
                  className="inputEmail"
                />
                <label htmlFor="Email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  type="text"
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
}
