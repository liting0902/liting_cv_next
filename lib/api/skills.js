import formatDbData from "@/lib/formatDbData.js";
import firebaseAPIParser from "@/lib/firebaseAPIParser.js";
import getFetch from "@/lib/getFetch";
export default async function skills(req, res) {
  const skills = await getFetch(firebaseAPIParser(dataName, dataName));

  return formatDbData(skills.fields);
}
