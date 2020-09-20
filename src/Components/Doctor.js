import React from 'react';
import { Container, Button } from 'reactstrap';
import Path3 from '../images/Path3.png';

const Doctor = () => {

    const style = {
        paddingTop: '10px',
        backgroundImage: `url(${Path3})`,
        backgroundSize: '80% 80%',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={style} >
            <Container className="p-4">
                <h2 className="font-weight-bold">Are You a Doctor ?</h2>
                <h4>Get on Board with us!</h4><br />
                <ul style={{ marginTop: '0.5rem', fontSize: '1.3rem', color: '#008A80', fontWeight: 'bold' }}>
                    <li>Increase your reach</li>
                    <li>Organise your system</li>
                    <li>Strengthen your Online Reputation</li>
                </ul>
                <Button color="dark" style={{ marginLeft: '50px', marginBottom: '20px', marginTop: '16px' }}>Join Now</Button>
            </Container>
        </div>
    );
}

export default Doctor;