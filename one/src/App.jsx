// import React, { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const canvasRef = useRef(null);
//   const [dotPosition, setDotPosition] = useState({ x: 50, y: 50 });
  
//   const moveDot = (direction) => {

//     setDotPosition((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case 'ArrowUp':
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case 'ArrowDown':
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case 'ArrowLeft':
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case 'ArrowRight':
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       moveDot(e.key);
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
    
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
    
  
//     const draw = () => {
//       ctx.fillStyle = 'green';  
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       ctx.fillStyle = 'red';  
//       ctx.beginPath();
//       ctx.arc(dotPosition.x, dotPosition.y, 10, 0, 2 * Math.PI);  
//       ctx.fill();

//       ctx.fillStyle ="grey";
//       ctx.fillRect(20,20,200,200);
//       ctx.font = "12px serif";
// ctx.textBaseline = "hanging";
// ctx.strokeText("Hello world", 50, 100);
// ctx.fillText("Hello world", 50, 100);


// ctx.fillStyle ="grey";
//       ctx.fillRect(300,20,200,200);
//       ctx.font = "12px serif";
// ctx.textBaseline = "hanging";
// ctx.strokeText("Hello world", 50, 100);
// ctx.fillText("Hello world", 50, 100);



//     };
    
//     draw();
//   }, [dotPosition]);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;


// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "grey";
//       ctx.fillRect(20, 20, 200, 200);
//       ctx.font = "12px serif";
//       ctx.textBaseline = "hanging";
//       ctx.strokeText("Hello world", 50, 100);
//       ctx.fillText("Hello world", 50, 100);

//       ctx.fillStyle = "grey";
//       ctx.fillRect(300, 20, 200, 200);
//       ctx.font = "12px serif";
//       ctx.textBaseline = "hanging";
//       ctx.strokeText("Hello world", 50, 100);
//       ctx.fillText("Hello world", 50, 100);

//       ctx.fillStyle = "grey";
//       ctx.fillRect(600, 20, 200, 200);
//       ctx.font = "12px serif";
//       ctx.textBaseline = "hanging";
//       ctx.strokeText("Hello world", 50, 100);
//       ctx.fillText("Hello world", 50, 100);
//     };

//     draw();
//   }, [redDot, blueDot, orangeDot]);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;






// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });

