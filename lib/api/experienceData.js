import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "../../lib/firebaseApp.js";

var db = getFirestore(firebaseApp);
async function updateExperience(data, lang) {
  const history = {
    historyData: data,
  };
  const res = await setDoc(doc(db, "data", `data`), history)
    .then((result) => {
      return true;
    })
    .catch((err) => {
      console.log("error", err);
    });
  return { saveResult: res };
}
async function getExperience(lang) {
  const docRef = await doc(db, "data", `data`);
  const docSnap = await getDoc(docRef)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log("get data error::::::", err));

  if (docSnap.exists()) {
    const { historyData } = docSnap.data();

    return historyData;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export { updateExperience, getExperience };
