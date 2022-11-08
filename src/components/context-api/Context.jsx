import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase";
import { getDateandTime } from "../../assets/utils";
import { ref, set, push, child, onValue } from "firebase/database";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});

  const [cvDetail, setCvDetail] = useState({
    name: "",
    language: "",
    industry: "",
    time: getDateandTime(),
  });

  function writeUserData(data) {
    set(ref(database, "users/" + "ahsan"), data);
  }

  const addData = (data) => {
    const postListRef = ref(database, "users/" + "ahsan");
    const newPostRef = push(postListRef);
    set(newPostRef, data);
  };

  const getAllValue = async () => {
    const db = ref(database, "users/ahsan");
    let val = [];
    const myPromise = new Promise((resolve, reject) => {
      onValue(db, (snapshot) => {
        const key = snapshot.key;
        const data = snapshot.val();
        val = Object.values(data);
        resolve(val);
        console.log("🚀 ~ file: Context.jsx ~ line 36 ~ onValue ~ val", data);
      });
    });
    return myPromise;
  };

  console.log(userDetail.email);

  // get user login Detail
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetail({ ...user });
      } else {
        setUserDetail({});
      }
    });
  }, [onAuthStateChanged]);

  return (
    <AppContext.Provider
      value={{
        userDetail,
        setUserDetail,
        cvDetail,
        setCvDetail,
        writeUserData,
        addData,
        getAllValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// global context hook

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
