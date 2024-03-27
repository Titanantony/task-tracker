import { axiosInstance } from "./config/axios";
import { useEffect, useState } from "react";
import { Message } from "./components/Msg";
import Header from "./components/Header";

function App() {
  const [message, setMessage] = useState("No message");
  useEffect(() => {
    async function fetchMessage() {
      try {
        const res = await axiosInstance("http://localhost:5000/msg");
        console.log(res.data);
        setMessage(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMessage();
  }, [message]);

  return (
    <div className="container">
      {/* <Message message={message} color={"green"} />
      <Message message="Buy world" color={"blue"} /> */}
      <Header title="Task Tracker" />
    </div>
  );
}

export default App;
