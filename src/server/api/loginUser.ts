import bcrypt from 'bcryptjs'

const User = {
  user: 'ruben',
  token: '$2a$10$QXW9YqZFHkQmJhRfXP51.OKq3zhedBdZIguzAvgbbPtcU0O4mNs92'
}

export default function loginUser(
  { user, password }: {user: string, password: string}
){
  let isValid = false

  //TODO: get user from db

  if (user === User.user) {
    isValid = bcrypt.compareSync(password, User.token)
  }

  return { isValid, token: User.token, error: 'Datos incorrectos' }
}
