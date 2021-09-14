import React, { useEffect, useState } from "react";

function Greeting() {
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const getHour = () => {
      const date = new Date();
      var hours = date.getHours();
      setHour(hours);
    };

    getHour();
    console.log(hour);
  }, [hour]);
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
        {hour <= 11 && hour >=0 ? `Good Morning` : hour >=12 && hour<=16? `Good Afternoon `: `Good evening`}
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
