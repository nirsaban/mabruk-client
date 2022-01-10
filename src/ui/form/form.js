import { Form,Button ,Col,Container,Row,Card} from 'react-bootstrap';
import MultiSelect from '../select/select'


const FormComponent = ({inputs,handleChange,handleChangeSelect,handleSubmit,error,options}) => {

    return(
    <Form>
        {
            inputs.map(input => {
               if(input.type =="select") {
                  return(<MultiSelect 
                    options = {options}
                    handleChangeSelect={handleChangeSelect}
                    multi = {false} 
                    name = {input.name}
                    />)
                 }else{
                   return(<Row key = {input.name}>
                        <Col md ={12} >
                            <label>{input.name.toUpperCase().replaceAll("_"," ")}</label>
                             <Form.Control 
                                onChange= {handleChange}
                                type={input.type}
                                id= "default-checkbox"
                                label="Version"
                                name ={input.name}
                                multiple = {input.type == 'file'}
                             />
                        </Col>
                    </Row>)
                 }
            })
        }
        <div className='d-flex justify-content-center'>
            <Button onClick = {handleSubmit}>SUBMIT</Button>
        </div>
        <div className='d-flex justify-content-center'>
                 <small className='text-danger'>{error}</small>
        </div>
    </Form>
    )
}



export default FormComponent