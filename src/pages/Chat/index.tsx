import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  AnimeGPTMessage,
  ChatContainer,
  Input,
  InputContainer,
  MessageContainer,
  SendButton,
  UserMessage,
} from './styles'

interface MessageType {
  type: string
  text: string
}

const baseURL = 'http://localhost:5555'

export const Chat = () => {
  const [hasSentMessage, setHasSentMessage] = useState(false)
  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    if (hasSentMessage) {
      const checkForModelAnswer = async () => {
        try {
          const { data } = await axios.post(`${baseURL}/ask-question`, {
            question: newMessage,
          })

          const updatedMessages = [...messages]

          updatedMessages[updatedMessages.length - 1].text =
            data.answer.answer[2]

          setMessages(updatedMessages)
        } catch (error) {
          console.error(error)
        }
      }

      checkForModelAnswer()
      setHasSentMessage(false)
      setNewMessage('')
    }
  }, [hasSentMessage, messages, newMessage])

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((oldMessages) => [
        ...oldMessages,
        { type: 'user', text: newMessage },
        { type: 'model', text: 'Esperando resposta do modelo...' },
      ])
      setHasSentMessage(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <ChatContainer>
      <MessageContainer>
        {messages.map((message, index) =>
          message.type === 'user' ? (
            <UserMessage key={index}>{message.text}</UserMessage>
          ) : (
            <AnimeGPTMessage key={index}>{message.text}</AnimeGPTMessage>
          ),
        )}
      </MessageContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Faça uma pergunta..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <SendButton onClick={handleSendMessage}>Enviar</SendButton>
      </InputContainer>
    </ChatContainer>
  )
}
