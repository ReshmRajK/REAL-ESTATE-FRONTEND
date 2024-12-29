import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userRegisterAPI } from "../server/allApis"

function Auth({ login }) {

  const navigate=useNavigate()

  const [formData,setFormData]=useState({
    userName:'',email:'',password:''
  })

  const [loading,setLoading]=useState(false)
  // const [error,setError]=useState(null)


  const setData=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})

  }
  // console.log(formData);
  const handleChange=async(e)=>{
    e.preventDefault()
    
    const {userName,email,password}=formData
    if(!userName||!email||!password){
      alert('Please fill all data...!')
    }
    else{
      const result=await userRegisterAPI(formData)
      if(result.status==201){
        alert(result.data)
        setLoading(true)
        setFormData({...formData,userName:'',email:'',password:''})      
        navigate('/login')
      }
      else{
        //  if(result.success==false){
        //  setError(result.message)
        //   setLoading(false)
        // setFormData({...formData,userName:'',email:'',password:''})
          
        // }
         setLoading(false)
         alert(result.response.data)
         setFormData({...formData,userName:'',email:'',password:''})
      }
     
    }
    
   
    


  }
  

  return (
    <div className="max-w-lg mx-auto">

      {login ?
        <h1 className="text-3xl text-center font-semibold my-7">SignIn</h1>
        : <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>

      }

      <div>
        {login ?
          <form className="flex flex-col gap-4">
            <input className="border p-3 rounded-lg " type="email" placeholder="email" id="email" name="email"/>
            <input className="border p-3 rounded-lg " type="password" placeholder="Password" id="password" name='password' />
            <button className="bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-80">SignIn</button>

          </form>

          : <form  className="flex flex-col gap-4">
            <input onChange={(e)=>setData(e)} value={formData.userName?.userName} className="border p-3 rounded-lg " type="text" placeholder="User Name" id='uname' name="userName"/>
            <input onChange={(e)=>setData(e)} value={formData.email?.email} className="border p-3 rounded-lg " type="email" placeholder="email" id="email" name="email" />
            <input onChange={(e)=>setData(e)} value={formData.password?.password} className="border p-3 rounded-lg " type="password" placeholder="Password" id="password" name='password' />
            <button disabled={loading}  onClick={(e)=>handleChange(e)} className="bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-80">
              {loading?'Loading...':'SignUp'}
              </button>

          </form>


        }
      </div>


      {login ?
        <div className="flex my-4">

          <p>Create account? </p>
          <Link to={'/auth'}>
            <span className="text-blue-700"> SignUp</span>
          </Link>

        </div>
        : <div className="flex my-4">

          <p>Have an account? </p>
          <Link to={'/login'}>
            <span className="text-blue-700"> SignIn</span>
          </Link>

        </div>
      }

    </div>
  )
}

export default Auth
