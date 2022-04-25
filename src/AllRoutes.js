import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import Work from "./views/Work";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

export default function RoutesNav() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
