import { useState } from "react";
import { List } from "phosphor-react";

export default function Sidebar(){

    //Aqui eu determino o valor inicial do side bar que sera fechado
    const[sidebarHidden, setSidebarOpen] = useState(false);

    function openMenu(){       
        setSidebarOpen(!sidebarHidden);
    }

   return( 
   
  <div >
{sidebarHidden  &&   <div className="l-sidebar" tabIndex={0} onClick={openMenu}> 

          <nav className="c-sidebar">
            <a className="c-nav__item" href="#aboutMe"> About me </a>
            <a className="c-nav__item" href="#Talk">Talk To Me</a>
          </nav>
        </div> }

     <button   onClick={openMenu} className="l-sidebar__btn" type="button">
    <List size={60}/>
     </button>
     

  
     
  </div>
   
   
  
   
   
   )
   



}

