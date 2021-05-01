import React, { useState } from "react";
import axios from "axios";

import "components/chatbot/style.css";
import Messages from "./Messages";

const Chat = props => {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageSubmit = text => {
    const data = {
      text
    };
    

    axios
      .post("http://localhost:5000/api/text_query", data).then(console.log(data))
      .then(response => {
        const responseData = {
          text: response.data.fulfillmentMessages[0].text.text[0] ,
          isBot: true,
         
        };
        console.log(data);
        setResponses(responses => [...responses, responseData]);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  const handleMessageChange = event => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = event => {
    const message = {
      text: currentMessage,
      isBot: false
    };
    if (event.key == "Enter") {
      setResponses(responses => [...responses, message]);
      handleMessageSubmit(message.text);
      setCurrentMessage("");
    }
    
  };

  return (
    <div className="chatSection">
      <div className="botContainer">
        <div className="messagesContainer">
          <Messages messages={responses} />
        </div>

        {/*The input section is 👇*/}
        <div className="inputSection">
          <input
            type="text"
            value={currentMessage}
            onChange={handleMessageChange}
            onKeyDown={handleSubmit}
            placeholder="Say something..."
            className="messageInputField"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;