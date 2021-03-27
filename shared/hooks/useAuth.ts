
import { useStoreActions, useStoreState } from "easy-peasy"






function useAuth() {
  const auth = useStoreState(state => state.auth)
  const setToken = useStoreActions<any, any>(state => state.auth.setToken)
  const setUser = useStoreActions<any, any>(state => state.auth.setUser)
  const setExpiresAt = useStoreActions<any, any>(state => state.auth.setExpiresAt)

  return { ...auth, setUser, setToken, setExpiresAt }
}

export default useAuth
