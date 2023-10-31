import USERPNG from "../assets/user.png"
import LOGO from "../assets/movielogo.png"
const Header = () => {
  return (
    <div className="flex justify-between text-white py-4 px-8 bg-gray-800 items-center">
      {/* <h1 className="text-2xl font-semibold capitalize">MoveiX</h1> */}
      <img src={LOGO} alt="" className="h-7" />
      <img className="h-9 w-8" src={USERPNG} alt="" />
    </div>
  )
}

export default Header
