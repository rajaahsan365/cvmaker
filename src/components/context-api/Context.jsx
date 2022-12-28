import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase";
import { toast } from "react-toastify";
import { ref, set, push, onValue, remove, update } from "firebase/database";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});

  const getUserName = () => {
    return userDetail?.email ? userDetail.email.split("@")[0] : null;
  };

  const databasePath = `users/${getUserName()}`;

  const [cvListDetail, setCVListDetail] = useState([]);
  const [cvDetail, setCvDetail] = useState({ name: "My Resume" });

  useEffect(() => {}, [cvListDetail]);

  function writeUserData(data) {
    set(ref(database, databasePath), data);
  }

  // Post Data
  const addData = (data,fnfCall=true) => {
    try {
      const postListRef = ref(database, databasePath);
      const newPostRef = push(postListRef);
      set(newPostRef, data);
      fnfCall && toast.success("Resume Created Successfully");
    } catch (error) {
      toast.error("Resume is not Saved " + error);
    }
  };

  // Get All Record
  const getAllValue = () => {
    const db = ref(database, databasePath);
    const myPromise = new Promise((resolve, reject) => {
      onValue(db, (snapshot) => {
        const key = snapshot.key;
        const data = snapshot.val();
        resolve(data);
      });
    });
    return myPromise;
  };

  //  Get Record By Id Function
  const getRecordById = (id) => {
    const db = ref(database, databasePath + "/" + id);
    const myPromise = new Promise((resolve, reject) => {
      onValue(db, (snapshot) => {
        const key = snapshot.key;
        const data = snapshot.val();
        resolve(data);
      });
    });
    return myPromise;
  };

  // Duplicate Record Funtion
  const duplicateRecord = (id, cb = null) => {
    try {
      const db = ref(database, databasePath + "/" + id);
      let val = [];
      onValue(db, (snapshot) => {
        const key = snapshot.key;
        const data = snapshot.val();
        addData(data,false);
      });
      toast.success("Duplicate Successfully");
      if (typeof cb == "function") {
        cb(false);
      }
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // Record Update Function
  const updateRecord = (id, data) => {
    try {
      update(ref(database, databasePath + "/" + id), data);
      toast.success("Update Successfully");
    } catch (error) {
      toast.error("Resume is not Updated " + error);
    }
  };

  // Delete Record Function
  const handleDelete = (id, cb = null) => {
    try {
      remove(ref(database, databasePath + "/" + id));
      if (typeof cb == "function") {
        cb(false);
      }
      toast.success("Resume Deleted Successfully");
    } catch (error) {
      toast.error("Resume is not Deleted");
    }
  };

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
