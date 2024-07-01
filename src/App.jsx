import { React, useState } from "react";
import Header from "./components/header.jsx";
import MessageInput from "./components/messageInput.jsx";
import MessageList from "./components/messageList.jsx";

function App() {
  const [messagesList, setMessagesList] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center ">
        <Header />
        <MessageList messages={messagesList} />
        <MessageInput setMessagesList={setMessagesList} />
      </div>
    </>
  );
}

export default App;
