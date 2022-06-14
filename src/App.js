import "./App.css"
import allContacts from "./contacts.json"
import React from 'react'
import { useState } from "react"

const firstFive = allContacts.slice(0,5)

function App() {
  const [contacts, setContacts] = useState(firstFive)
  const addContact=()=>{
    let randomIndex=Math.floor( Math.random()*allContacts.length)
    let randomContact=allContacts[randomIndex]
    setContacts([randomContact, ...contacts])
    };
    

      const sortContact=()=>{
        setContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name)),]);
        };

        const sortPopularity=()=>{
          setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
          };

          const deleteContact = (contactId) => {
            const filteredContact = contacts.filter((contact) => {
              return contact.id !== contactId;
            })
            setContacts(filteredContact);
          }
  
  return (
    <div className='App'>
      <div class="heading">
      <h1>IronContacts</h1> 
      </div>
      
      <div class="btns">
      <button onClick={addContact}> Add Random Contact </button>
      <button onClick={sortContact}> Sort by popularity </button>
      <button onClick={sortPopularity}> Sort by name </button>
      </div>
    <br></br>

      <table>

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won<br></br> Oscar </th>
            <th>Won <br></br> Emmy</th>
            <th>Action</th>
          </tr> 
        </thead>

        <tbody>
        {contacts 
      .map(element => {
        return (
          <tr>
          <td><img className="celi" src={element.pictureUrl} alt=""/></td>
          <td>{element.name}</td>
          <td>{element.popularity}</td>
          <td>{element.wonOscar ? '🏆' : null}</td>
          <td>{element.wonEmmy ? '🏆' : null}</td>
          <td><button onClick={() => deleteContact(element.id)}>Delete </button></td>
          </tr>
        )
      }   
      )
      }
      </tbody>
      </table>
    </div>
  )
}

export default App

