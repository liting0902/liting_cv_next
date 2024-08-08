import React, { useState, useContext, useEffect } from "react";
import AnimationList from "@/components/layouts/AnimationList.js";
import { BiFlag } from "react-icons/bi";
import { ThemeToggle } from "@/contexts/theme.context.js";
import { withTranslation } from "next-i18next";
import Loader from "@/components/Loader";

function Skills({ t, ...props }) {
  const isDark = useContext(ThemeToggle);
  const { skillList } = props;
  const skillsData = [
    { "Key techniques": skillList["techniques"] },
    { "State management": skillList["stateManagement"] },
    { "Style sheet language": skillList["styleSheetLanguage"] },
    { "Web API": skillList["db"] },
    { "Version control": skillList["versionControl"] },
    { OS: skillList["os"] },
    { "The others": skillList["others"] },
    { "JS library": skillList["toolkit"] },
  ];

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "800px",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <ul style={{ display: "block", listStyleType: "none" }}>
          {skillsData ? (
            skillsData.map((item, index) => {
              const titleKey = Object.keys(item)[0];
              return (
                <AnimationList isDarkMode={isDark} key={index} index={index}>
                  <div>
                    <BiFlag
                      style={{
                        fontSize: "1.3rem",
                        marginRight: ".5rem",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                    }}
                  >
                    {t(`${titleKey}`)}:{item[`${titleKey}`]}
                  </div>
                </AnimationList>
              );
            })
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default withTranslation("skillsModal")(Skills);
