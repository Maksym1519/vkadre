import { useEffect } from "react";


const LogOut = () => {
  useEffect(() => {
    localStorage.setItem("user","")
  },[localStorage])
  return null
}
 
export default LogOut;