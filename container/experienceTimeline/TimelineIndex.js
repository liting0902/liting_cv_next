"use client";
import React, { useEffect } from "react";
import styles from "./timeline.module.css";
import TimelineItem from "./TimelineItem.js";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import smoothscroll from "smoothscroll-polyfill";
function mouseScroll(v) {
  window.scrollTo({
    left: v,
    behavior: "smooth",
  });
}
function TimelineIndex({ locale }) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch(`/${locale}`);
    mouseScroll(0);
    smoothscroll.polyfill();
  }, []);
  return (
    <React.Fragment>
      <Loader>
        <div className={styles.baseTimeline}>
          <TimelineItem locale={locale} />
        </div>
      </Loader>
    </React.Fragment>
  );
}

export default TimelineIndex;
