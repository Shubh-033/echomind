import { useState } from "react";
import axios from "axios";

function App() {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [debateLog, setDebateLog] = useState([]);

  const sendMessage = async () => {
    if (!topic || !message) return;
    try {
      const res = await axios.post("http://localhost:5000/api/debate", {
        topic,
        userMessage: message,
      });
      setDebateLog([...debateLog, { user: message, ai: res.data.reply }]);
      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>EchoMind – AI Debate Buddy</h1>
      <input
        placeholder="Enter debate topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: "300px", padding: "5px" }}
      />
      <br /><br />
      <textarea
        placeholder="Your argument"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "300px", height: "100px", padding: "5px" }}
      />
      <br /><br />
      <button onClick={sendMessage} style={{ padding: "10px 20px" }}>
        Debate
      </button>
      <div style={{ marginTop: "20px" }}>
        {debateLog.map((log, i) => (
          <div key={i}>
            <p><b>You:</b> {log.user}</p>
            <p><b>AI:</b> {log.ai}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
