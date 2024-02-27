import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const { cash } = useSelector((s) => s);
  return (
    <div>
      <h1>{cash}</h1>
    </div>
  );
};

export default About;
