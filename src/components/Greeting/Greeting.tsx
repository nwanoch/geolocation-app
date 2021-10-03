import React, { useEffect, useState } from "react";

function Greeting() {
  const [greet, setgreet] = useState("");

  useEffect(() => {
    const getHour = () => {
      const date = new Date();
      const hours = date.getHours();

      if (hours < 12 && hours >= 0) {
        setgreet("Good Morning");
      } else if (hours > 11 && hours < 16) {
        setgreet("Good Afternoon");
      } else {
        return setgreet("Good Evening");
      }
    };
    function sayGreeting() {}
    getHour();
    sayGreeting();
  }, []);

  return (
    <div>
      <p
        style={{
          color: "#254159",
          fontSize: "15px",
          fontFamily: "'Helvetica 55 Roman', sans-serif",
          padding: "30px",
        }}
      >
        {greet}
      </p>
    </div>
  );
}

export default Greeting;
