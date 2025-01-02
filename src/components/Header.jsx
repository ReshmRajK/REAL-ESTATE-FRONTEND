import { FaSearch } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



function Header() {

  const { currentUser } = useSelector(state => state.user)
  // console.log(currentUser);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center  mx-auto max-w-6xl p-3">
        <Link to={'/'}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input type="text" placeholder="Search Here..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className="text-slate-600 " />
        </form>

        <ul className="flex gap-4">
          <Link to={'/'}><li className=" text-slate-700 hover:underline cursor-pointer hidden sm:inline">Home</li></Link>
          <Link to={'/about'}><li className=" text-slate-700 hover:underline cursor-pointer hidden sm:inline">About</li></Link>

          <Link to={'/profile'}>

            {currentUser ?
              <img className="rounded-full object-cover h-7 w-7 " src={currentUser.avatar} alt="Profile" />
              : <li className=" text-slate-700 hover:underline cursor-pointer ">SignIn</li>
            }

          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header
