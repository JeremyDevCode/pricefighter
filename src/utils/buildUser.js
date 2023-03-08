export const buildUser = (supabaseUser, accessToken) => {
  const {
    user_metadata: { avatar_url: userAvatar, user_name: userName }
  } = supabaseUser
  return { userAvatar, userName, accessToken }
}
