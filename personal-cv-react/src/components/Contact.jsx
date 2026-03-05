import Card from "./Card";
import { use, useState } from "react";



function Contact() {
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
        </form>
    </Card>
    );

    function handleSubmit(e){
        e.preventDefault();
    
        alert('Thank you' + " " + name + '!');
    }
    }



    export default Contact;