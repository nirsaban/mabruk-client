import React,{useState,useEffect} from 'react';
import jsonForm from '../../config/formsSchema.json';
import apiRoutes from '../../config/routesApi.json'
import FormComponent from '../../ui/form/form';
import CardComponent from '../../ui/card/card'
import { Form,Button ,Col,Container,Row,Card} from 'react-bootstrap';
import httpRequest from '../../classes/httpRequest'
import { useHistory } from 'react-router-dom';


const Category = () => {
    
    const [state,setState] = useState({})
    const history = useHistory
    useEffect(() => {
         (async() => {
            try{
                 const response =  await (new httpRequest(apiRoutes.category.GET_CATEGORIES)).get();
                console.log(response)
                 if(response.status == 200){
                    setState(p => ({...p,categories:response.data.map(({category_name,id}) => {
                        return {
                            label:category_name,
                            value:id
                        }
                    })}))
                }
            }catch{
                history.push("/login")
            }

         } )()
    },[])
    const handleChange = (e) => {

        const {name,value} = e.target  ? e.target : e 

        setState( p => ({...p,[name]:value}))

    }
    const handleChangeSelect = (value,name) => { 
        setState( p => ({...p,[name]:value.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await (new httpRequest(apiRoutes.category.CREATE_PRODUCT).post(state))
            console.log(response)
        } catch (error) {
            
        }
    }
    if(!state['categories']){
        return(
            <div>steal loading</div>
            )
    }
    console.log(state['categories'])
    return(
        <>
    <Container fluid>
    <Row className ="d-flex justify-content-center mt-3">
    <Col md="4">
     <CardComponent 
      title = {jsonForm.CREATE_PRODUCT.title}
      body = {
          <FormComponent 
              inputs = {jsonForm.CREATE_PRODUCT.fields} 
              handleChange ={handleChange}
              handleSubmit ={handleSubmit}
              options={state['categories']}
              handleChangeSelect = {handleChangeSelect}
          />} 
      />
    </Col>
    </Row>
      
    </Container>
      </>
        )


}

export default Category
