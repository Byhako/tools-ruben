import { createContext, useCallback, useState } from "react";

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

  //TODO: read cookie and update user

  const updateUser = useCallback(({ name, token }: Props) => {
    //TODO: save token and name in cookie
    setName(name)
    setToken(token)
  }, [])

  return (
    <UserContext.Provider value={{ name, token, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
