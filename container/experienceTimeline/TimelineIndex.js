import React from "react";
import styles from "./timeline.module.css";
import TimelineItem from "./TimelineItem.js";

function TimelineIndex() {
  return (
    <React.Fragment>
      <div className={styles.baseTimeline}>
        <TimelineItem />
      </div>
    </React.Fragment>
  );
}

export default TimelineIndex;
