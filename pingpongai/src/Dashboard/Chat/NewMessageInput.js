import React from 'react'
import { BsSend } from 'react-icons/bs'

const NewMessageInput = () => {
  return (
    <div className='new_message_input_container'>
        <input 
            className='new_message_input' 
            type="text" name="" 
            placeholder='Ask anything' 
            value=''
            onChange={()=>{}}
            onKeyDown={()=>{}}
        />
        <div className='new_message_icon_container' onClick={()=>{}}>
            <BsSend color='grey' />
        </div>
    </div>
  )
}

export default NewMessageInput