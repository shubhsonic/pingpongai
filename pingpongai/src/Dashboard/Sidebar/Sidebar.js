import React from 'react'
import NewChatButton from './NewChatButton';
import ListItems from './ListItems';
import DeleteConversationButton from './DeleteConversationButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedConversationId } from '../dashboardSlice';

const Sidebar = () => {

  const dispatch = useDispatch();

  const conversations = useSelector(state => state.dashboard.conversations);

  const handleSetSelectedChat = (id) => {
    dispatch(setSelectedConversationId(id));
  }

  return (
    <div className='sidebar_container'>
      <NewChatButton handleSetSelectedChat={handleSetSelectedChat} />
      {conversations.map(c => (
        <ListItems 
        key={c.id} 
        title={c.messages[0].content} 
        conversationId={c.id}
        handleSetSelectedChat={handleSetSelectedChat} />
      ))}
      <DeleteConversationButton />
    </div>
  )
}

export default Sidebar