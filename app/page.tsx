'use client'

import React, { FC, useState } from 'react'
import Heading from './utils/Heading'
import Header from './components/Header';
import Hero from './components/Routes/Hero';

interface props {

}

const page: FC<props> = (props) => {

    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState('Login');

    return (
        <div>
            <Heading
                title="Becodemy"
                description="Becodemy is a platform for students to learn and get help from teachers"
                keywords="Programming, MERN, Redux, Machine Learning"
            />
            <Header
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                setRoute={setRoute}
                route={route}
            />
            <Hero />
        </div>
    )
}

export default page