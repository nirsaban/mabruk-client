import { Form,Button ,Col,Container,Row,Card} from 'react-bootstrap';





const CardComponent = ({title,body,footer}) => {

        return(
            <Card>
                <Card.Header>
                  <Card.Title as="h4">{title}</Card.Title>
               </Card.Header>
                <Card.Body>
                  {body}
               </Card.Body>
                <Card.Footer >
                    {footer}
                </Card.Footer>
            </Card>
        )
}



export default CardComponent