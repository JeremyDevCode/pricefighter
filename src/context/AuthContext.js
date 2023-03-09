import { createContext, useContext, useState, useEffect } from 'react'
import { supabaseClient } from '../supabase/client'
import { buildUser } from '../utils/buildUser'

const AuthContext = createContext()

/**
 * Hook that allows you to interact with authentication state and methods
 * @typedef {Object} AuthState Authentication object that contains authentication state and methods
 * @property {Object} auth Object that contains authentication information
 * @property {Function} signInWithGitHub Function that allows to sign in with GitHub
 * @property {Function} signInWithGoogle Function that allows to sign in with Google
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
      if (session) {
        const builduser = buildUser(session.user, session.access_token)
        setAuth(builduser)
      } else {
        setAuth(null)
      }
    })
    async function checkSession() {
      const sessionRes = await supabaseClient.auth.getSession()
      const sessionUser = sessionRes.data.session?.user
      const sessionAccessToken = sessionRes.data.session?.access_token
      if (sessionUser) {
        const builduser = buildUser(sessionUser,
          sessionAccessToken)
        setAuth(builduser)
      }
    }
    checkSession()
  }, [])

  async function signInWithGitHub() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: `${process.env.NEXT_PUBLIC_GAME_URL}/game` }
    })
    console.log(error)
  }

  async function signInWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${process.env.NEXT_PUBLIC_GAME_URL}/game` }
    })
    console.log(error)
  }

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut()
    console.log(error)
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        signInWithGitHub,
        signInWithGoogle,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
