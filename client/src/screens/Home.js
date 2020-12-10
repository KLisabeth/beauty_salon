import React, {useState} from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Bottom from '../components/layout/Bottom'
import  CarouselEl  from '../components/layout/CarouselEl'
import Sidebar from '../components/sidebar'



function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Header toggle={toggle}/>
        <CarouselEl/>
        <Bottom/>
        <Footer/>
        </div>
    )
}

export default Home


// import React, {useState} from 'react'
// import Footer from '../components/footer/Footer'
// import Navbar from '../components/navbar'
// import Sidebar from '../components/sidebar'

// function Home() {
//     const [isOpen, setIsOpen] = useState(false)

//     const toggle = ()=> {
//        setIsOpen(!isOpen)
//     }
//     return (
//         <div>
//         <Sidebar isOpen={isOpen} toggle={toggle} /> 
//         <Navbar toggle={toggle} /> 
//         <Footer/>   
//         </div>
//     )
// }

// export default Home


