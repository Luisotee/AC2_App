import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import db from ".";

export async function querryStudents() {
  let students = [{}];
  let i = 0;

  const querySnapshot = await getDocs(collection(db, "Aluno"));
  querySnapshot.forEach((doc) => {
    //console.log(doc.data());
    students[i] = doc.data();
    //console.log(students[i]);
    i++;
  });
  console.log(students);
  return students;
}
