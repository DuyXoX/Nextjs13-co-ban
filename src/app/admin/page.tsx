'use client'
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Admin = () => {
    const router = useRouter()
    const btn_back = () => {    //chuyen trang "/" su dung thu vien import {useRouter}
        router.push("/")
    }
    return (
        <div>
            <div>Admin</div>
            <Button variant='dark' onClick={() => btn_back()}>Back Home</Button>
            <Button variant='primary'>Test</Button>

            <Row xs={1} md={4} className="g-3 ">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card border='light' className='shadow p-2 mb-0'>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozsiqebtx9PSw6_k1zcjbTNl0N4VG9Etprw&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}



export default Admin;