'use client'
import { useRef, useState, useEffect, useMemo, memo } from 'react'
import Message from '@/components/dom/Message'
import { Message as MessageType } from '@/types/chat'
import { Document } from 'langchain/document'

import Chat from '@/components/dom/Chat'
import Question from '@/components/dom/Question'
import Answer from '@/components/dom/Answer'

type MainProps = {}

const ChatContent = ({}: MainProps) => {
  const [query, setQuery] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [messageState, setMessageState] = useState<{
    messages: MessageType[]
    pending?: string
    history: [string, string][]
    pendingSourceDocs?: Document[]
  }>({
    messages: [
      {
        message: 'Hi, what would you like to learn about me?',
        type: 'apiMessage',
      },
    ],
    history: [],
  })

  const { messages, pending, history } = messageState

  const messageListRef = useRef<HTMLDivElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    textAreaRef.current?.focus()
  }, [])

  const scrollToBottom = () => {
    messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, pending]) // updated this to include pending in the dependencies

  //handle form submission
  async function handleSubmit(e: any) {
    e.preventDefault()

    setError(null)

    if (!query) {
      alert('Please input a question')
      return
    }

    const question = query.trim()

    setMessageState((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          type: 'userMessage',
          message: question,
        },
      ],
    }))

    setLoading(true)
    setQuery('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          history,
        }),
      })
      const data = await response.json()
      console.log('data', data)

      if (data.error) {
        setError(data.error)
      } else {
        setMessageState((state) => ({
          ...state,
          messages: [
            ...state.messages,
            {
              type: 'apiMessage',
              message: data.text,
              sourceDocs: data.sourceDocuments,
            },
          ],
          history: [...state.history, [question, data.text]],
        }))
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError('An error occurred while fetching the data. Please try again.')
      console.log('error', error)
    }
  }
  //prevent empty submissions
  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && query) {
      handleSubmit(e)
    } else if (e.key == 'Enter') {
      e.preventDefault()
    }
  }

  const chatMessages = useMemo(() => {
    return [...messages, ...(pending ? [{ type: 'apiMessage', message: pending }] : [])]
  }, [messages, pending])

  return (
    <div
      className={`relative z-10 pointer-events-all flex h-full w-full p-6 md:p-0 bg-n-3 dark:bg-transparent opacity-90`}
    >
      <div className={`relative flex grow max-w-full `}>
        <div className={`relative flex flex-col grow max-w-full `}>
          <Chat ref={messageListRef} title='PersonalGPT'>
            {chatMessages.map((message, index) => {
              if (message.type === 'apiMessage') {
                return <Answer key={index}>{message.message}</Answer>
              } else {
                return <Question key={index} content={message.message} time='Just now' />
              }
            })}
            {loading ? <Answer loading /> : null}
          </Chat>
          <Message
            ref={textAreaRef}
            onEnter={handleEnter}
            onSubmit={handleSubmit}
            disabled={loading}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(ChatContent)

// 'use client'
// import { useRef, useEffect, useMemo, memo } from 'react'
// import Message from '@/components/dom/Message'
// import { Document } from 'langchain/document'

// import Chat from '@/components/dom/Chat'
// import Question from '@/components/dom/Question'
// import Answer from '@/components/dom/Answer'
// import { useChatContext } from '@/context/ChatContext'

// type MainProps = {}

// const ChatContent = ({}: MainProps) => {
//   const { query, loading, error, messageState, setQuery, setLoading, setError, setMessageState } = useChatContext()

//   const { messages, pending, history } = messageState

//   const messageListRef = useRef<HTMLDivElement>(null)
//   const textAreaRef = useRef<HTMLTextAreaElement>(null)

//   useEffect(() => {
//     textAreaRef.current?.focus()
//   }, [])

//   const scrollToBottom = () => {
//     messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight)
//   }

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages, pending]) // updated this to include pending in the dependencies

//   //handle form submission
//   async function handleSubmit(e: any) {
//     e.preventDefault()

//     setError(null)

//     if (!query) {
//       alert('Please input a question')
//       return
//     }

//     const question = query.trim()

//     setMessageState((state) => ({
//       ...state,
//       messages: [
//         ...state.messages,
//         {
//           type: 'userMessage',
//           message: question,
//         },
//       ],
//     }))

//     setLoading(true)
//     setQuery('')

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           question,
//           history,
//         }),
//       })
//       const data = await response.json()
//       console.log('data', data)

//       if (data.error) {
//         setError(data.error)
//       } else {
//         setMessageState((state) => ({
//           ...state,
//           messages: [
//             ...state.messages,
//             {
//               type: 'apiMessage',
//               message: data.text,
//               sourceDocs: data.sourceDocuments,
//             },
//           ],
//           history: [...state.history, [question, data.text]],
//         }))
//       }
//       setLoading(false)
//     } catch (error) {
//       setLoading(false)
//       setError('An error occurred while fetching the data. Please try again.')
//       console.log('error', error)
//     }
//   }
//   //prevent empty submissions
//   const handleEnter = (e: any) => {
//     if (e.key === 'Enter' && query) {
//       handleSubmit(e)
//     } else if (e.key == 'Enter') {
//       e.preventDefault()
//     }
//   }

//   const chatMessages = useMemo(() => {
//     return [...messages, ...(pending ? [{ type: 'apiMessage', message: pending }] : [])]
//   }, [messages, pending])

//   return (
//     <div className={`flex h-full w-full p-6 bg-transparent opacity-80 pt-15`}>
//       <div className={`relative flex grow max-w-full `}>
//         <div className={`relative flex flex-col grow max-w-full `}>
//           <Chat ref={messageListRef} title='PersonalGPT'>
//             {chatMessages.map((message, index) => {
//               if (message.type === 'apiMessage') {
//                 return <Answer key={index}>{message.message}</Answer>
//               } else {
//                 return <Question key={index} content={message.message} time='Just now' />
//               }
//             })}
//             {loading ? <Answer loading /> : null}
//           </Chat>
//           <Message
//             ref={textAreaRef}
//             onEnter={handleEnter}
//             onSubmit={handleSubmit}
//             disabled={loading}
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default memo(ChatContent)
