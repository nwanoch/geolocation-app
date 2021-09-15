import React, { useEffect, useState } from "react";

function Greeting() {
  const [greet, setgreet] = useState("");

  useEffect(() => {
    const getHour = () => {
      const date = new Date();
      const hours = date.getHours();

      if (hours < 12 && hours >= 0) {
        setgreet("Good Morming");
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

// class Greeting extends React.Component {
//   state = {
//     hour: null,
//   }

//   componentDidMount() {
//     this.getHour()
//   }

//   getHour = () => {
//    const date = new Date();
//    const hour = date.getHours()
//    this.setState({
//       hour
//    });
//   }

//   render(){
//     const {hour, username} = this.state;
//     return (
//       <div className='App'>
//         <h2>{hour < 12 ? `Good Morning ${username}` : `Good evening ${username}`}</h2>
//       </div>
//     );
//   }

// }
