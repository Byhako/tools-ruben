import bcrypt from 'bcryptjs'

const user = {
  email: 'ruben',
  password: '$2a$10$QXW9YqZFHkQmJhRfXP51.OKq3zhedBdZIguzAvgbbPtcU0O4mNs92'
}

export default function loginUser({ email, password }: {email: string, password: string}) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  const user = {
    email,
    password: hash
  }

  // Guardamos el usuario en db

  console.log(user)
}
