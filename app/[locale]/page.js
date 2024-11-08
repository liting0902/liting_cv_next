import React from "react";
import BasicInfoCards from "@/container/basicInfo/index";
import skillList from "@/lib/api/skills.js";
import psData from "@/lib/api/personal-statement";
import Loader from "../../components/Loader";
async function Index({ params: { locale } }) {
  const sData = await skillList();
  const personalStatement = await psData(locale);

  return (
    <React.Suspense fallback={<Loader />}>
      <BasicInfoCards skillList={sData} personalStatement={personalStatement} />
    </React.Suspense>
  );
}

export default Index;
