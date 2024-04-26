import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default (Header) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary navbar-dark ">
        <div class="container">
          <a class="navbar-brand" href="/">
            Memento
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
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </nav>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  My Notes
                </a>
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Ashish Aryawarti
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
