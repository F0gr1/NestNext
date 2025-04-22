import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/api");
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Error connecting to backend");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Next.js Frontend</h1>
      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <p>Message from backend: {message}</p>
      </div>
    </div>
  );
}
