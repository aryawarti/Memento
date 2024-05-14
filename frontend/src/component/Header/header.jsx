import { Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { logout } from "../../actions/userLogOut";
import { useSelector, useDispatch } from "react-redux";
import { Outlet,NavLink} from "react-router-dom";


export default (Header) => {
   const dispatch= useDispatch();
  
   const logoutHandler= ()=>{
      dispatch(logout());
      window.location.href = "/";
   }
  return (
    <>
      <nav class="navbar navbar-expand-xl bg-primary navbar-dark p-3 ">
        <div class="container">
          <a class="navbar-brand" href="/">
            <NavLink to="/">Memento</NavLink>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <nav className="m-auto">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2 pl-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </nav>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link fs-27" href="#">
                  <NavLink to="/mynotes">My Notes</NavLink>
                </a>
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Ashish Aryawarti
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                  <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </nav>
      <main className="m-20">
        <Outlet />
      </main>
    </>
  );
};
