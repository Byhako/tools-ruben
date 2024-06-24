import { createContext, useCallback, useEffect, useState } from "react";
import { useCookies } from 'react-cookie'

interface Props {
  name: string
  token: string
}

export const UserContext = createContext({
  name: '',
  token: '',
  updateUser: ({ name, token }: Props) => {}
})

export function UserContextProvider({ children }: { children: React.ReactNode}) {
  const [name, setName] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [cookies, setCookie] = useCookies()

  useEffect(() => {
    console.log('cookies', cookies['rubenTools'])
    const cookie = cookies['rubenTools']
    if (cookie) {
      setName(cookie.name)
      setToken(cookie.token)
    }
  }, [])

  const updateUser = useCallback(({ name, token }: Props) => {
    setName(name)
    setToken(token)

    setCookie('rubenTools', { name, token })
  }, [])

  return (
    <UserContext.Provider value={{ name, token, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
