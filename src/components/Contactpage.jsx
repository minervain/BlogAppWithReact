import React from 'react'
import "./css/contact.css"

const Contactpage = () => {
  return (
   <body className="text-center cc " id='color-change-2x'>
   
       
            <div className="footer-logo rr mt">
                <a className="logo" href="x">
                    <i className="fab fa-instagram "></i> İnstagram
                </a>
            </div>
            <div className="footer-contact-info  aaa">
                <ul>
                    <li>
                        <a href="tel:+12 345 678 900" className="contact-text-sub mt-4">
                            <span className="fas fa-phone me-2"></span>+90 505 135 95 71</a>
                    </li>
                    <li>
                        <a href="mailto:info@example.com" className="contact-text-sub mt-4">
                            <span className="fas fa-envelope me-2"></span>aliosmanucar987@gmail.com </a>
                    </li>
                    <li>
                        <p className="contact-text-sub mt-4"> 
                            <span className="fas fa-map-marker me-2"></span>TOKAT / MERKEZ</p>
                    </li>
                </ul>
            </div>
      
    
    
</body>

  )
}

export default Contactpage