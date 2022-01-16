import React,{useEffect,useState} from 'react'
import logo from "../images/netflix-logo-png-2562.png";
import "../nav.css";
function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll",()=>{
          if(window.scrollY>100){
            handleShow(true);
          }
          else{
              handleShow(false);
          }
      });
      return () => {
          window.removeEventListener("scroll");
      };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo' src={logo} alt="logo"/>           
        </div>
    );
}

export default NavBar;
