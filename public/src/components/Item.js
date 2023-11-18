import { Timestamp } from 'firebase/firestore';
import Card from 'react-bootstrap/Card';

const Item = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.text}</Card.Title>
                <Card.Text className="justify-content-end">
                    {props.user}
                    <br /><span className='text-muted small'>{Timestamp.fromMillis(props.time).toDate().toUTCString()}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item;