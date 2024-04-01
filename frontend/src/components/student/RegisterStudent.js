import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function RegisterStudent() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, SetDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [guardianName, SetGuardianName] = useState("");
  const [guardianContact, setGuardianContact] = useState("");
  const [admissionDate, setadmissionDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formattedDob = dob + 'T00:00:00Z'
    let formattedAdmissionDate = admissionDate + 'T00:00:00Z'
    const newStudent = {
      firstName,
      lastName,
      dob: formattedDob,
      gender,
      address,
      contactNumber,
      email,
      guardianName,
      guardianContact,
      admissionDate: formattedAdmissionDate,
    };

    axios
      .post("http://localhost:4000/api/v1/students/registerStudent", newStudent)
      .then((res) => {
        Swal.fire("Registration Succesfull!", "Click ok to Continue", "success");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div class="container">
      <div class="row py-5">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card border border-primary rounded">
            <div class="card-body">
              <h2 class="mb-4 text-center">Add New Student</h2>
              <form onSubmit={handleSubmit} id="form">
                <div class="form-row my-4">
                  <div class="col">
                    <label for="inputFirstName">First Name:</label>
                    <input type="text"
                      class="form-control"
                      value={firstName}
                      required
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col">
                    <label for="inputLastName">Last Name:</label>
                    <input type="text"
                      class="form-control"
                      value={lastName}
                      required
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="form-row my-4">
                  <div class="col">
                    <label for="inputDob">Date of Birth:</label><br />
                    <input
                      type="date"
                      id="inputDob"
                      name="inputDob"
                      value={dob}
                      required
                      onChange={(e) => {
                        SetDob(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col">
                    <span>Gender:</span>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inputGender"
                        value="male"
                        required
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="male">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inputGender"
                        value="female"
                        required
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="female">
                        Female
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inputGender"
                        value="other"
                        required
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-row my-4" >
                  <div class="col">
                    <label for="inputFirstName">Address:</label>
                    <input type="text"
                      class="form-control"
                      value={address}
                      required
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <label for="inputContactNumber">Contact Number:</label>
                    <input type="text"
                      class="form-control"
                      value={contactNumber}
                      required
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col">
                    <label for="inputEmail">Email:</label>
                    <input type="email"
                      class="form-control"
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Enter Valid E-mail address"
                      placeholder="example@gamil.com"
                      value={email}
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }} />
                  </div>
                </div>
                <div class="form-row my-4">
                  <div class="col">
                    <label for="inputGuardianName">Guardian Name:</label>
                    <input type="text"
                      class="form-control"
                      value={guardianName}
                      required
                      onChange={(e) => {
                        SetGuardianName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col">
                    <label for="inputGuardianContact">Guardian Contact:</label>
                    <input type="text"
                      class="form-control"
                      value={guardianContact}
                      required
                      onChange={(e) => {
                        setGuardianContact(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <label for="inputDob">Admission Date:</label><br />
                    <input
                      type="date"
                      id="inputAdmissionDate"
                      name="inputAdmissionDate"
                      value={admissionDate}
                      required
                      onChange={(e) => {
                        setadmissionDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary my-5"
                  style={{ width: '100%', height: '40px' }}
                >Add Student</button>
              </form>
            </div>
          </div>


        </div>
        <div class="col-md-2"></div>

      </div>
    </div>
  );
}

export default RegisterStudent;
