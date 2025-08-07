import React from 'react';
import { GrUser } from 'react-icons/gr';
import { FcMindMap } from 'react-icons/fc';



const Message = ({ content, aiMessage, animate }) => {
  return (
    <div
    className='message_container'
    style={{ background: aiMessage ? "rgba(235, 236, 240)" : "white"}}
    >
        <div className='message_avatar_container'>
            {aiMessage ? <FcMindMap /> : <GrUser />}
        </div>
        <p className='message_text'>
            {content}
        </p>
    </div>
  );
};

export default Message