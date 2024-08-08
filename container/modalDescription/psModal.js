import React, { useContext } from "react";
import { ThemeToggle } from "@/contexts/theme.context.js";
import Loader from "@/components/Loader";

function PersonalStatement(props) {
  const isDark = useContext(ThemeToggle);

  const { personalStatement } = props;
  if (!personalStatement.content) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          border: "red 0px solid",
          width: "96%",
          position: "relative",
          marginLeft: "3%",
        }}
      >
        <textarea
          readOnly={true}
          cols="98"
          rows="26"
          className="textareaPS"
          // ref={contentRef}
          // style={`color: ${isDark ? `white` : `black`}`}
          value={personalStatement ? personalStatement.content : ""}
        ></textarea>
        <style jsx>
          {`
            .textareaPS {
              display: block;
              border: none;
              background: transparent;
              letter-spacing: 0.1rem;
              line-height: 1.4em;
              padding: auto 1rem;
              font-size: 0.9em;
              width: 90%;
              height: 100%;
              resize: none;
            }
            .textareaPS:focus {
              outline: none !important;
            }
            @media (prefers-color-scheme: dark) {
              .textareaPS {
                color: white;
              }
            }
          `}
        </style>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default PersonalStatement;
