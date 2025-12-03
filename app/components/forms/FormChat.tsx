'use client'

import { useChat } from '@ai-sdk/react'
import { useState, useRef } from 'react'
import { UserRound, Bot, Send, Plus } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export default function FormChat() {
  // AI SDK
  const { messages, sendMessage } = useChat({
    onError: (error) => {
      console.log('error: ', error)
      setError(error.toString())
    },
  })

  // States
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Ref for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Functions
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      // trigger
      const form = e.currentTarget.form
      if (form && input.trim()) {
        form.requestSubmit()
      }
    }
  }

  // Handle chat
  async function handleChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!input) return

    try {
      setIsLoading(true)
      await sendMessage({ text: input })
      setInput('')
    } catch (error: any) {
      console.log('error: ', error)
      setError(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

    return (
    <div className="w-full bg-transparent flex flex-col h-full">

      <div className="flex-1 overflow-auto w-full mb-30 pb-80 flex justify-center max-h-100 scrollbar-hide">
        {/* Message Display Area */}
      {messages && messages.length > 0 && (
        <div className="flex flex-col gap-1 w-full max-w-4xl">
        {messages.map((message) => (
          <div
          data-loading={isLoading}
          key={message.id}
          className={`flex gap-3 p-2 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
          {message.role === 'user' ? (
            <div className="h-10 w-10 aspect-square rounded-full border border-green-300 flex items-center justify-center bg-green-100/70 text-green-600">
            <UserRound />
            </div>
          ) : (
            <div className="h-10 w-10 aspect-square rounded-full border border-gray-300 flex items-center justify-center bg-white/70 text-gray-700">
            <Bot />
            </div>
          )}
          {message.parts.map((part, i) => {
            switch (part.type) {
            case 'text':
              return (
              <div
                key={`${message.id}-${i}`}
                className={`flex flex-col p-4 rounded-xl border shadow-sm ${
                  message.role === 'user' 
                    ? 'bg-green-100/60 border-green-300/40' 
                    : 'bg-white/60 border-gray-200'
                }`}
              >
                <div className="[&>p]:mb-3 [&>p]:last:mb-0 [&>ul]:mb-4 [&>ul>li]:list-disc [&>ul>li]:ml-5 [&>ol>li]:list-decimal [&>ol>li]:ml-5">
                <ReactMarkdown>{part.text}</ReactMarkdown>
                </div>
              </div>
              )
            }
          })}
          </div>
        ))}
        {/** Mark end of chat */}
        <div ref={messagesEndRef} />
        </div>
      )}
      </div>

      <form
      data-loading={isLoading}
      onSubmit={(e) => handleChat(e)}
      className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-30"
      >
        <div className="form-control relative w-full max-w-4xl">
          <textarea
            name="message"
            placeholder="What do you want to know?"
            className="w-full max-w-4xl p-2 pb-12 pr-14 pl-14 border rounded resize-none bg-white opacity-80"
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => {
              console.log(e.currentTarget.value)
              setInput(e.currentTarget.value)
            }}
          ></textarea>

          <button
            type="button"
            aria-label="Add attachment"
            className="absolute ml-2.5 left-3 bottom-3 p-2 rounded-full text-gray-500 flex items-center justify-center hover:scale-105 transition-transform hover:cursor-pointer"
          >
            <Plus className="h-5 w-5" />
          </button>

          <button
            type="submit"
            aria-label="Send message"
            disabled={isLoading}
            className="absolute right-3 bottom-3 p-2 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 hover:cursor-pointer"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>

        {error && <div className="alert alert--error">{error}</div>}

        {/** The button has been replaced by the Send icon above */}
      </form>
    </div>
  )
}