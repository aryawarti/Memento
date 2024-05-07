import { useState } from 'react';
import './registrationScreen.css'
import ErrorMessage from '../../component/ErrorMessage';


function RegisterScreen() {
 
  const [email,setEmail]= useState("ashish");
  const [name, setName]= useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password,setPassword]= useState("");
  const [confirmpassword,setConfirmpassword]=useState("");
  const [message,setMessage]=useState("");
  const [picMessage,setPicMessage]= useState(null);
  const [error,setError]= useState(false);
  const [loading,setLoading]= useState(false);

  const submitHandler=(e)=>{
      e.preventDefault();
      
      if(password!==confirmpassword){
          setMessage("Password Do not Match");
      }else{
        setMessage(null);
      }
  };

  return (
    <section class="vh-40 bg-image">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100 d-flex justify-content-center">
          <div class="row d-flex justify-content-center align-items-center h-56  col-xl-11 mt-1 ">
            <div class=" col-md-9 col-lg-6 col-xl-6 mb-80">
              <div
                class="card "
                style={{
                  borderRadius: "15px",
                  boxShadow: "5px 5px 10px rgba(8, 7, 7, 0 .534)",
                  marginLeft: "20px",
                }}
              >
                <div class="card-body px-5 py-4">
                  <h2 class="text-uppercase text-center mb-4">
                    Create an account
                  </h2>

                  <form onSubmit={submitHandler}>
                    {message && (
                      <ErrorMessage variant="danger">{message}</ErrorMessage>
                    )}
                    <div data-mdb-input-init class="form-outline mb-2">
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                      />
                      <label class="form-label" for="form3Example1cg"></label>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-2">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                      />
                      <label class="form-label" for="form3Example3cg"></label>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-2">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      <label class="form-label" for="form3Example4cg"></label>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-2">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        placeholder="Confirm Password"
                      />
                      <label class="form-label" for="form3Example4cdg"></label>
                    </div>
                    <div class="form-group">
                      <label for="fileInput"></label>
                      <input
                        type="file"
                        class="form-control-file"
                        id="fileInput"
                        name="fileInput"
                        placeholder="choose profile image"
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>
                    <p class="text-center text-muted mt-2 mb-0">
                      Have already an account?{" "}
                      <a href="#!" class="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterScreen
