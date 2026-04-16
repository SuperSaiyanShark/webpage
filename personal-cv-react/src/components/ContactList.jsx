import { useEffect, useState } from "react";
import Card from "./Card";

function ContactList() {
const [contacts, setContacts] = useState([]);
useEffect(() => {
fetch("http://localhost/cv-api/getContacts.php")
.then(res => res.json())
.then(data => setContacts(data));
}, []);
return (
<Card title = 'Saved Contacts'>
<div>
<ul>
{contacts.map(contact => (
<li key={contact.id}>Name: {contact.name}
    <ul>
    <li key={`${contact.id}-email`}>Email: {contact.email}</li>
    <li key={`${contact.id}-message`}>Message: {contact.message}</li>
    </ul>
</li>
))}
</ul>
</div>
</Card>
);
}
export default ContactList;