import React from "react";

export default function BtnLayout({ children, overrideStyle }) {
  return (
    <span className="btn" style={!!overrideStyle ? overrideStyle : null}>
      {children}
      <style jsx>{`
        .btn {
          position: relative;
          background: #ffffff;
          display: inline-flex;
          margin: auto 1rem;
          padding: 0.5rem;
          border-radius: 45%;
          height: 2rem;
          width: auto;
          cursor: pointer;
          font-size: 2rem;
          background-color: rgba(125, 125, 125, 0.5);
        }
        .btn:hover {
          background: rgb(255, 255, 255, 0.5);
          transition: all 0.3s ease-in;
        }
      `}</style>
    </span>
  );
}
