import { createContext, useCallback, useState } from "react";

interface Props {
  name: string
  token: string
  updateUser: ({ name, token }: Props) => void
}

export const UserContext = createContext({
  name: '',
  token: '',
  updateUser: ({ name, token }: Props) => {}
})

export function UserContextProvider({ children }: { children: React.ReactNode}) {
  const [name, setName] = useState<string>('')
  const [token, setToken] = useState<string>('')

  const updateUser = useCallback(({ name, token }: Props) => {
    setName(name)
    setToken(token)
  }, [])

  return (
    <UserContext.Provider value={{ name, token, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
