// 'use client'
// import React, { createContext, useContext, useState } from 'react'
// import { Message as MessageType } from '@/types/chat'

// export type ChatContextType = {
//   messageState: {
//     messages: MessageType[]
//     pending?: string
//     history: [string, string][]
//     pendingSourceDocs?: Document[]
//   }
//   query: string
//   loading: boolean
//   error: string | null
//   setQuery: React.Dispatch<React.SetStateAction<string>>
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>
//   setError: React.Dispatch<React.SetStateAction<string | null>>
//   setMessageState: React.Dispatch<React.SetStateAction<any>>
// }

// export const ChatContext = createContext<ChatContextType | undefined>(undefined)

// export function useChatContext() {
//   const context = useContext(ChatContext)
//   if (context === undefined) {
//     throw new Error('useChatContext must be used within a ChatProvider')
//   }
//   return context
// }

// export const ChatProvider = ({ children }) => {
//   const [query, setQuery] = useState<string>('')
//   const [loading, setLoading] = useState<boolean>(false)
//   const [error, setError] = useState<string | null>(null)
//   const [messageState, setMessageState] = useState<{
//     messages: MessageType[]
//     pending?: string
//     history: [string, string][]
//     pendingSourceDocs?: Document[]
//   }>({
//     messages: [
//       {
//         message: 'Hi, what would you like to learn about me?',
//         type: 'apiMessage',
//       },
//     ],
//     history: [],
//   })

//   return (
//     <ChatContext.Provider
//       value={{
//         messageState,
//         query,
//         loading,
//         error,
//         setQuery,
//         setLoading,
//         setError,
//         setMessageState,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   )
// }
