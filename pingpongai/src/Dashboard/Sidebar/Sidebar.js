import React from 'react'
import NewChatButton from './NewChatButton';
import ListItems from './ListItems';
import DeleteConversationButton from './DeleteConversationButton';

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <NewChatButton />
        <ListItems title='History 1' />
        <ListItems title='Test' />
        <ListItems title='Track' />
        <DeleteConversationButton />
    </div>
  )
}

export default Sidebar