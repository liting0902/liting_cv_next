import React from "react";
import BasicInfoCards from "@/container/basicInfo/index";
import skillList from "@/lib/api/skills.js";
import psData from "@/lib/api/personal-statement";

async function Index({ params: { locale } }) {
  const sData = await skillList();
  const personalStatement = await psData(locale);

  return (
    <React.Suspense
      fallback={
        <div className="loader-background">
          <div className="loader"></div>
        </div>
      }
    >
      <BasicInfoCards skillList={sData} personalStatement={personalStatement} />
    </React.Suspense>
  );
}

export default Index;
