import formatDbData from "@/lib/formatDbData.js";
import firebaseAPIParser from "@/lib/firebaseAPIParser.js";
import getFetch from "@/lib/getFetch";

export default async function personalStatement(dataName) {
  const psDataEn = await getFetch(firebaseAPIParser("name", dataName));

  return formatDbData(psDataEn.fields);
}
