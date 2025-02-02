import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import firebaseApp from "../../lib/firebaseApp.js";

var db = getFirestore(firebaseApp);
async function updatePersonalStatement(data, lang) {
  const ps = {
    updateTime: Timestamp.fromDate(new Date()),
    content: data,
  };
  const res = await setDoc(doc(db, "dataname", `dataname`), ps)
    .then((result) => {
      return true;
    })
    .catch((err) => {
      console.log("error", err);
    });
  return { saveResult: res };
}
async function getPersonalStatement(lang) {
  const docRef = await doc(db, `dataname`, `dataname`);
  const docSnap = await getDoc(docRef)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log("get data::::::", err));

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export { updatePersonalStatement, getPersonalStatement };
