import React from 'react';
import { Container, Button } from 'reactstrap';

import { NavLink } from 'react-router-dom'
const Doctor = () => {

    const style = {
        paddingTop: '10px',
    }

    return (
        <div style={style} >
            <Container className="p-4">
                <h2 className="font-weight-bold">Are You a Doctor ?</h2>
                <h4>Get on Board with us!</h4><br />
                <ul style={{ marginTop: '0.5rem', fontSize: '1.3rem', fontWeight: 'bold' }}>
                    <li>Increase your reach</li>
                    <li>Organise your system</li>
                    <li>Strengthen your Online Reputation</li>
                </ul>
                <NavLink style={{ padding: "10px", borderRadius: "10px", backgroundColor: '#009c8f', color: "#FFF", marginLeft: '50px', marginBottom: '20px', marginTop: '16px' }} to="getonboard" >Join Now</NavLink>
            </Container>
        </div>
    );
}

export default Doctor;