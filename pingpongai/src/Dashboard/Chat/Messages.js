import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='chat_messages_container'>
        <Message content='Hello ai' aiMessage={false} />
        <Message content='Hello here is ai.' aiMessage={true}/>
    </div>
  )
}

export default Messages