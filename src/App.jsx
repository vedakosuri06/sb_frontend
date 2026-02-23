import { useEffect, useState } from "react";
function App() {
 const [message, setMessage] = useState("");
 useEffect(() => {
 fetch(“https://sb-backend-mrnc.onrender.com/api/hello”)
 .then(res => res.text())
 .then(data => setMessage(data))
 .catch(err => console.error(err));
 }, []);
 return (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
 <h1>Spring Boot + React App</h1>
 <h2>{message}</h2>
 </div>
 );
}
export default App;