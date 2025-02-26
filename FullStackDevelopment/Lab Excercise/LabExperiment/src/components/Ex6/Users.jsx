import axios from "axios";
import { useState, useEffect } from "react";
export default function User() {
 const [result, setResult] = useState("Nothing");
 useEffect(() => {
 if (result === "Nothing") {
 axios.get("https://reqres.in/api/users")
 .then((res) => {
 setResult(res.data.data);
 console.log(res.data.data);
 });
 }
 }, [result]);
 if (result === "Nothing") {
 return <div>Data is fetching</div>;
 }
 return (
 <div>
 This is User Page
 2300030401
 <br />
 <br />
 <table border={1}>
 <thead>
 <tr className="text-center" style={{ fontWeight: 'bold' }}>
 <td>ID</td>
 <td>EMAIL</td>
 <td>FIRST NAME</td>
 <td>LAST NAME</td>
 <td>IMAGE</td>
 </tr>
 </thead>
 <tbody>
 {result.map((element) => (
 <tr key={element.id}>
 <td>{element.id}</td>
 <td>{element.email}</td>
 <td>{element.first_name}</td>
 <td>{element.last_name}</td>
 <td><img src={element.avatar} alt="error" width={75} height={75} /></td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
}