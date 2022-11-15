import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase";
import { getDateandTime } from "../../assets/utils";
import {
  ref,
  set,
  push,
  child,
  onValue,
  remove,
  update,
} from "firebase/database";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});

  const [cvListDetail, setCVListDetail] = useState([]);
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

  const getAllValue = () => {
    const db = ref(database, "users/ahsan");
    const myPromise = new Promise((resolve, reject) => {
      onValue(db, (snapshot) => {
        const key = snapshot.key;
        const data = snapshot.val();
        resolve(data);
        console.log("🚀 ~ file: Context.jsx ~ line 36 ~ onValue ~ val", data);
      });
    });
    return myPromise;
  };

  const getRecordById = (id) => {
    const db = ref(database, "users/ahsan/" + id);
    const myPromise = new Promise((resolve, reject) => {
      onValue(db, (snapshot) => {
        const key = snapshot.key;
        const data = snapshot.val();
        resolve(data);
        console.log("🚀 ~ file: Context.jsx ~ line 36 ~ onValue ~ val", data);
      });
    });
    return myPromise;
  };
  const duplicateRecord = (id) => {
    const db = ref(database, "users/ahsan/" + id);
    let val = [];
    onValue(db, (snapshot) => {
      const key = snapshot.key;
      const data = snapshot.val();
      addData(data);
      console.log("🚀 ~ file: Context.jsx ~ line 36 ~ onValue ~ val", data);
    });
  };

  const updateRecord = (id, data) => {
    update(ref(database, "users/ahsan/" + id), data);
  };

  const handleDelete = (id, cb = null) => {
    remove(ref(database, "users/ahsan/" + id));
    if (typeof cb == "function") {
      cb(false);
    }
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
        cvListDetail,
        setCVListDetail,
        handleDelete,
        updateRecord,
        duplicateRecord,
        getRecordById,
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
