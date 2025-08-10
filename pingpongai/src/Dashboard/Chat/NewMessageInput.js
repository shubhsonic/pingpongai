import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
import { addMessage, setSelectedConversationId } from '../dashboardSlice';
import { sendConversationMessage } from '../../socketConnection/socketConn';

const NewMessageInput = () => {
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const selectedConversationId = useSelector(
    (state) => state.dashboard.selectedConversationId
  );

  const proceedMessage =() => {
      const message = {
        aiMessage: false,
        content,
        id: uuid(),
        animate: false,
      };

      console.log(message);

      const conversationId = 
        selectedConversationId === "new" ? uuid() : selectedConversationId;

      dispatch(
        addMessage({
          conversationId,
          message,
        })
      );

      dispatch(setSelectedConversationId(conversationId));

      // send message to the server
      sendConversationMessage(message, conversationId);

      setContent('');
  };

  // Reminder: what is message is "      " also add condition from trim()
  const handleSendMessage = () => {
    if(content.trim() === '') return;
      proceedMessage();
  }

  const handleKeyPressed = (event) => {
    if(content.trim() === '') return;
    if(event.code === "Enter") {
      proceedMessage();
    }
  }

  return (
    <div className='new_message_input_container'>
        <input 
            className='new_message_input' 
            type="text" name="" 
            placeholder='Ask anything' 
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            onKeyDown={handleKeyPressed}
        />
        <div className='new_message_icon_container' onClick={handleSendMessage}>
            <BsSend color='grey' />
        </div>
    </div>
  )
}

export default NewMessageInput