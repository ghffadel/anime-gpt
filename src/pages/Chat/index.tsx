import { useState } from 'react'
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

export const Chat = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { type: 'user', text: newMessage }])
      setNewMessage('')
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
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
  )
}
