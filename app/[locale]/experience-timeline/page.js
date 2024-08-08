import React from "react";
import TimelineIndex from "@/container/experienceTimeline/TimelineIndex.js";

function Experience({ params: { locale } }) {
  return (
    <React.Fragment>
      {/* <Loader> */}
      <TimelineIndex locale={locale} />
      {/* </Loader> */}
    </React.Fragment>
  );
}

export default Experience;
