import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userLoginAPI, userRegisterAPI } from "../server/allApis"
import { useDispatch } from "react-redux"
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice"
import GoogleAuth from "../components/GoogleAuth"



function Auth({ login }) {
  const dispatch = useDispatch()


  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    userName: '', email: '', password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [validUname, setValidUname] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPsw, setValidPsw] = useState(false)


  const setData = (e) => {
    const { name, value } = e.target
    if (name == 'userName') {

      if (value.match(/^[a-zA-Z ]+$/)) {
        setValidUname(false)
        setFormData({ ...formData, [name]: value })

      }
      else {
        setValidUname(true)
      }

    }

    //email
    if (name == 'email') {
      if (value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        setValidEmail(false)
        setFormData({ ...formData, [name]: value })

      }
      else {
        setValidEmail(true)
      }
    }


    //password
    if (name == 'password') {

      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setValidPsw(false)
        setFormData({ ...formData, [name]: value })

      }
      else {
        setValidPsw(true)
      }

    }

  }
  // console.log(formData);


  const handleChange = async (e) => {
    e.preventDefault()

    setLoading(true)
    const { userName, email, password } = formData

    if (!userName || !email || !password) {
      alert('Please fill All data')
    }

    else {
      const result = await userRegisterAPI(formData)
      console.log(result);


      if (result.status == 201) {
        alert(result.data)
        setLoading(false)
        setFormData({ userName: "", email: "", password: "" })
        navigate('/login')
      }
      else {
        alert(result.response.data)
        setLoading(false)
        setError(null)
        setFormData({ userName: "", email: "", password: "" })
      }

    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    // setLoading(true)
    dispatch(signInStart())
    const { email, password } = formData

    if (!email || !password) {

      alert('Please fill all data')
    }
    else {
      const { data } = await userLoginAPI(formData)
      console.log(data);

      if (data) {

        dispatch(signInSuccess(data))
        setLoading(false)
        setFormData({ ...formData, email: '', password: '' })
        navigate('/')
      }
      else {

        dispatch(signInFailure(data.message))
        setLoading(false)
        setFormData({ ...FormData, email: '', password: '' })
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
            <input onChange={(e) => setData(e)} value={formData.email?.email} className="border p-3 rounded-lg " type="text" placeholder="email" id="email" name="email" />

            {validEmail &&
              <p className='text-red-700'>Please include alphabets and space only</p>
            }

            <input onChange={(e) => setData(e)} value={formData.password?.password} className="border p-3 rounded-lg " type="password" placeholder="Password" id="password" name='password' />

            {validPsw &&
              <p className='text-red-700'>Please include alphabets and space only</p>
            }

            <button onClick={(e) => handleLogin(e)} className="bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-80">SignIn</button>

            <GoogleAuth />
          </form>

          : <form className="flex flex-col gap-4">
            <input onChange={(e) => setData(e)} value={formData.userName?.userName} className="border p-3 rounded-lg " type="text" placeholder="User Name" id='uname' name="userName" />

            {validUname &&
              <p className='text-red-700'>Please include alphabets and space only</p>
            }

            <input onChange={(e) => setData(e)} value={formData.email?.email} className="border p-3 rounded-lg " type="text" placeholder="email" id="email" name="email" />

            {validEmail &&
              <p className='text-red-700'>Please include alphabets and space only</p>
            }

            <input onChange={(e) => setData(e)} value={formData.password?.password} className="border p-3 rounded-lg " type="password" placeholder="Password" id="password" name='password' />

            {validPsw &&
              <p className='text-red-700'>Please include alphabets and space only</p>
            }

            <button disabled={loading} onClick={(e) => handleChange(e)} className="bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-80">
              {loading ? 'Loading...' : 'SignUp'}
            </button>

          </form>


        }
      </div>


      {login ?
        <div className="flex my-4">

          <p> Dont have an account? </p>
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
