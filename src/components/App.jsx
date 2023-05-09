import React, { useState, useEffect } from "react";
import ContactForm from './ContactsForm/ContactForm'
import Filter from './Filter/Filter'
import ContactsList from './ContactsList/ContactsList'
import {Container} from './AppStyled'
import { nanoid } from 'nanoid'

const friendsList = JSON.parse(localStorage.getItem('friendsList'))

const NewApp = () => {
  const [contacts,setContacts] = useState(() =>{
    if(friendsList === null){
      return []} 
      return friendsList})

  const [filter,setFilter] = useState('')

  useEffect(()=>{
    localStorage.setItem('friendsList', JSON.stringify(contacts))
  },[contacts])

  const nameChanger = (name,number) => {
      if(contacts.find(option => option.name.toLowerCase() === `${name}`.toLowerCase())){
        return alert(`${name} is already in contact`)
      }
  
      if(contacts.find(option => option.number === `${number}`)){
        return alert(`${number} is already in contact`)
      }

      const prevState = contacts
      const newState = [{id: `${nanoid()}`, name:`${name}`, number:`${number}`}]
      return setContacts([...prevState,...newState])
  }

    const deleteName = (event) =>{
      const newState = contacts.filter(option => option.id !== `${event.currentTarget.id}`)   
      setContacts(newState)
    }
  
    const filterName = (event) =>{
        return setFilter(`${event.currentTarget.value}`)
    }

    const newState = contacts && contacts.filter(option => option.name.toLowerCase().includes(`${filter.toLowerCase()}`))

      return(
        <Container>
        <h1>PhoneBook</h1>
        <ContactForm
        newName={nameChanger}
        />
        
        <h2>Contacts</h2>
        <Filter
        filterName={filterName}
        filterValue={filter}
        />
        {contacts && 
        <ContactsList
        deleteName={deleteName}
        events={newState}
        /> }
        </Container>
    )
}


export default NewApp;