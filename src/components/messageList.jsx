import React from 'react'
//list of mesages from gemini API and user query
//it will maintain a list of messages from the user and the response from the Gemini API
const MessageList = ({messages}) => {
  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default MessageList