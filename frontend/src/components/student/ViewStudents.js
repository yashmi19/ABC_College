import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ViewStudents() {
  let navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const deleteStudent = async (id, idNumber) => {
    await axios
      .delete("http://localhost:4000/api/v1/students/delete/" + id)
      .then((res) => {
        console.log(res);
      });

    await axios
      .delete("http://localhost:4000/api/v1/users/deleteByUserID/" + idNumber)
      .then((res) => {
        console.log(res);
      });
    loadStudent();
  };

  const loadStudent = () => {
    axios
      .get("http://localhost:4000/api/v1/students/")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:4000/api/v1/students/")
        .then((res) => {
          setStudents(res.data.map((student) => ({
            ...student,
            dob: student.dob.split("T")[0],
            admissionDate: student.admissionDate.split("T")[0],

          })));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStudents();
  }, [students]);

  return (
    <div>
      <table className="table table-bordered table-responsive p-5 table-white" style={{ backgroundColor: 'white' }}>
        <thead>
          <th className="text-center align-text-top">First Name</th>
          <th className="text-center align-text-top">Last Name</th>
          <th className="text-center align-text-top">Date Of Birth</th>
          <th className="text-center align-text-top">Gender</th>
          <th className="text-center align-text-top">Address</th>
          <th className="text-center align-text-top">Contact Number</th>
          <th className="text-center align-text-top">Email</th>
          <th className="text-center align-text-top">Guardian Name</th>
          <th className="text-center align-text-top">Guardian Contact</th>
          <th className="text-center align-text-top">Admission Date</th>
          <th className="text-center align-text-top" colspan="2">Actions</th>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td className="text-nowrap">{student.firstName}</td>
                <td className="text-nowrap">{student.lastName}</td>
                <td className="text-nowrap">{student.dob}</td>
                <td className="text-nowrap">{student.gender}</td>
                <td>{student.address}</td>
                <td className="text-nowrap">{student.contactNumber}</td>
                <td className="text-nowrap">{student.email}</td>
                <td className="text-nowrap">{student.guardianName}</td>
                <td className="text-nowrap">{student.guardianContact}</td>
                <td className="text-nowrap">{student.admissionDate}</td>
                <td>
                  <button className="btn btn-warning p-1"
                    onClick={() => {
                      navigate(`update/${student._id}`)
                    }}><i className="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger p-1"
                    onClick={() => {
                      Swal.fire({
                        title: "Warning!",
                        text: "Do you want to delete the user?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#C81E1E",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteStudent(student._id, student.idNumber);
                        } else {
                        }
                      })
                    }}
                  >
                    {" "}
                    <i className="fa-solid fa-trash"></i>{" "}
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStudents;
