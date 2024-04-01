import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CreateAccount() {

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");;
  const [role, setRole] = useState("admin");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {

      const newAccount = {
        userID,
        password,
        role
      };
      axios
        .post("http://localhost:4000/api/v1/users/add/", newAccount)
        .then((res) => {
          Swal.fire("Registration Succesfull!", "Click ok to Continue", "success");
        })
        .catch((err) => {
          alert(err);
        });

      navigate("/");

    } else {
      Swal.fire({
        title: "Incorrect Password!!",
        text: "Please enter your password again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container" style={{ height: '100vh' }}>
      <div className="row  my-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div class="card border border-primary rounded">
            <div class="card-body">
              <h2 class="mb-4 text-center">Create Account</h2>

              <form onSubmit={handleSubmit} encType="multipart/form-data" >

                <div class="form-row my-4">
                  <label for="inputUserID">User ID</label>
                  <input type="text"
                    class="form-control"
                    value={userID}
                    required
                    onChange={(e) => {
                      setUserID(e.target.value);
                    }}
                  />
                </div>
                <div class="form-row my-4">
                  <label for="inputPassword">Password</label>
                  <input type="password"
                    class="form-control"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value={password}
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="form-row my-4">
                  <label for="inputConfirmPassword">Confirm Password</label>
                  <input type="password"
                    class="form-control"
                    value={confirmPassword}
                    required
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>



                <button type="submit" class="btn btn-primary mt-4"
                  style={{ width: '100%', height: '40px' }}
                >Create Account</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default CreateAccount;
