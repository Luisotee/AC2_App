import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import db from ".";

export async function querryStudents(props) {
  const querySnapshot = await getDocs(collection(db, props));
  return querySnapshot;
}
