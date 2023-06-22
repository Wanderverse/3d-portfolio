import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { makeChain } from '@/utils/makechain'
import { pinecone } from '@/utils/pinecone-client'
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from '@/config/pinecone'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { question, history = [] } = req.body

  if (!question) {
    return res.status(400).json({ message: 'No question in the request' })
  }

  const sanitizedQuestion = question.trim().replaceAll('\n', ' ')
  const index = pinecone.Index(PINECONE_INDEX_NAME)

  const vectorStore = await PineconeStore.fromExistingIndex(new OpenAIEmbeddings({}), {
    pineconeIndex: index,
    textKey: 'text',
  })

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  })

  const sendData = (data: string) => {
    res.write(`data: ${data}\n\n`)
  }

  sendData(JSON.stringify({ data: '' }))
  const chain = makeChain(vectorStore, (token: string) => {
    sendData(JSON.stringify({ data: token }))
  })

  try {
    await chain.call({
      question: sanitizedQuestion,
      chat_history: history,
    })
  } catch (error: any) {
    console.log('error', error)
    sendData(JSON.stringify({ error: error.message || 'Something went wrong' }))
  } finally {
    sendData('[DONE]')
    res.end()
  }
}
