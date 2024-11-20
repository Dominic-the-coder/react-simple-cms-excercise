import { Link } from "react-router-dom";

function Nav(){
    return(
      <div className="d-flex justify-content-center gap-5">
         <Link to="/login">Login</Link>
         <Link to="/signup">Signup</Link>
      </div>
);
}

export default Nav;
