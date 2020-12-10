import React, {useState} from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Sidebar from '../components/sidebar'



function Layout() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Header toggle={toggle}/>
        <Footer/>
        </div>
    )
}

export default Layout

