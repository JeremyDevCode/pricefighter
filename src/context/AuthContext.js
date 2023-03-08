import { createContext, useContext, useState, useEffect } from 'react'
import { supabaseClient } from '../supabase/client'
import { buildUser } from '../utils/buildUser'

const AuthContext = createContext()

/**
 * Hook that allows you to interact with authentication state and methods
 * @typedef {Object} AuthState Authentication object that contains authentication state and methods
 * @property {Object} auth Object that contains authentication information
 * @property {Function} signInWithGitHub Function that allows to sign in with GitHub
 * @property {Function} signOut Function that allows to signOut
 *
 * @returns {AuthState} Authentication object that contains authentication state and methods
 */
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('Missing AuthProvider to use cart context')
  }
  return context
}

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      const { user, access_token: accessToken } = session
      if (user) {
        setAuth(buildUser(user, accessToken))
      } else setAuth(null)
    })
  }, [])

  async function signInWithGitHub() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'github'
    })
    console.log(data, error)
  }

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        signInWithGitHub,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
