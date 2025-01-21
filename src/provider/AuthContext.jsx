import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userStatus, setUserStatus] = useState(null);
  const [loadingStatus, setLoading] = useState(true);


  useEffect(() => {
    const userUnmount = onAuthStateChanged(auth, currentUser => {
      setUserStatus(currentUser);
      console.log('current User', currentUser);
      setLoading(false);
    });
    return () => {
      return userUnmount();
    }
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    setLoading(true);
    return signOut(auth)
  }


  const authData = {logout, userStatus, loadingStatus, setLoading, createUser, signIn };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
