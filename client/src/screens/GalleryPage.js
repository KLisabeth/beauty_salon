// import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { GrInstagram } from "react-icons/gr";

// import data from '../data';

// function GalleryPage() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <div className='gallery-page'>
//     <h1>Visit our instagram for more pictures {" "}
//     <a href="https://www.instagram.com/pretty_woman.beautysalon/?igshid=wvzfzi5nlsg8&fbclid=IwAR2n-gh-c2b3v7elteaSPMBCLSSpYmGqISiCWdACLP0C19fDgyX2myd21hA">
//     <GrInstagram className="instagram" />
//    </a></h1>
    
//       <Gallery photos={data.photos} onClick={openLightbox} />
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={data.photos.map(x => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//   );
// }


//  export default GalleryPage

// //  render(<GalleryPage/>, document.getElementById("root"));
import React from 'react'

function GalleryPage() {
    return (
        <div>
            
        </div>
    )
}

export default GalleryPage
