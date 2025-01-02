// import { useRef } from "react"
import {  useDispatch, useSelector } from "react-redux"
import {  signOutUserFailure, signOutUserStart, signOutUserSuccess } from "../redux/user/userSlice"
import { signOutAPI } from "../server/allApis"


function Profile() {
  const { currentUser } = useSelector(state => state.user)

  const dispatch=useDispatch()
  // const navigate=useNavigate()

  // const handleUserDelete=async()=>{
  //   try{
  //     dispatch(deleteUserStart())
  //     const data=await userDeleteAPI(currentUser._id)
  //     console.log(data);
  //     // if(data.success==false){
  //     //   dispatch(deleteUserFailure(data.message))
  //     // }
  //     // dispatch(deleteUserSuccess(data))
      
  //   }
  //   catch(error){
  //     dispatch(deleteUserFailure(error.message))

  //   }
  // }

const handleSignOut=async()=>{

  try{
    dispatch(signOutUserStart())
    const {data}=await signOutAPI()
    if(data.success==false){
      dispatch(signOutUserFailure(data.message))
    }
    dispatch(signOutUserSuccess(data))


  }
  catch(error){
    dispatch(signOutUserFailure(error.message))
  }
}
  

  return (

    <div className=" max-w-lg mx-auto">
      <h1 className=" my-7 font-semibold  text-3xl text-center">Profile</h1>


      <form className="flex flex-col gap-4">
        {/* <input type="file"  ref={fileRef} hidden accept="image/*"/> */}

        {/* <img onClick={()=>fileRef.current.click()} className="rounded-full h-20 w-20 flex object-cover self-center cursor-pointer" src={currentUser.data.avatar} alt="Image...!" /> */}
        <img className="rounded-full h-20 w-20 flex object-cover self-center cursor-pointer" src={currentUser.avatar} alt="Image...!" />
        <input defaultValue={currentUser.userName} className="border p-3 rounded-lg" type="text" name="usrName" placeholder="User Name" />
        <input defaultValue={currentUser.email} className="border p-3 rounded-lg" type="email" name="email" placeholder="Email" />
        <input className="border p-3 rounded-lg" type="password" name="password" placeholder="Password" />

        {/* <button className="bg-slate-800 border p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80">UPDATE</button> */}
        {/* <button className="bg-green-900 border p-3 rounded-lg text-white hover:opacity-95">CREATE LISTING</button> */}

      </form>

      <div className="flex justify-between mt-5 cursor-pointer">
        <p  className="text-red-700 cursor-pointer">Delete Account</p>
        <p onClick={handleSignOut} className="text-red-700 cursor-pointer">SignOut</p>
      </div>

    </div>
  )

}

export default Profile
