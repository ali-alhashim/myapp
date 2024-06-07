import {  SearchBox } from "@fluentui/react-components"
export const Navbar = () => {
    return(
        <div className="navbar">
           <div className="navbar-left-items">
              <h2>HeroTech | ERP</h2>
           </div>

           <div className="navbar-center-items">
           
             <SearchBox />
           
           </div>

           <div className="navbar-right-times">

           </div>
        </div>
    );
}

