import styled from 'styled-components'

export const ChatContainer = styled.div`
  width: 75rem;
  margin: 1.25rem auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
`

export const MessageContainer = styled.div`
  padding: 0.625rem;
`

export const UserMessage = styled.div`
  background-color: #4caf50;
  color: #fff;
  padding: 8px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`

export const AnimeGPTMessage = styled.div`
  background-color: #2196f3;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`

export const InputContainer = styled.div`
  display: flex;
  padding: 0.5rem;
`

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`

export const SendButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`
