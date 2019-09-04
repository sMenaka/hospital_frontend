import React from 'react';
import { NavLink} from 'react-router-dom';
// const MobileNav=()=>{
//   return(
//     <ul className="sidenav">
//           <li><NavLink to='/'>New Project</NavLink></li>
//           <li><NavLink to='/'>Log Out</NavLink></li>
//           <li><NavLink to='/' className="btn btn-floating teal lighten-3">NN</NavLink></li>
//         </ul>
//   )
// }
const SignedOutNav = () => {

    return (
     
       <div className="nav-wrapper">
       <NavLink to="#"  className="sidenav-trigger"><i class="material-icons">menu</i></NavLink>
        <ul className="right hide-on-med-and-down">
            <li><NavLink to='/'>New Updates</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Log IN</NavLink></li>
   
          </ul>
          
       </div>
       

     
          
     
      )
    
}
export default SignedOutNav;