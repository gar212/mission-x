import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '-20%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    backgroundColor: 'White',
    padding: '200px 100px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

export default function Modal({ open, children, onClose}) {
    if (!open) return null

    return ReactDom.createPortal (
        <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
            <button onClick={onClose}>X</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}

// const MODAL_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#ffffff',
//     padding: '50px',
//     zIndex: 1000
// }

// const OVERLAY_STYLES = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     zIndex: 1000
// }

// export default function Modal({ open, children, onclose}) {
//     if (!open) return null

//     return (
        
//         <div style={ OVERLAY_STYLES }>
//             <div style= { MODAL_STYLES }>
//                 <button onclick= {onClose}>CLOSE MODAL</button>
//                 {children}
//             </div>
//     )
// }

// // import './Modal1.css';
// // import Modal from 'react-modal';
// // import React, { useState } from 'react';

// function Modal1() {
//     const [modalIsOpen, setModalIsOpen] = useState(false)
//     return (
//         <div className='SignUp'>
//             <button className='LoginButton' type='button' onClick={() => setModalIsOpen(true)}>REGISTER | LOGIN </button>
//             <Modal className='LoginModal'
//                  isOpen={modalIsOpen}
//                  shouldCloseOnOverlayClick={true}
//                  onRequestClose={() => setModalIsOpen(false)}>
//                 <form className='StudentModal'>
//                     <h2 className='Students'>Students</h2>
//                 </form>
//                 <form className='TeachersModal'>
//                     <h2 className='Teachers'>Teachers</h2>
//                 </form>
//             </Modal>

//         </div>
//     );
// }

// export default Modal;