import bcrypt from 'bcryptjs'

export default function loginUser({ user, password }: {user: string, password: string}) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  const User = {
    user,
    token: hash
  }

  //TODO: Guardamos el usuario en db

  console.log(User)

  return { isValid: true, token: hash, error: 'Usuario invalido' }
}
