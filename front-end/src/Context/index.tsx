import React, { createContext, useState } from 'react'

const Context = createContext<any>({})

// const AppContext: React.FC = ({ children }) => {
//   const [signIn, setSignIn] = useState(false)

//   return (
//     <Context.Provider value={{ signIn, setSignIn }}>
//       {children}
//     </Context.Provider>
//   )
// }
export { Context as default }
