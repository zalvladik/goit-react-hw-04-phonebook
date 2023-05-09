import React,{useState} from 'react'
import {Container,Form,Button,Text,InputText} from './ContactFormStyled';
import PropTypes from 'prop-types'

const NewPhoneBookContainer = ({newName}) =>{
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const currentName = (event) =>{
        const {name,value} = event.currentTarget
        
        switch(name){
            case 'name':
        return setName(value)
            case 'number':
        return setNumber(value)
            default:
        return console.log('Wrong qwery')
        }
    }

    const addNewName = (event) =>{
        event.preventDefault()
        newName(name,number)
        event.currentTarget.reset()
    }

    return (
        <Container>
        <Form onSubmit={addNewName}>
        <Text>Name</Text>
        <InputText
        onChange={currentName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <Text>Number</Text>
        <InputText
        onChange={currentName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <Button type='submit'>Add contact</Button>
        </Form>
        
        </Container>
    )
}

class PhoneBookContainer extends React.Component { 

    state= {
        name: '',
        number: ''
    }
    currentName = (event) =>{
        const {name,value} = event.currentTarget
        this.setState({[name]:[value]})
    }
    
    addNewName = (event) =>{
        const {name,number} = this.state
        event.preventDefault()
        this.props.newState(name,number)

        const form = event.currentTarget
        form.reset()
    }

    render(){
    return (
        <Container>
        <Form onSubmit={this.addNewName}>
        <Text>Name</Text>
        <InputText
        onChange={this.currentName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <Text>Number</Text>
        <InputText
        onChange={this.currentName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <Button type='submit'>Add contact</Button>
        </Form>
        
        </Container>
    )
    } 
};

PhoneBookContainer.propTypes = {
    newName:PropTypes.func.isRequired,
}

export default NewPhoneBookContainer;
