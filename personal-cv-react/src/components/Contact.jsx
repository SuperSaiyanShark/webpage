import Card from "./Card";
//import { use, useState } from "react";
import { useState } from "react";
function Contact() {
const [name, setName] = useState("");
const[email, setEmail] = useState("");
const[message, setMessage] = useState("");

function handleSubmit(e) {
e.preventDefault();
fetch("http://localhost/cv-api/process.php", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ name: name, email: email, message: message })
})
.then(res => res.json())
.then(data => {
if (data.message) {
alert(data.message);
} else {
alert("Unexpected error occurred.");
}
});
}
return (
    <Card title = "Contact me">
    <form onSubmit={handleSubmit}>
    <p><input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Name"
    style={{width:'100%', padding:'8px'}}
    required
    /></p>

    <p><input
    type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    style={{width:'100%', padding:'8px'}}
    required
    /></p>

    <p><input
    type="text"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Message"
    style={{width:'100%', minHeight:'80px', padding:'8px'}}
    required
    /></p>
    <button type="submit">Send</button>

    </form>
    </Card>
);
}

/*function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
    <Card title = "Contact me" > 
        <form onSubmit={handleSubmit}>
            <p>Name:</p>
            <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{width:'100%', padding:'8px'}}
            required
            />

            <p>Email:</p>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width:'100%', padding:'8px'}}
            required
            />

            <p>Message:</p>
            <input
            type="text"
            style={{width:'100%', minHeight:'80px', padding:'8px'}}
            required
            />

        <button type="submit" id = "submitBtn">Send</button>
        </form>*/




    export default Contact;