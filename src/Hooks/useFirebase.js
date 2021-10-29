import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error,setError] = useState('')
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const SignWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
            
                console.log(result.user);
                setUser(result.user)

            })
            .catch((error) => {
              
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            
                })
  }

  const logout = () => {
            const auth = getAuth();
            signOut(auth)
            .then(() => {
             setUser({})
            })
            .catch((error) => {
                console.log(error)
              });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        }
      });
},[])
// const handleUserRegister = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((result) => {
//       console.log(result.user);
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//     });
// };
// const handleUserLogin = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((result) => {
//       console.log(result.user);
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//     });
// };

  return {
      user,
      error,
   SignWithGoogle,
   logout,
//    handleUserRegister,
//    handleUserLogin
}
}

export default useFirebase;