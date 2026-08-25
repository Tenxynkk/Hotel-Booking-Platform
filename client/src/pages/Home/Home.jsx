import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/health")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Hotel Booking System</h1>

      <p>
        Welcome to our hotel booking application.
      </p>

      <p>
        Backend Status: {message}
      </p>
    </div>
  );
}

export default Home;
