

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firbase";
import { googleLoginAPI } from "../server/allApis";
import { useDispatch} from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";



function GoogleAuth() {


  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleGoogleAuth = async () => {

    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)
      // console.log(result);
      const data = await googleLoginAPI({

        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL

      })
      // console.log(data);
      dispatch(signInSuccess(data))
      navigate('/')

    }
    catch (error) {
      console.log('could not signin with google', error);

    }
  }
  return (
    <button onClick={handleGoogleAuth} type="button" className="bg-red-700 p-3 text-white rounded-lg hover:opacity-95">Continue With Google</button>
  )
}

export default GoogleAuth