//   const [redPop, setRedPop] = useState(false);
//   const [bluePop, setBluePop] = useState(false);
//   const [orangePop, setOrangePop] = useState(false);

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const checkSector = (dot, sector) => {
//     return (
//       dot.x > sector.x &&
//       dot.x < sector.x + sector.width &&
//       dot.y > sector.y &&
//       dot.y < sector.y + sector.height
//     );
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const sectors = [
//       { x: 20, y: 20, width: 200, height: 200 },
//       { x: 300, y: 20, width: 200, height: 200 },
//       { x: 600, y: 20, width: 200, height: 200 },
//     ];

//     // Check if dots enter the sectors
//     setRedPop(checkSector(redDot, sectors[0]));
//     setBluePop(checkSector(blueDot, sectors[1]));
//     setOrangePop(checkSector(orangeDot, sectors[2]));

//     const draw = () => {
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw sectors
//       ctx.fillStyle = "grey";
//       sectors.forEach((sector) => {
//         ctx.fillRect(sector.x, sector.y, sector.width, sector.height);
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display pop-up messages
//       if (redPop) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText("Red dot entered Sector 1", redDot.x + 15, redDot.y - 15);
//       }

//       if (bluePop) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText("Blue dot entered Sector 2", blueDot.x + 15, blueDot.y - 15);
//       }

//       if (orangePop) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(
//           "Orange dot entered Sector 3",
//           orangeDot.x + 15,
//           orangeDot.y - 15
//         );
//       }
//     };

//     draw();
//   }, [redDot, blueDot, orangeDot, redPop, bluePop, orangePop]);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;























// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [messages, setMessages] = useState({ red: null, blue: null, orange: null });

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const generateRandomZones = () => {
//     const newZones = Array.from({ length: 5 }, () => ({
//       x: Math.random() * (window.innerWidth - 200),
//       y: Math.random() * (window.innerHeight - 200),
//       width: 100 + Math.random() * 100,
//       height: 100 + Math.random() * 100,
//     }));
//     setZones(newZones);
//   };

//   const checkZone = (dot, zone) => {
//     return (
//       dot.x > zone.x &&
//       dot.x < zone.x + zone.width &&
//       dot.y > zone.y &&
//       dot.y < zone.y + zone.height
//     );
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw zones
//       zones.forEach((zone, index) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
//         ctx.fillStyle = "black";
//         ctx.font = "16px Arial";
//         ctx.fillText(`Zone ${index + 1}`, zone.x + 10, zone.y + 20);
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display pop-up messages
//       if (messages.red) {
//         ctx.fillStyle = "green";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.red, redDot.x + 15, redDot.y - 15);
//       }

//       if (messages.blue) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.blue, blueDot.x + 15, blueDot.y - 15);
//       }

//       if (messages.orange) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.orange, orangeDot.x + 15, orangeDot.y - 15);
//       }
//     };

//     // Update messages when dots enter zones
//     const newMessages = { red: null, blue: null, orange: null };
//     zones.forEach((zone, index) => {
//       if (checkZone(redDot, zone)) newMessages.red = `Red dot entered Zone ${index + 1}`;
//       if (checkZone(blueDot, zone)) newMessages.blue = `Blue dot entered Zone ${index + 1}`;
//       if (checkZone(orangeDot, zone)) newMessages.orange = `Orange dot entered Zone ${index + 1}`;
//     });
//     setMessages(newMessages);

//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     generateRandomZones();
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;























// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [messages, setMessages] = useState({ red: null, blue: null, orange: null });

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const generateRandomZones = () => {
//     return Array.from({ length: 5 }, () => ({
//       x: Math.random() * (window.innerWidth - 200),
//       y: Math.random() * (window.innerHeight - 200),
//       width: 100 + Math.random() * 100,
//       height: 100 + Math.random() * 100,
//     }));
//   };

//   const checkZone = (dot, zone) => {
//     return (
//       dot.x > zone.x &&
//       dot.x < zone.x + zone.width &&
//       dot.y > zone.y &&
//       dot.y < zone.y + zone.height
//     );
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       // Set the background to green
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw zones
//       zones.forEach((zone, index) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
//         ctx.fillStyle = "black";
//         ctx.font = "16px Arial";
//         ctx.fillText(`Zone ${index + 1}`, zone.x + 10, zone.y + 20);
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display pop-up messages
//       if (messages.red) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.red, redDot.x + 15, redDot.y - 15);
//       }

//       if (messages.blue) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.blue, blueDot.x + 15, blueDot.y - 15);
//       }

//       if (messages.orange) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.orange, orangeDot.x + 15, orangeDot.y - 15);
//       }
//     };

//     // Update messages when dots enter zones
//     const newMessages = { red: null, blue: null, orange: null };
//     zones.forEach((zone, index) => {
//       if (checkZone(redDot, zone)) newMessages.red = `Red dot entered Zone ${index + 1}`;
//       if (checkZone(blueDot, zone)) newMessages.blue = `Blue dot entered Zone ${index + 1}`;
//       if (checkZone(orangeDot, zone)) newMessages.orange = `Orange dot entered Zone ${index + 1}`;
//     });
//     setMessages(newMessages);

//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     // Generate zones only once
//     const initialZones = generateRandomZones();
//     setZones(initialZones);
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;







// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [messages, setMessages] = useState({ red: null, blue: null, orange: null });

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   // const generateNonOverlappingZones = () => {
//   //   const zoneSize = 100;
//   //   const zones = [];
//   //   const maxAttempts = 1000;

//   //   for (let i = 0; i < 5; i++) {
//   //     let attempts = 0;
//   //     let newZone;
//   //     let isOverlapping;

//   //     do {
//   //       const x = Math.random() * (window.innerWidth - zoneSize - 20) + 10;
//   //       const y = Math.random() * (window.innerHeight - zoneSize - 20) + 10;
//   //       newZone = { x, y, width: zoneSize, height: zoneSize };

//   //       isOverlapping = zones.some(
//   //         (zone) =>
//   //           newZone.x < zone.x + zone.width &&
//   //           newZone.x + newZone.width > zone.x &&
//   //           newZone.y < zone.y + zone.height &&
//   //           newZone.y + newZone.height > zone.y
//   //       );

//   //       attempts++;
//   //     } while (isOverlapping && attempts < maxAttempts);

//   //     if (attempts < maxAttempts) {
//   //       zones.push(newZone);
//   //     }
//   //   }

//   //   return zones;
//   // };

//   // const checkZone = (dot, zone) => {
//   //   return (
//   //     dot.x > zone.x &&
//   //     dot.x < zone.x + zone.width &&
//   //     dot.y > zone.y &&
//   //     dot.y < zone.y + zone.height
//   //   );
//   // };

//   // useEffect(() => {
//   //   const handleKeyDown = (e) => {
//   //     const key = e.key;
//   //     if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//   //       moveDot(key, setRedDot);
//   //     } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//   //       moveDot(key, setBlueDot);
//   //     } else if (["2", "4", "6", "8"].includes(key)) {
//   //       moveDot(key, setOrangeDot);
//   //     }
//   //   };

//   //   window.addEventListener("keydown", handleKeyDown);

//   //   return () => {
//   //     window.removeEventListener("keydown", handleKeyDown);
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   const canvas = canvasRef.current;
//   //   const ctx = canvas.getContext("2d");
//   //   canvas.width = window.innerWidth;
//   //   canvas.height = window.innerHeight;

//   //   const draw = () => {
//   //     // Set the background to green
//   //     ctx.fillStyle = "green";
//   //     ctx.fillRect(0, 0, canvas.width, canvas.height);

//   //     // Draw zones
//   //     zones.forEach((zone, index) => {
//   //       ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//   //       ctx.fillRect(100, 100, 200, 200);
//   //       ctx.fillStyle = "black";
//   //       ctx.font = "16px Arial";
//   //       ctx.fillText(`Zone ${index + 1}`,  10,  20);
//   //     });

//   //     // Draw dots
//   //     ctx.fillStyle = "red";
//   //     ctx.beginPath();
//   //     ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//   //     ctx.fill();

//   //     ctx.fillStyle = "blue";
//   //     ctx.beginPath();
//   //     ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//   //     ctx.fill();

//   //     ctx.fillStyle = "orange";
//   //     ctx.beginPath();
//   //     ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//   //     ctx.fill();

//   //     // Display pop-up messages
//   //     if (messages.red) {
//   //       ctx.fillStyle = "white";
//   //       ctx.font = "16px Arial";
//   //       ctx.fillText(messages.red, redDot.x + 15, redDot.y - 15);
//   //     }

//   //     if (messages.blue) {
//   //       ctx.fillStyle = "white";
//   //       ctx.font = "16px Arial";
//   //       ctx.fillText(messages.blue, blueDot.x + 15, blueDot.y - 15);
//   //     }

//   //     if (messages.orange) {
//   //       ctx.fillStyle = "white";
//   //       ctx.font = "16px Arial";
//   //       ctx.fillText(messages.orange, orangeDot.x + 15, orangeDot.y - 15);
//   //     }
//   //   };

//   //   // Update messages when dots enter zones
//   //   const newMessages = { red: null, blue: null, orange: null };
//   //   zones.forEach((zone, index) => {
//   //     if (checkZone(redDot, zone)) newMessages.red = `Red dot entered Zone ${index + 1}`;
//   //     if (checkZone(blueDot, zone)) newMessages.blue = `Blue dot entered Zone ${index + 1}`;
//   //     if (checkZone(orangeDot, zone)) newMessages.orange = `Orange dot entered Zone ${index + 1}`;
//   //   });
//   //   setMessages(newMessages);

//   //   draw();
//   // }, [redDot, blueDot, orangeDot, zones]);



//   useEffect(() => {
//     const generateNonOverlappingZones = () => {
//       const zoneSize = 200; // Width and height of each zone
//       const margin = 20; // Space between zones
//       const zones = [];
//       const positions = [
//         { x: margin, y: margin },
//         { x: window.innerWidth - zoneSize - margin, y: margin },
//         { x: margin, y: window.innerHeight - zoneSize - margin },
//         { x: window.innerWidth - zoneSize - margin, y: window.innerHeight - zoneSize - margin },
//         { x: (window.innerWidth - zoneSize) / 2, y: (window.innerHeight - zoneSize) / 2 },
//       ];
  
//       for (let i = 0; i < 5; i++) {
//         zones.push({
//           x: positions[i].x,
//           y: positions[i].y,
//           width: zoneSize,
//           height: zoneSize,
//         });
//       }
  
//       return zones;
//     };
  
//     const initialZones = generateNonOverlappingZones();
//     setZones(initialZones);
//   }, []);
  
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
  
//     const draw = () => {
//       // Set the background to green
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//       // Draw zones
//       zones.forEach((zone, index) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
//         ctx.fillStyle = "black";
//         ctx.font = "16px Arial";
//         ctx.fillText(`Zone ${index + 1}`, zone.x + 10, zone.y + 20);
//       });
  
//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();
  
//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();
  
//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();
  
//       // Display pop-up messages
//       if (messages.red) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.red, redDot.x + 15, redDot.y - 15);
//       }
  
//       if (messages.blue) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.blue, blueDot.x + 15, blueDot.y - 15);
//       }
  
//       if (messages.orange) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.orange, orangeDot.x + 15, orangeDot.y - 15);
//       }
//     };
  
//     // Update messages when dots enter zones
//     const newMessages = { red: null, blue: null, orange: null };
//     zones.forEach((zone, index) => {
//       if (checkZone(redDot, zone)) newMessages.red = `Red dot entered Zone ${index + 1}`;
//       if (checkZone(blueDot, zone)) newMessages.blue = `Blue dot entered Zone ${index + 1}`;
//       if (checkZone(orangeDot, zone)) newMessages.orange = `Orange dot entered Zone ${index + 1}`;
//     });
//     setMessages(newMessages);
  
//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);
  

//   useEffect(() => {
//     // Generate zones only once
//     const initialZones = generateNonOverlappingZones();
//     setZones(initialZones);
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;














// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [messages, setMessages] = useState({ red: null, blue: null, orange: null });

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const generateNonOverlappingZones = () => {
//     const zoneSize = 200; // Width and height of each zone
//     const margin = 20; // Space between zones
//     const positions = [
//       { x: margin, y: margin },
//       { x: window.innerWidth - zoneSize - margin, y: margin },
//       { x: margin, y: window.innerHeight - zoneSize - margin },
//       { x: window.innerWidth - zoneSize - margin, y: window.innerHeight - zoneSize - margin },
//       { x: (window.innerWidth - zoneSize) / 2, y: (window.innerHeight - zoneSize) / 2 },
//     ];

//     return positions.map((pos) => ({
//       ...pos,
//       width: zoneSize,
//       height: zoneSize,
//     }));
//   };

//   const checkZone = (dot, zone) => {
//     return (
//       dot.x > zone.x &&
//       dot.x < zone.x + zone.width &&
//       dot.y > zone.y &&
//       dot.y < zone.y + zone.height
//     );
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       // Set the background to green
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw zones
//       zones.forEach((zone, index) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
//         ctx.fillStyle = "black";
//         ctx.font = "16px Arial";
//         ctx.fillText(`Zone ${index + 1}`, zone.x + 10, zone.y + 20);
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display pop-up messages
//       if (messages.red) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.red, redDot.x + 15, redDot.y - 15);
//       }

//       if (messages.blue) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.blue, blueDot.x + 15, blueDot.y - 15);
//       }

//       if (messages.orange) {
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.fillText(messages.orange, orangeDot.x + 15, orangeDot.y - 15);
//       }
//     };

//     // Update messages when dots enter zones
//     const newMessages = { red: null, blue: null, orange: null };
//     zones.forEach((zone, index) => {
//       if (checkZone(redDot, zone)) newMessages.red = `Red dot entered Zone ${index + 1}`;
//       if (checkZone(blueDot, zone)) newMessages.blue = `Blue dot entered Zone ${index + 1}`;
//       if (checkZone(orangeDot, zone)) newMessages.orange = `Orange dot entered Zone ${index + 1}`;
//     });
//     setMessages(newMessages);

//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     // Generate zones only once
//     const initialZones = generateNonOverlappingZones();
//     setZones(initialZones);
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;


















// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
//   const maxTemperature = 100;

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const generateZonesWithHeatSources = () => {
//     const zoneSize = 200;
//     const margin = 20;
//     const positions = [
//       { x: margin, y: margin },
//       { x: window.innerWidth - zoneSize - margin, y: margin },
//       { x: margin, y: window.innerHeight - zoneSize - margin },
//       { x: window.innerWidth - zoneSize - margin, y: window.innerHeight - zoneSize - margin },
//       { x: (window.innerWidth - zoneSize) / 2, y: (window.innerHeight - zoneSize) / 2 },
//     ];

//     return positions.map((pos) => ({
//       ...pos,
//       width: zoneSize,
//       height: zoneSize,
//       heatSource: { x: pos.x + 20, y: pos.y + 20 }, // Heat source in the top-left corner of the zone
//     }));
//   };

//   const calculateTemperature = (dot, heatSource) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
//     );
//     const maxDistance = 150; // Maximum effective range for heat radiation
//     const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
//     return Math.min(maxTemperature, temperature);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       // Set the background
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw zones and heat sources
//       zones.forEach((zone, index) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
//         ctx.fill();
        
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display temperatures
//       ctx.fillStyle = "white";
//       ctx.font = "16px Arial";
//       ctx.fillText(`Red Dot Temp: ${temperatures.red.toFixed(1)}°C`, redDot.x + 15, redDot.y - 15);
//       ctx.fillText(`Blue Dot Temp: ${temperatures.blue.toFixed(1)}°C`, blueDot.x + 15, blueDot.y - 15);
//       ctx.fillText(
//         `Orange Dot Temp: ${temperatures.orange.toFixed(1)}°C`,
//         orangeDot.x + 15,
//         orangeDot.y - 15
//       );
//     };

//     // Calculate temperatures
//     const newTemperatures = {
//       red: 0,
//       blue: 0,
//       orange: 0,
//     };

//     zones.forEach((zone) => {
//       newTemperatures.red = Math.max(
//         newTemperatures.red,
//         calculateTemperature(redDot, zone.heatSource)
//       );
//       newTemperatures.blue = Math.max(
//         newTemperatures.blue,
//         calculateTemperature(blueDot, zone.heatSource)
//       );
//       newTemperatures.orange = Math.max(
//         newTemperatures.orange,
//         calculateTemperature(orangeDot, zone.heatSource)
//       );
//     });

//     setTemperatures(newTemperatures);
//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     const initialZones = generateZonesWithHeatSources();
//     setZones(initialZones);
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;















































// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
//   const maxTemperature = 100;

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const generateZonesWithHeatSources = () => {
//     const radius = 100;
//     const margin = 50;
//     const positions = [
//       { x: margin + radius, y: margin + radius },
//       { x: window.innerWidth - radius - margin, y: margin + radius },
//       { x: margin + radius, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth - radius - margin, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth / 2, y: window.innerHeight / 2 },
//     ];

//     return positions.map((pos, index) => ({
//       ...pos,
//       radius,
//       name: `Zone ${index + 1}`,
//       heatSource: { x: pos.x, y: pos.y }, // Heat source at the center of the zone
//     }));
//   };

//   const calculateTemperature = (dot, heatSource) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
//     );
//     const maxDistance = 150; // Maximum effective range for heat radiation
//     const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
//     return Math.min(maxTemperature, temperature);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       // Set the background
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw zones and heat sources
//       zones.forEach((zone) => {
//         // Draw circular zone
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.beginPath();
//         ctx.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI);
//         ctx.fill();

//         // Draw heat source
//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
//         ctx.fill();

//         // Draw zone label
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.textAlign = "center";
//         ctx.fillText(zone.name, zone.x, zone.y + zone.radius + 20);
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display temperatures
//       ctx.fillStyle = "white";
//       ctx.font = "16px Arial";
//       ctx.fillText(`Red Dot Temp: ${temperatures.red.toFixed(1)}°C`, redDot.x + 15, redDot.y - 15);
//       ctx.fillText(`Blue Dot Temp: ${temperatures.blue.toFixed(1)}°C`, blueDot.x + 15, blueDot.y - 15);
//       ctx.fillText(
//         `Orange Dot Temp: ${temperatures.orange.toFixed(1)}°C`,
//         orangeDot.x + 15,
//         orangeDot.y - 15
//       );
//     };

//     // Calculate temperatures
//     const newTemperatures = {
//       red: 0,
//       blue: 0,
//       orange: 0,
//     };

//     zones.forEach((zone) => {
//       newTemperatures.red = Math.max(
//         newTemperatures.red,
//         calculateTemperature(redDot, zone.heatSource)
//       );
//       newTemperatures.blue = Math.max(
//         newTemperatures.blue,
//         calculateTemperature(blueDot, zone.heatSource)
//       );
//       newTemperatures.orange = Math.max(
//         newTemperatures.orange,
//         calculateTemperature(orangeDot, zone.heatSource)
//       );
//     });

//     setTemperatures(newTemperatures);
//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     const initialZones = generateZonesWithHeatSources();
//     setZones(initialZones);
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;















// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
//   const maxTemperature = 100;

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const generateZonesWithHeatSources = () => {
//     const radius = 100;
//     const margin = 50;
//     const positions = [
//       { x: margin + radius, y: margin + radius },
//       { x: window.innerWidth - radius - margin, y: margin + radius },
//       { x: margin + radius, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth - radius - margin, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth / 2, y: window.innerHeight / 2 },
//     ];

//     return positions.map((pos, index) => ({
//       ...pos,
//       radius,
//       name: `Zone ${index + 1}`,
//       heatSource: { x: pos.x, y: pos.y }, // Heat source at the center of the zone
//     }));
//   };

//   const calculateTemperature = (dot, heatSource) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
//     );
//     const maxDistance = 150; // Maximum effective range for heat radiation
//     const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
//     return Math.min(maxTemperature, temperature);
//   };

//   const checkDotInZones = (dot, zones) => {
//     const overlappingZones = zones.filter(
//       (zone) => Math.sqrt(Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)) <= zone.radius
//     );
//     return overlappingZones.map((zone) => zone.name);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       // Set the background
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw zones and heat sources
//       zones.forEach((zone) => {
//         // Draw circular zone
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.beginPath();
//         ctx.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI);
//         ctx.fill();

//         // Draw heat source
//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
//         ctx.fill();

//         // Draw zone label
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.textAlign = "center";
//         ctx.fillText(zone.name, zone.x, zone.y + zone.radius + 20);
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display temperatures
//       ctx.fillStyle = "white";
//       ctx.font = "16px Arial";
//       ctx.fillText(`Red Dot Temp: ${temperatures.red.toFixed(1)}°C`, redDot.x + 15, redDot.y - 15);
//       ctx.fillText(`Blue Dot Temp: ${temperatures.blue.toFixed(1)}°C`, blueDot.x + 15, blueDot.y - 15);
//       ctx.fillText(
//         `Orange Dot Temp: ${temperatures.orange.toFixed(1)}°C`,
//         orangeDot.x + 15,
//         orangeDot.y - 15
//       );
//     };

//     // Calculate temperatures
//     const newTemperatures = {
//       red: 0,
//       blue: 0,
//       orange: 0,
//     };

//     zones.forEach((zone) => {
//       newTemperatures.red = Math.max(
//         newTemperatures.red,
//         calculateTemperature(redDot, zone.heatSource)
//       );
//       newTemperatures.blue = Math.max(
//         newTemperatures.blue,
//         calculateTemperature(blueDot, zone.heatSource)
//       );
//       newTemperatures.orange = Math.max(
//         newTemperatures.orange,
//         calculateTemperature(orangeDot, zone.heatSource)
//       );
//     });

//     setTemperatures(newTemperatures);

//     // Check for temperature threshold and alert
//     // if (newTemperatures.red > 70) alert("Red dot temperature exceeded 70°C!");
//     // if (newTemperatures.blue > 70) alert("Blue dot temperature exceeded 70°C!");
//     // if (newTemperatures.orange > 70) alert("Orange dot temperature exceeded 70°C!");

//     // Check for dots within multiple zones and log to console
//     const orangeZones = checkDotInZones(orangeDot, zones);
//     if (orangeZones.length > 1) {
//       console.log(`Orange dot is in zones: ${orangeZones.join(", ")}`);
//     }

//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     const initialZones = generateZonesWithHeatSources();
//     setZones(initialZones);
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;










































// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
//   const [alertTimers, setAlertTimers] = useState({
//     red: null,
//     blue: null,
//     orange: null,
//   });
//   const maxTemperature = 100;

//   const moveDot = (direction, dotSetter) => {
//     dotSetter((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//         case "8":
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case "ArrowDown":
//         case "s":
//         case "S":
//         case "2":
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case "ArrowLeft":
//         case "a":
//         case "A":
//         case "4":
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case "ArrowRight":
//         case "d":
//         case "D":
//         case "6":
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const generateZonesWithHeatSources = () => {
//     const radius = 100;
//     const margin = 50;
//     const positions = [
//       { x: margin + radius, y: margin + radius },
//       { x: window.innerWidth - radius - margin, y: margin + radius },
//       { x: margin + radius, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth - radius - margin, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth / 2, y: window.innerHeight / 2 },
//     ];

//     return positions.map((pos, index) => ({
//       ...pos,
//       radius,
//       name: `Zone ${index + 1}`,
//       heatSource: { x: pos.x, y: pos.y }, // Heat source at the center of the zone
//     }));
//   };

//   const calculateTemperature = (dot, heatSource) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
//     );
//     const maxDistance = 150; // Maximum effective range for heat radiation
//     const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
//     return Math.min(maxTemperature, temperature);
//   };

//   const checkTemperatureThreshold = (dotKey, temperature) => {
//     if (temperature > 70) {
//       if (!alertTimers[dotKey]) {
//         const timer = setTimeout(() => {
//           alert(`${dotKey.charAt(0).toUpperCase() + dotKey.slice(1)} dot temperature exceeded 70°C for 30 seconds!`);
//           setAlertTimers((prev) => ({ ...prev, [dotKey]: null }));
//         }, 30000); // 30 seconds

//         setAlertTimers((prev) => ({ ...prev, [dotKey]: timer }));
//       }
//     } else {
//       if (alertTimers[dotKey]) {
//         clearTimeout(alertTimers[dotKey]);
//         setAlertTimers((prev) => ({ ...prev, [dotKey]: null }));
//       }
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const key = e.key;
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
//         moveDot(key, setRedDot);
//       } else if (["w", "a", "s", "d", "W", "A", "S", "D"].includes(key)) {
//         moveDot(key, setBlueDot);
//       } else if (["2", "4", "6", "8"].includes(key)) {
//         moveDot(key, setOrangeDot);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       // Set the background
//       ctx.fillStyle = "green";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw zones and heat sources
//       zones.forEach((zone) => {
//         // Draw circular zone
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.beginPath();
//         ctx.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI);
//         ctx.fill();

//         // Draw heat source
//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
//         ctx.fill();

//         // Draw zone label
//         ctx.fillStyle = "white";
//         ctx.font = "16px Arial";
//         ctx.textAlign = "center";
//         ctx.fillText(zone.name, zone.x, zone.y + zone.radius + 20);
//       });

//       // Draw dots
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       // Display temperatures
//       ctx.fillStyle = "white";
//       ctx.font = "16px Arial";
//       ctx.fillText(`Red Dot Temp: ${temperatures.red.toFixed(1)}°C`, redDot.x + 15, redDot.y - 15);
//       ctx.fillText(`Blue Dot Temp: ${temperatures.blue.toFixed(1)}°C`, blueDot.x + 15, blueDot.y - 15);
//       ctx.fillText(
//         `Orange Dot Temp: ${temperatures.orange.toFixed(1)}°C`,
//         orangeDot.x + 15,
//         orangeDot.y - 15
//       );
//     };

//     // Calculate temperatures
//     const newTemperatures = {
//       red: 0,
//       blue: 0,
//       orange: 0,
//     };

//     zones.forEach((zone) => {
//       newTemperatures.red = Math.max(
//         newTemperatures.red,
//         calculateTemperature(redDot, zone.heatSource)
//       );
//       newTemperatures.blue = Math.max(
//         newTemperatures.blue,
//         calculateTemperature(blueDot, zone.heatSource)
//       );
//       newTemperatures.orange = Math.max(
//         newTemperatures.orange,
//         calculateTemperature(orangeDot, zone.heatSource)
//       );
//     });

//     setTemperatures(newTemperatures);

//     checkTemperatureThreshold("red", newTemperatures.red);
//     checkTemperatureThreshold("blue", newTemperatures.blue);
//     checkTemperatureThreshold("orange", newTemperatures.orange);

//     draw();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     const initialZones = generateZonesWithHeatSources();
//     setZones(initialZones);
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;



















// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
//   const maxTemperature = 100;

//   const generateZonesWithHeatSources = () => {
//     const radius = 100;
//     const margin = 50;
//     const positions = [
//       { x: margin + radius, y: margin + radius },
//       { x: window.innerWidth - radius - margin, y: margin + radius },
//       { x: margin + radius, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth - radius - margin, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth / 2, y: window.innerHeight / 2 },
//     ];

//     return positions.map((pos, index) => ({
//       ...pos,
//       radius,
//       name: `Zone ${index + 1}`,
//       heatSource: { x: pos.x, y: pos.y },
//     }));
//   };

//   const calculateTemperature = (dot, heatSource) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
//     );
//     const maxDistance = 150;
//     const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
//     return Math.min(maxTemperature, temperature);
//   };

//   const isDotInZone = (dot, zone) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)
//     );
//     return distance <= zone.radius;
//   };

//   const getNearestZones = (dot) => {
//     const sortedZones = zones
//       .map((zone) => ({
//         name: zone.name,
//         distance: Math.sqrt(Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)),
//       }))
//       .sort((a, b) => a.distance - b.distance);
//     return sortedZones.slice(0, 3).map((zone) => zone.name);
//   };

//   const logNearestZones = () => {
//     const redZones = getNearestZones(redDot);
//     const blueZones = getNearestZones(blueDot);
//     const orangeZones = getNearestZones(orangeDot);

//     console.log(`Red Dot nearest zones: ${redZones.join(", ")}`);
//     console.log(`Blue Dot nearest zones: ${blueZones.join(", ")}`);
//     console.log(`Orange Dot nearest zones: ${orangeZones.join(", ")}`);
//   };

//   const drawTemperaturePopup = (ctx, dot, temperature, color) => {
//     const popupWidth = 80;
//     const popupHeight = 30;
//     const popupX = dot.x + 15;
//     const popupY = dot.y - 40;

//     ctx.fillStyle = "white";
//     ctx.fillRect(popupX, popupY, popupWidth, popupHeight);

//     ctx.strokeStyle = color;
//     ctx.strokeRect(popupX, popupY, popupWidth, popupHeight);

//     ctx.fillStyle = "black";
//     ctx.font = "14px Arial";
//     ctx.textAlign = "center";
//     ctx.fillText(`${temperature.toFixed(1)}°C`, popupX + popupWidth / 2, popupY + popupHeight / 2 + 5);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       ctx.fillStyle = "green";
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       zones.forEach((zone) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.beginPath();
//         ctx.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.fillStyle = "black";
//         ctx.font = "16px Arial";
//         ctx.textAlign = "center";
//         ctx.fillText(zone.name, zone.x, zone.y + zone.radius + 20);
//       });

//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, redDot, temperatures.red, "red");

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, blueDot, temperatures.blue, "blue");

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, orangeDot, temperatures.orange, "orange");
//     };

//     const newTemperatures = {
//       red: 0,
//       blue: 0,
//       orange: 0,
//     };

//     zones.forEach((zone) => {
//       newTemperatures.red = Math.max(
//         newTemperatures.red,
//         calculateTemperature(redDot, zone.heatSource)
//       );
//       newTemperatures.blue = Math.max(
//         newTemperatures.blue,
//         calculateTemperature(blueDot, zone.heatSource)
//       );
//       newTemperatures.orange = Math.max(
//         newTemperatures.orange,
//         calculateTemperature(orangeDot, zone.heatSource)
//       );
//     });

//     setTemperatures(newTemperatures);

//     draw();
//     logNearestZones();
//   }, [redDot, blueDot, orangeDot, zones]);

//   useEffect(() => {
//     const initialZones = generateZonesWithHeatSources();
//     setZones(initialZones);
//   }, []);

//   const handleKeyDown = (e) => {
//     const speed = 5;

//     switch (e.key) {
//       case "ArrowUp":
//         setRedDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "ArrowDown":
//         setRedDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "ArrowLeft":
//         setRedDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "ArrowRight":
//         setRedDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       case "w":
//       case "W":
//         setBlueDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "s":
//       case "S":
//         setBlueDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "a":
//       case "A":
//         setBlueDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "d":
//       case "D":
//         setBlueDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       case "8":
//         setOrangeDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "2":
//         setOrangeDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "4":
//         setOrangeDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "6":
//         setOrangeDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;

































// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
//   const [redDotTime, setRedDotTime] = useState(0);
//   const [blueDotTime, setBlueDotTime] = useState(0);
//   const [orangeDotTime, setOrangeDotTime] = useState(0);
//   const maxTemperature = 100;
//   const warningThreshold = 70; // 70°C for alert
//   const timeThreshold = 20000; // 20 seconds in milliseconds

//   const generateZonesWithHeatSources = () => {
//     const radius = 100;
//     const margin = 50;
//     const positions = [
//       { x: margin + radius, y: margin + radius },
//       { x: window.innerWidth - radius - margin, y: margin + radius },
//       { x: margin + radius, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth - radius - margin, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth / 2, y: window.innerHeight / 2 },
//     ];

//     return positions.map((pos, index) => ({
//       ...pos,
//       radius,
//       name: `Zone ${index + 1}`,
//       heatSource: { x: pos.x, y: pos.y },
//     }));
//   };

//   const calculateTemperature = (dot, heatSource) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
//     );
//     const maxDistance = 150;
//     const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
//     return Math.min(maxTemperature, temperature);
//   };

//   const isDotInZone = (dot, zone) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)
//     );
//     return distance <= zone.radius;
//   };

//   const getNearestZones = (dot) => {
//     const sortedZones = zones
//       .map((zone) => ({
//         name: zone.name,
//         distance: Math.sqrt(Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)),
//       }))
//       .sort((a, b) => a.distance - b.distance);
//     return sortedZones.slice(0, 3).map((zone) => zone.name);
//   };

//   const logNearestZones = () => {
//     const redZones = getNearestZones(redDot);
//     const blueZones = getNearestZones(blueDot);
//     const orangeZones = getNearestZones(orangeDot);

//     console.log(`Red Dot nearest zones: ${redZones.join(", ")}`);
//     console.log(`Blue Dot nearest zones: ${blueZones.join(", ")}`);
//     console.log(`Orange Dot nearest zones: ${orangeZones.join(", ")}`);
//   };

//   const drawTemperaturePopup = (ctx, dot, temperature, color) => {
//     const popupWidth = 80;
//     const popupHeight = 30;
//     const popupX = dot.x + 15;
//     const popupY = dot.y - 40;

//     ctx.fillStyle = "white";
//     ctx.fillRect(popupX, popupY, popupWidth, popupHeight);

//     ctx.strokeStyle = color;
//     ctx.strokeRect(popupX, popupY, popupWidth, popupHeight);

//     ctx.fillStyle = "black";
//     ctx.font = "14px Arial";
//     ctx.textAlign = "center";
//     ctx.fillText(`${temperature.toFixed(1)}°C`, popupX + popupWidth / 2, popupY + popupHeight / 2 + 5);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       ctx.fillStyle = "green";
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       zones.forEach((zone) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.beginPath();
//         ctx.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.fillStyle = "black";
//         ctx.font = "16px Arial";
//         ctx.textAlign = "center";
//         ctx.fillText(zone.name, zone.x, zone.y + zone.radius + 20);
//       });

//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, redDot, temperatures.red, "red");

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, blueDot, temperatures.blue, "blue");

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, orangeDot, temperatures.orange, "orange");
//     };

//     const newTemperatures = {
//       red: 0,
//       blue: 0,
//       orange: 0,
//     };

//     zones.forEach((zone) => {
//       newTemperatures.red = Math.max(
//         newTemperatures.red,
//         calculateTemperature(redDot, zone.heatSource)
//       );
//       newTemperatures.blue = Math.max(
//         newTemperatures.blue,
//         calculateTemperature(blueDot, zone.heatSource)
//       );
//       newTemperatures.orange = Math.max(
//         newTemperatures.orange,
//         calculateTemperature(orangeDot, zone.heatSource)
//       );
//     });

//     setTemperatures(newTemperatures);

//     draw();
//     logNearestZones();

//     // Check if temperature exceeds threshold and track time
//     if (newTemperatures.red > warningThreshold) {
//       setRedDotTime((prev) => prev + 1000); // Increment by 1 second
//     } else {
//       setRedDotTime(0);
//     }

//     if (newTemperatures.blue > warningThreshold) {
//       setBlueDotTime((prev) => prev + 1000); // Increment by 1 second
//     } else {
//       setBlueDotTime(0);
//     }

//     if (newTemperatures.orange > warningThreshold) {
//       setOrangeDotTime((prev) => prev + 1000); // Increment by 1 second
//     } else {
//       setOrangeDotTime(0);
//     }

//     // Check if any dot exceeds 70°C for 20 seconds
//     if (redDotTime >= timeThreshold) {
//       alert("Red dot has been in 70°C for 20 seconds!");
//       setRedDotTime(0); // Reset timer after alert
//     }

//     if (blueDotTime >= timeThreshold) {
//       alert("Blue dot has been in 70°C for 20 seconds!");
//       setBlueDotTime(0); // Reset timer after alert
//     }

//     if (orangeDotTime >= timeThreshold) {
//       alert("Orange dot has been in 70°C for 20 seconds!");
//       setOrangeDotTime(0); // Reset timer after alert
//     }

//   }, [redDot, blueDot, orangeDot, zones, redDotTime, blueDotTime, orangeDotTime]);

//   useEffect(() => {
//     const initialZones = generateZonesWithHeatSources();
//     setZones(initialZones);
//   }, []);

//   const handleKeyDown = (e) => {
//     const speed = 5;

//     switch (e.key) {
//       case "ArrowUp":
//         setRedDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "ArrowDown":
//         setRedDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "ArrowLeft":
//         setRedDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "ArrowRight":
//         setRedDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       case "w":
//       case "W":
//         setBlueDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "s":
//       case "S":
//         setBlueDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "a":
//       case "A":
//         setBlueDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "d":
//       case "D":
//         setBlueDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       case "8":
//         setOrangeDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "2":
//         setOrangeDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "4":
//         setOrangeDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "6":
//         setOrangeDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;






















// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const canvasRef = useRef(null);
//   const [redDot, setRedDot] = useState({ x: 50, y: 50 });
//   const [blueDot, setBlueDot] = useState({ x: 150, y: 150 });
//   const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250 });
//   const [zones, setZones] = useState([]);
//   const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
//   const [redDotTime, setRedDotTime] = useState(0);
//   const [blueDotTime, setBlueDotTime] = useState(0);
//   const [orangeDotTime, setOrangeDotTime] = useState(0);
//   const maxTemperature = 100;
//   const warningThreshold = 70; // 70°C for alert
//   const timeThreshold = 20000; // 20 seconds in milliseconds

//   const generateZonesWithHeatSources = () => {
//     const radius = 100;
//     const margin = 50;
//     const positions = [
//       { x: margin + radius, y: margin + radius },
//       { x: window.innerWidth - radius - margin, y: margin + radius },
//       { x: margin + radius, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth - radius - margin, y: window.innerHeight - radius - margin },
//       { x: window.innerWidth / 2, y: window.innerHeight / 2 },
//     ];

//     return positions.map((pos, index) => ({
//       ...pos,
//       radius,
//       name: `Zone ${index + 1}`,
//       heatSource: { x: pos.x, y: pos.y },
//     }));
//   };

//   const calculateTemperature = (dot, heatSource) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
//     );
//     const maxDistance = 150;
//     const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
//     return Math.min(maxTemperature, temperature);
//   };

//   const isDotInZone = (dot, zone) => {
//     const distance = Math.sqrt(
//       Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)
//     );
//     return distance <= zone.radius;
//   };

//   const getNearestZones = (dot) => {
//     const sortedZones = zones
//       .map((zone) => ({
//         name: zone.name,
//         distance: Math.sqrt(Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)),
//       }))
//       .sort((a, b) => a.distance - b.distance);
//     return sortedZones.slice(0, 3).map((zone) => zone.name);
//   };

//   const logNearestZones = () => {
//     const redZones = getNearestZones(redDot);
//     const blueZones = getNearestZones(blueDot);
//     const orangeZones = getNearestZones(orangeDot);

//     console.log(`Red Dot nearest zones: ${redZones.join(", ")}`);
//     console.log(`Blue Dot nearest zones: ${blueZones.join(", ")}`);
//     console.log(`Orange Dot nearest zones: ${orangeZones.join(", ")}`);
//   };

//   const drawTemperaturePopup = (ctx, dot, temperature, color) => {
//     const popupWidth = 80;
//     const popupHeight = 30;
//     const popupX = dot.x + 15;
//     const popupY = dot.y - 40;

//     ctx.fillStyle = "white";
//     ctx.fillRect(popupX, popupY, popupWidth, popupHeight);

//     ctx.strokeStyle = color;
//     ctx.strokeRect(popupX, popupY, popupWidth, popupHeight);

//     ctx.fillStyle = "black";
//     ctx.font = "14px Arial";
//     ctx.textAlign = "center";
//     ctx.fillText(`${temperature.toFixed(1)}°C`, popupX + popupWidth / 2, popupY + popupHeight / 2 + 5);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       ctx.fillStyle = "green";
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       zones.forEach((zone) => {
//         ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
//         ctx.beginPath();
//         ctx.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.fillStyle = "black";
//         ctx.font = "16px Arial";
//         ctx.textAlign = "center";
//         ctx.fillText(zone.name, zone.x, zone.y + zone.radius + 20);
//       });

//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, redDot, temperatures.red, "red");

//       ctx.fillStyle = "blue";
//       ctx.beginPath();
//       ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, blueDot, temperatures.blue, "blue");

//       ctx.fillStyle = "orange";
//       ctx.beginPath();
//       ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

//       drawTemperaturePopup(ctx, orangeDot, temperatures.orange, "orange");
//     };

//     const newTemperatures = {
//       red: 0,
//       blue: 0,
//       orange: 0,
//     };

//     zones.forEach((zone) => {
//       newTemperatures.red = Math.max(
//         newTemperatures.red,
//         calculateTemperature(redDot, zone.heatSource)
//       );
//       newTemperatures.blue = Math.max(
//         newTemperatures.blue,
//         calculateTemperature(blueDot, zone.heatSource)
//       );
//       newTemperatures.orange = Math.max(
//         newTemperatures.orange,
//         calculateTemperature(orangeDot, zone.heatSource)
//       );
//     });

//     setTemperatures(newTemperatures);

//     draw();
//     logNearestZones();


//   }, [redDot, blueDot, orangeDot, zones, redDotTime, blueDotTime, orangeDotTime]);

//   useEffect(() => {
//     const initialZones = generateZonesWithHeatSources();
//     setZones(initialZones);
//   }, []);

//   const handleKeyDown = (e) => {
//     const speed = 5;

//     switch (e.key) {
//       case "ArrowUp":
//         setRedDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "ArrowDown":
//         setRedDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "ArrowLeft":
//         setRedDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "ArrowRight":
//         setRedDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       case "w":
//       case "W":
//         setBlueDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "s":
//       case "S":
//         setBlueDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "a":
//       case "A":
//         setBlueDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "d":
//       case "D":
//         setBlueDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       case "8":
//         setOrangeDot((prev) => ({ ...prev, y: prev.y - speed }));
//         break;
//       case "2":
//         setOrangeDot((prev) => ({ ...prev, y: prev.y + speed }));
//         break;
//       case "4":
//         setOrangeDot((prev) => ({ ...prev, x: prev.x - speed }));
//         break;
//       case "6":
//         setOrangeDot((prev) => ({ ...prev, x: prev.x + speed }));
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;















import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const canvasRef = useRef(null);
  const [redDot, setRedDot] = useState({ x: 50, y: 50, score: 0 });
  const [blueDot, setBlueDot] = useState({ x: 150, y: 150, score: 0 });
  const [orangeDot, setOrangeDot] = useState({ x: 250, y: 250, score: 0 });
  const [zones, setZones] = useState([]);
  const [temperatures, setTemperatures] = useState({ red: 0, blue: 0, orange: 0 });
  const [helmetOn, setHelmetOn] = useState(false); 
  const [vestOn, setVestOn] = useState(false); 
  const maxTemperature = 100;

  const generateZonesWithHeatSources = () => {
    const radius = 100;
    const margin = 50;
    const positions = [
      { x: margin + radius, y: margin + radius },
      { x: window.innerWidth - radius - margin, y: margin + radius },
      { x: margin + radius, y: window.innerHeight - radius - margin },
      { x: window.innerWidth - radius - margin, y: window.innerHeight - radius - margin },
      { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    ];

    return positions.map((pos, index) => ({
      ...pos,
      radius,
      name: `Zone ${index + 1}`,
      heatSource: { x: pos.x, y: pos.y },
    }));
  };

  const calculateTemperature = (dot, heatSource) => {
    const distance = Math.sqrt(
      Math.pow(dot.x - heatSource.x, 2) + Math.pow(dot.y - heatSource.y, 2)
    );
    const maxDistance = 150;
    const temperature = Math.max(0, maxTemperature - (distance / maxDistance) * maxTemperature);
    return Math.min(maxTemperature, temperature);
  };

  const isDotInZone = (dot, zone) => {
    const distance = Math.sqrt(
      Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)
    );
    return distance <= zone.radius;
  };

  const getNearestZones = (dot) => {
    const sortedZones = zones
      .map((zone) => ({
        name: zone.name,
        distance: Math.sqrt(Math.pow(dot.x - zone.x, 2) + Math.pow(dot.y - zone.y, 2)),
      }))
      .sort((a, b) => a.distance - b.distance);
    return sortedZones.slice(0, 3).map((zone) => zone.name);
  };

  const logNearestZones = () => {
    const redZones = getNearestZones(redDot);
    const blueZones = getNearestZones(blueDot);
    const orangeZones = getNearestZones(orangeDot);

    console.log(`Red Dot nearest zones: ${redZones.join(", ")}`);
    console.log(`Blue Dot nearest zones: ${blueZones.join(", ")}`);
    console.log(`Orange Dot nearest zones: ${orangeZones.join(", ")}`);
  };

  const drawTemperaturePopup = (ctx, dot, temperature, color) => {
    const popupWidth = 80;
    const popupHeight = 30;
    const popupX = dot.x + 15;
    const popupY = dot.y - 40;

    ctx.fillStyle = "white";
    ctx.fillRect(popupX, popupY, popupWidth, popupHeight);

    ctx.strokeStyle = color;
    ctx.strokeRect(popupX, popupY, popupWidth, popupHeight);

    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`${temperature.toFixed(1)}°C`, popupX + popupWidth / 2, popupY + popupHeight / 2 + 5);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.fillStyle = "green";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      zones.forEach((zone) => {
        ctx.fillStyle = `rgba(128, 128, 128, 0.5)`;
        ctx.beginPath();
        ctx.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(zone.heatSource.x, zone.heatSource.y, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(zone.name, zone.x, zone.y + zone.radius + 20);
      });

      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(redDot.x, redDot.y, 10, 0, 2 * Math.PI);
      ctx.fill();

      drawTemperaturePopup(ctx, redDot, temperatures.red, "red");

      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(blueDot.x, blueDot.y, 10, 0, 2 * Math.PI);
      ctx.fill();

      drawTemperaturePopup(ctx, blueDot, temperatures.blue, "blue");

      ctx.fillStyle = "orange";
      ctx.beginPath();
      ctx.arc(orangeDot.x, orangeDot.y, 10, 0, 2 * Math.PI);
      ctx.fill();

      drawTemperaturePopup(ctx, orangeDot, temperatures.orange, "orange");
    };

    const newTemperatures = {
      red: 0,
      blue: 0,
      orange: 0,
    };

    zones.forEach((zone) => {
      newTemperatures.red = Math.max(
        newTemperatures.red,
        calculateTemperature(redDot, zone.heatSource)
      );
      newTemperatures.blue = Math.max(
        newTemperatures.blue,
        calculateTemperature(blueDot, zone.heatSource)
      );
      newTemperatures.orange = Math.max(
        newTemperatures.orange,
        calculateTemperature(orangeDot, zone.heatSource)
      );
    });

    setTemperatures(newTemperatures);

    draw();
    logNearestZones();

  }, [redDot, blueDot, orangeDot, zones]);

  useEffect(() => {
    const initialZones = generateZonesWithHeatSources();
    setZones(initialZones);
  }, []);

  const handleKeyDown = (e) => {
    const speed = 5;

    switch (e.key) {
      case "ArrowUp":
        setRedDot((prev) => ({ ...prev, y: prev.y - speed }));
        break;
      case "ArrowDown":
        setRedDot((prev) => ({ ...prev, y: prev.y + speed }));
        break;
      case "ArrowLeft":
        setRedDot((prev) => ({ ...prev, x: prev.x - speed }));
        break;
      case "ArrowRight":
        setRedDot((prev) => ({ ...prev, x: prev.x + speed }));
        break;
      case "w":
      case "W":
        setBlueDot((prev) => ({ ...prev, y: prev.y - speed }));
        break;
      case "s":
      case "S":
        setBlueDot((prev) => ({ ...prev, y: prev.y + speed }));
        break;
      case "a":
      case "A":
        setBlueDot((prev) => ({ ...prev, x: prev.x - speed }));
        break;
      case "d":
      case "D":
        setBlueDot((prev) => ({ ...prev, x: prev.x + speed }));
        break;
      case "8":
        setOrangeDot((prev) => ({ ...prev, y: prev.y - speed }));
        break;
      case "2":
        setOrangeDot((prev) => ({ ...prev, y: prev.y + speed }));
        break;
      case "4":
        setOrangeDot((prev) => ({ ...prev, x: prev.x - speed }));
        break;
      case "6":
        setOrangeDot((prev) => ({ ...prev, x: prev.x + speed }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const updateScore = (dot, helmetState, vestState) => {
    if (helmetState && !vestState) {
      return dot.score + 2;
    }
    if (!helmetState && vestState) {
      return dot.score + 2;
    }
    if (!helmetState && !vestState) {
      return dot.score + 4;
    }
    return dot.score;
  };

  const handleHelmetVestToggle = (dotName) => {
    const updatedHelmetState = !helmetOn;
    const updatedVestState = !vestOn;

    if (dotName === "red") {
      setRedDot((prev) => ({
        ...prev,
        score: updateScore(prev, updatedHelmetState, updatedVestState),
      }));
    } else if (dotName === "blue") {
      setBlueDot((prev) => ({
        ...prev,
        score: updateScore(prev, updatedHelmetState, updatedVestState),
      }));
    } else if (dotName === "orange") {
      setOrangeDot((prev) => ({
        ...prev,
        score: updateScore(prev, updatedHelmetState, updatedVestState),
      }));
    }

    setHelmetOn(updatedHelmetState);
    setVestOn(updatedVestState);
  };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>

      {/* Helmet and Vest Buttons for Red Dot */}
      <div
        className="absolute"
        style={{
          position: "absolute",
          top: redDot.y - 60,
          left: redDot.x + 15,
        }}
      >
        <button
          className={`px-4 py-2 m-2 bg-${helmetOn ? "green" : "gray"}-500 text-white`}
          onClick={() => handleHelmetVestToggle("red")}
        >
          {helmetOn ? "Helmet On" : "Helmet Off"}
        </button>
        <button
          className={`px-4 py-2 m-2 bg-${vestOn ? "blue" : "gray"}-500 text-white`}
          onClick={() => handleHelmetVestToggle("red")}
        >
          {vestOn ? "Vest On" : "Vest Off"}
        </button>
        {/* Red Dot Score */}
        <p
          className="absolute"
          style={{
            top: redDot.y + 20,
            left: redDot.x - 10,
            color: "black",
            fontSize: "16px",
          }}
        >
          Score: {redDot.score}
        </p>
        {/* Red Dot Temperature */}
        <p
          className="absolute"
          style={{
            top: redDot.y + 40,
            left: redDot.x - 10,
            color: "black",
            fontSize: "16px",
          }}
        >
          Temp: {temperatures.red.toFixed(1)}°C
        </p>
      </div>

      {/* Helmet and Vest Buttons for Blue Dot */}
      <div
        className="absolute"
        style={{
          position: "absolute",
          top: blueDot.y - 60,
          left: blueDot.x + 15,
        }}
      >
        <button
          className={`px-4 py-2 m-2 bg-${helmetOn ? "green" : "gray"}-500 text-white`}
          onClick={() => handleHelmetVestToggle("blue")}
        >
          {helmetOn ? "Helmet On" : "Helmet Off"}
        </button>
        <button
          className={`px-4 py-2 m-2 bg-${vestOn ? "blue" : "gray"}-500 text-white`}
          onClick={() => handleHelmetVestToggle("blue")}
        >
          {vestOn ? "Vest On" : "Vest Off"}
        </button>
        {/* Blue Dot Score */}
        <p
          className="absolute"
          style={{
            top: blueDot.y + 20,
            left: blueDot.x - 10,
            color: "black",
            fontSize: "16px",
          }}
        >
          Score: {blueDot.score}
        </p>
        {/* Blue Dot Temperature */}
        <p
          className="absolute"
          style={{
            top: blueDot.y + 40,
            left: blueDot.x - 10,
            color: "black",
            fontSize: "16px",
          }}
        >
          Temp: {temperatures.blue.toFixed(1)}°C
        </p>
      </div>

      {/* Helmet and Vest Buttons for Orange Dot */}
      <div
        className="absolute"
        style={{
          position: "absolute",
          top: orangeDot.y - 60,
          left: orangeDot.x + 15,
        }}
      >
        <button
          className={`px-4 py-2 m-2 bg-${helmetOn ? "green" : "gray"}-500 text-white`}
          onClick={() => handleHelmetVestToggle("orange")}
        >
          {helmetOn ? "Helmet On" : "Helmet Off"}
        </button>
        <button
          className={`px-4 py-2 m-2 bg-${vestOn ? "blue" : "gray"}-500 text-white`}
          onClick={() => handleHelmetVestToggle("orange")}
        >
          {vestOn ? "Vest On" : "Vest Off"}
        </button>
        {/* Orange Dot Score */}
        <p
          className="absolute"
          style={{
            top: orangeDot.y + 20,
            left: orangeDot.x - 10,
            color: "black",
            fontSize: "16px",
          }}
        >
          Score: {orangeDot.score}
        </p>
        {/* Orange Dot Temperature */}
        <p
          className="absolute"
          style={{
            top: orangeDot.y + 40,
            left: orangeDot.x - 10,
            color: "black",
            fontSize: "16px",
          }}
        >
          Temp: {temperatures.orange.toFixed(1)}°C
        </p>
      </div>
    </div>
  );
};

export default App;

