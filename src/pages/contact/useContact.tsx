import { useState } from "react";
import { app } from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { IUser } from "./contact.types";

const useContact = () => {
  const [user, setUser] = useState<IUser[]>([]);
  const fetchData = async () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "users/data");
    get(starCountRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    user,
    fetchData,
  };
};

export default useContact;
