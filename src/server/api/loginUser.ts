import bcrypt from 'bcryptjs'

const user = {
  email: 'ruben',
  password: '$2a$10$QXW9YqZFHkQmJhRfXP51.OKq3zhedBdZIguzAvgbbPtcU0O4mNs92'
}

export default function loginUser(
  { email, password }: {email: string, password: string}
){
  let isValid = false

  if (email === user.email) {
    isValid = bcrypt.compareSync(password, user.password)
  }

  return { isValid, token: user.password }
}
