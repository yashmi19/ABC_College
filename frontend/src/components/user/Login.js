import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = {
      userID,
      password,
    };

    const response = await axios.post(
      "http://localhost:4000/api/v1/users/login",
      loginData
    );

    const data = response.data;

    if (data.user) {
      localStorage.setItem("token", data.user);
      localStorage.setItem("userID", data.userID);


      if (data.role === "admin") {
        Swal.fire({
          title: 'Login Successfully',
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        }).then((value) => {
          window.location = "/admin-home"
        });

      } else {
        console.error("user type error");
      }
    } else {
      Swal.fire({
        title: "Incorrect Password!!",
        text: "Please enter your password again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setPassword("");
    }
  };

  return (
    <div className="container" style={{ height: '100vh' }}>
      <div className="row my-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div class="card border border-primary rounded">
            <div class="card-body">
              <h2 class="mb-4 text-center">Sign In</h2>

              <form onSubmit={loginUser}>

                <div class="form-group ">
                  <label for="userID">User ID</label>
                  <input type="text"
                    class="form-control"
                    id="userID"
                    value={userID}
                    name="userID"
                    onChange={(e) => {
                      setUserID(e.target.value);
                    }}
                    required
                    aria-describedby="userHelp" />

                </div>
                <div class="form-group">
                  <label for="password_field">Password</label>
                  <input type="password"
                    class="form-control"
                    required
                    value={password}
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
                </div>
                <button type="submit" class="btn btn-primary align-center my-4" style={{ width: '100%', height: '40px' }}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Login;
