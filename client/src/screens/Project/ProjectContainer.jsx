import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectInfo from '../../components/ProjectInfo'
import CheckoutForm from '../../components/CheckoutForm'
import Needs from '../../components/Needs'
import {Elements, StripeProvider} from 'react-stripe-elements';
import '../../styles/project.scss';


const ProjectContainer = (props) => {

    // Set up internal state (data that lives locally to this comp)
    
    const [projectImage, setProjectImage] = useState('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    const [price, setPrice] = useState(0)

    // useEffect(() => {
        // getRandomPicture()
    // }, []) // this function has this dependency array
    // Since its an empty array, it'll act EXACTLY like ComponentDidMount
    // compDidMount runs before the JSX below is returned/rendered on the DOM.

    // Helper Function
    // Unused. Old code.
    // const getRandomPicture = async () => {
    //     const response = await axios.get('https://picsum.photos/200/300'); 
    //     setProjectImage(response.data)
    // }

    console.log('projectImage:', projectImage);
    
    return (
        <div className='project-container'>
            <img className='project-image' src={projectImage} />
            <ProjectInfo/>
            <Needs
                price={price}
                setPrice={setPrice}
            />
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <div className="example">
                <h1>React Stripe Payment</h1>
                <Elements>
                    <CheckoutForm
                        price={price}
                        setPrice={setPrice}
                    />
                </Elements>
                </div>
            </StripeProvider>
        </div>
    )
}

export default ProjectContainer;
