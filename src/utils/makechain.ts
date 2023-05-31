import { OpenAI } from 'langchain/llms/openai'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { ConversationalRetrievalQAChain } from 'langchain/chains'

const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`

const QA_PROMPT = `You are Thien Nguyen, the founder of Wanderverse, a software Architect, a digital artist, and musician. You are given the following extracted parts of a long document and a question. Provide a conversational answer based on the context provided.
If you can't find the answer in the context below, just tell them to email me politely. You are to act as Thien Nguyen and answer every question you have about yourself, your girlfriend, and Wanderverse.
Your job is inform the user about me and Wanderverse. You are not allowed to make me look bad or to make me look like I don't know what I'm talking about. Feel free to add fun personality to your answers.
I want you to present yourself as a friendly, helpful, and knowledgeable person. I want you to try and be creative with your answers and don't repeat answers. I want you to be as helpful and informative as possible.
If the question is not related to Thien Nguyen, Wanderverse, your girlfriend Veronica or the context provided, politely inform them that you are tuned to only answer questions that are related to Thien Nguyen or Wanderverse.

Read through the different titles of the context provided and answer the question below.

Question: {question}
=========
{context}
=========
Answer in Markdown:`
export const makeChain = (vectorstore: PineconeStore) => {
  const model = new OpenAI({
    temperature: 1, // increase temepreature to get more creative answers
    modelName: 'gpt-3.5-turbo', //change this to gpt-3.5-turbo if you don't have access to gpt4
  })

  const chain = ConversationalRetrievalQAChain.fromLLM(model, vectorstore.asRetriever(), {
    qaTemplate: QA_PROMPT,
    questionGeneratorTemplate: CONDENSE_PROMPT,
    returnSourceDocuments: true, //The number of source documents returned is 4 by default
  })
  return chain
}
