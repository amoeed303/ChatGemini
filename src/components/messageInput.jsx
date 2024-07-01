import { React, useState } from "react";
//an input field for the user to type in their message for Gemini API
const MessageInput = ({setMessagesList}) => {
  const [inputVal, setInputVal] = useState("");
  //appending to list
 const handleSubmit = (e) => {
   e.preventDefault();
   if (!inputVal.trim()) return;
   setMessagesList((currentMessages) => [...currentMessages, inputVal]);
   setInputVal("");
 };
  return (
   
      <form className="flex flex-row w-2/5 justify-center  p-2 rounded-full mt-40" onSubmit={handleSubmit}>
    
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
          type="text"
          placeholder="Message ChatGemini..."
          className=" basis-3/4  border-2 border-black rounded-s-full  bg-white h-10 px-5 pr-16  text-sm focus:outline-none"
        ></input>
        <button  type='submit' className="bg-neutral-950 hover:bg-green-700 border border-black rounded-e-full text-white font-bold py px-4 ">
          Send
        </button>
     
      </form>
  
  );
};

export default MessageInput;
