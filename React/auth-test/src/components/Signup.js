import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const {signup, currentUser} = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading]= useState(false);

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        console.log(passwordRef.current.value, passwordConfirmRef.current.value);
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match!');
        }

        try{
            setError('');
            setLoading(true)
           let res = await signup(emailRef.current.value, passwordRef.current.value);
           console.log('response',res);
           if(res.error){
               setError(res.error.error);
           }
           history.push('/');
        }
        catch{
            setError('Failed to create an account!')
        }

        setLoading(false);
    }
    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className="text-center mb-4">Sign Up</h2>
                   {error && <Alert variant="danger">{error}</Alert>}
                   {JSON.stringify(currentUser)}
                   <Form onSubmit={handleSubmit}>
                       <Form.Group id="email">
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="email" ref={emailRef} required/>
                       </Form.Group>
                       <Form.Group id="password">
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" ref={passwordRef} required/>
                       </Form.Group>
                        <Form.Group id="confirm-password">
                           <Form.Label>Confirm Password</Form.Label>
                           <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                       <Button disabled={loading} className="w-100 mt-3" type="submit">Sign Up</Button>
                   </Form>
               </Card.Body>
           </Card>
           <div className="w-100 mt-2">
               Already have an account? <Link to="/login">Log In</Link>
            </div> 
        </>
    )
}
