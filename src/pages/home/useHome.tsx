import { useState } from "react";
import { app } from "../../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

const useHome = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const usersRef = ref(db, "users/data");
    const newUserRef = push(usersRef);
    set(newUserRef, {
      nama: name,
      data_email: email,
    })
      .then(() => {
        alert("Data saved successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return {
    name,
    setName,
    email,
    setEmail,
    saveData,
  };
};

export default useHome;
