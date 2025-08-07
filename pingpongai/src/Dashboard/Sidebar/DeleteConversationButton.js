import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'


const DeleteConversationButton = () => {
  
  return (
    <div className='list_item delete_conv_button' onClick={() => { }}>
            <div className='list_item_icon'>
                <AiOutlineDelete color='white' />
            </div>
            <p className='list_item_text'>Delete conversation</p>
        </div>
  )
}

export default DeleteConversationButton