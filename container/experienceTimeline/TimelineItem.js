import React, { useContext, useState, useEffect } from "react";
import firebaseAPIParser from "../../lib/firebaseAPIParser.js";
import getFetch from "../../lib/getFetch.js";
import formatDbData from "../../lib/formatDbData.js";
import { LayoutGroup } from "framer-motion";
import TimelineDetails from "./TimelineDetails.js";

export default function TimelineItem({ locale }) {
  const [d, setD] = useState();

  useEffect(() => {
    const getExperience = async () => {
      const fd = await getFetch(firebaseAPIParser("experience", locale));
      const data = formatDbData(fd.fields);
      const _historyData = data.historyData.values.map((item) =>
        formatDbData(item.mapValue.fields)
      );
      const sortByYear = _historyData.sort((a, b) => {
        return (
          parseInt(a.startDate.split("-")[0]) -
          parseInt(b.startDate.split("-")[0])
        );
      });

      setD(sortByYear);
    };
    getExperience();
  }, []);
  return (
    <LayoutGroup>
      {!!d &&
        d.map((item, index) => {
          const {
            facultyJob,
            startDate,
            degreeWork,
            schoolCompanyName,
            endDate,
          } = item;
          const details = degreeWork.split("\n");
          const year = startDate.split("-")[0];

          return (
            <TimelineDetails
              key={index}
              index={index}
              year={year}
              title={schoolCompanyName}
              subtitle={facultyJob}
              details={details}
              duration={`${startDate} - ${endDate}`}
              maxLength={d.length}
            />
          );
        })}
    </LayoutGroup>
  );
}
