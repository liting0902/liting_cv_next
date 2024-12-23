import React from "react";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <React.Fragment>
      <FaGithub
        style={{
          border: "6px solid rgb(255,255,255,0.8)",
          borderRadius: "50%",
          fontSize: "10vh",
          color: "rgb(255,255,255,0.8)",
        }}
      />
      <style jsx>{`
        .btn {
          width: 100%;
          height: 100%;
          cursor: pointer;
          background: transparent;
          border: none;
          z-index: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Work;
