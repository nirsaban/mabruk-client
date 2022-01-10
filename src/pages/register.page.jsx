import React,{useState,useEffect} from 'react';
import jsonForm from '../config/formsSchema.json';
import FormComponent from '../ui/form/form';
import CardComponent from '../ui/card/card'
import { Form,Button ,Col,Container,Row,Card} from 'react-bootstrap';
import {register} from '../api/'
import httpRequest from '../classes/httpRequest'
import apiRoutes from '../config/routesApi.json'
import { setCookies } from '../helpers/functionUtils';
import { useHistory } from 'react-router-dom';


const Register = () => {

    const [state,setState] = useState({})
    const history = useHistory()

    const handleChange = (e) => {
        const {name,value} = e.target
        setState( p => ({...p,[name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await (new httpRequest(apiRoutes.user.REGISTER).post(state))
            const dateToRemoveCookie = new Date().setTime(
                new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
            );
            setCookies("token",response.data.token,dateToRemoveCookie)
            setState( p => ({...p,["error"]:''}))
        } catch (error) {

            setState( p => ({...p,["error"]:error.response.data}))
        }
    }
    return(
        <>
    <Container fluid>
      <Row className ="d-flex justify-content-center mt-3">
       <Col md="4">
       <CardComponent 
        title = {jsonForm.REGISTER.title}
        body = {
            <FormComponent inputs = {jsonForm.REGISTER.fields} 
                handleChange ={handleChange}
                handleSubmit ={handleSubmit}
                error = {state['error']}
            />} 
        footer = {<div>Already have an account ? <a onClick={() => history.push("/login")} className='link'> Login</a></div>}     
        />
      </Col>
      </Row>
      </Container>
      </>
        )


}

export default Register