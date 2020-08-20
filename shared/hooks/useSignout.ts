import { useRouter } from "next/router"
import useAuth from "./useAuth"


function useSignout(redirectUrl = '/', withDirect = true) {
  const { setToken, setUser } = useAuth()
  const { push, } = useRouter()


  const signout = () => {
    if (withDirect) {
      push(redirectUrl)
    }
    setToken('')
    setUser(null)
  }


  return signout
}


export default useSignout