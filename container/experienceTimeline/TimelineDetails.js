import React, { useState, useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { motion } from "framer-motion";
import { FaSuperpowers } from "react-icons/fa";
import styles from "./timeline.module.css";
import smoothscroll from "smoothscroll-polyfill";
import { BiExpand } from "react-icons/bi";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaCompressAlt } from "react-icons/fa";
export default function TimelineDetail({
  index,
  year,
  title,
  subtitle,
  duration,
  details,
  maxLength,
}) {
  const cardRef = useRef();
  const [isStaggered, setIsStaggered] = useState(true);
  const [isExpanded, setExpanded] = useState(false);
  const [selectedID, setSelectedID] = useState(false);
  const [isPad, setPad] = useState(false);
  const classesBaseItem = styles.baseTimelineItem;
  const classActive = [styles.baseTimelineItem, styles.baseItemActive].join(
    " "
  );
  const classZone1 = [styles.baseTimelineDescription, styles.zone_1].join(" ");
  const classZone2 = [styles.baseTimelineDescription, styles.zone_2].join(" ");
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 900) setPad(true);
  });

  const handleExpanded = (event, index) => {
    event.preventDefault();
    const leftSpace = cardRef.current.offsetWidth * index * 0.6;
    setExpanded((prev) => !prev);
    setSelectedID(index);
    setIsStaggered(false);
    smoothscroll.polyfill();
  };

  return (
    <motion.a
      className={isExpanded && !isPad ? classActive : classesBaseItem}
      ref={cardRef}
      data-year={year}
      onClick={(event) => handleExpanded(event, index)}
    >
      {isPad || isExpanded ? (
        //expanded
        <motion.span
          className={index % 2 === 0 ? classZone1 : classZone2}
          initial={{ opacity: 0, translateY: 0 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.31,
            delay: 0.28 * (isPad ? index : 1),
          }}
          style={{
            textAlign: "left",
          }}
        >
          <span
            className={styles.desIcon}
            style={{
              display: `${isPad ? "none" : "inline"}`,
            }}
          >
            <FaCompressAlt />
          </span>
          <div style={{ fontSize: "0.8rem" }}>{duration}</div>
          <div style={{ margin: "0 auto" }}>
            {title} - {subtitle}
          </div>
          <p>
            {details.map((item, i) => (
              <li
                style={{
                  marginBottom: "0.5rem",
                  textIndent: "-1rem",
                  paddingLeft: "2.2rem",
                }}
                key={i}
              >
                <FaSuperpowers
                  style={{
                    color: "white",
                    fontSize: "0.7rem",
                    paddingRight: "0.5rem",
                  }}
                />
                {item}
              </li>
            ))}
          </p>
        </motion.span>
      ) : (
        <motion.div
          className={index % 2 === 0 ? classZone1 : classZone2}
          initial={{ opacity: 0, translateX: -10 }}
          animate={{
            opacity: isExpanded && selectedID ? 0 : 1,
            translateX: 0,
          }}
          transition={{
            duration: 0.4,
            delay: isStaggered ? index * 0.2 : 0.2,
          }}
        >
          <span className={styles.desIcon} data-cy="more-info-icon">
            <BiExpand />
          </span>
          <div>{title}</div>
          <div>{subtitle}</div>
        </motion.div>
      )}
    </motion.a>
  );
}
