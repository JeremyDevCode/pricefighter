export const buildUser = (supabaseUser, accessToken) => {
  console.log(supabaseUser, accessToken)
  const {
    user_metadata: { avatar_url: userAvatar, user_name: userName }
  } = supabaseUser
  return { userAvatar, userName, accessToken }
}
