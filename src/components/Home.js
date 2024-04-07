import React from "react";

export default function Home() {
  const username = "Liza";
  const city = "New York";
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
