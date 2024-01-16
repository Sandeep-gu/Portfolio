import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText={"Contact"}
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}
