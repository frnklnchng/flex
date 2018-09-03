import React from 'react';
import { withRouter } from 'react-router-dom';
// import ChatroomIndexItem from './chatroom_index_item';
// import ChatroomContainer from './chatroom_container';
import { Link } from 'react-router-dom'


class ChatIndex extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  } 


  componentDidMount(){

  }

  componentWillReceiveProps(nextProps) {
    
  }


  render() {
    const renderVisited = () => { 
      return this.props.visitedChats.map((chat, index) => (
        <li className='chat-link' key={`chatroom-${index}`}> <Link to={`/chat/${chat}`}>{`/r/${chat}`}</Link> </li>
        ) 
      )
    }
    return (
      <div>
        <div className='chatrooms-header'>Chatrooms</div>
        <div className='chat-category'>Main</div>
        <ul class='chatrooms'>
          <li className='chat-link'> <Link to="/chat/global">r/global</Link> </li>
          <li className='chat-link'> <Link to="/chat/Programers">r/programers</Link> </li>
          <li className='chat-link'> <Link to="/chat/appacademy">/r/appacademy</Link> </li>
        </ul>
          <div className='chat-category'>
            Visited
          </div>
        <ul class='chatrooms'>
          { renderVisited() }
        </ul>

      </div>

    )
  }
  
}
export default ChatIndex;
