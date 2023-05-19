'use client'
import { useRef, useState, useEffect, useMemo } from 'react'
import Message from '@/components/dom/Message'
import { Message as MessageType } from '@/types/chat'
import { fetchEventSource } from '@microsoft/fetch-event-source'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Document } from 'langchain/document'

// import Chat from '@/components/dom/Chat'
// import Question from '@/components/dom/Question'
// import Answer from '@/components/dom/Answer'
// import PageLayout from '@/components/dom/PageLayout'
import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })

const Chat = dynamic(() => import('@/components/dom/Chat').then((mod) => mod), { ssr: false })
const Question = dynamic(() => import('@/components/dom/Question').then((mod) => mod), { ssr: false })
const Answer = dynamic(() => import('@/components/dom/Answer').then((mod) => mod), { ssr: false })
const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })

type MainProps = {}

const Main = ({}: MainProps) => {
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
        message: 'Hi, what would you like to learn about this legal case?',
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
      console.log('messageState', messageState)

      setLoading(false)

      //scroll to bottom
      messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight)
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
    <PageLayout>
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
        // onChange={(e: any) => setMessage(e.target.value)}
      />
    </PageLayout>
  )
}

export default Main
