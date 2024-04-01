import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode'
import './adminHome.css'


function AdminHome() {

  const [user, setUser] = useState({});

  useEffect(() => {

    try {
      const jwt = localStorage.getItem("token");
      setUser(jwtDecode(jwt));
    } catch (error) {

    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container" style={{ height: '100vh' }}>
      <div class="row row-cols-1 row-cols-md-2 mt-5">
        <div class="col mb-4">
          <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
            <div class="card-header text-center">View All Students</div>
            <div class="card-body">
              <a href="/students" className="custom-size"> <i class="fa-solid fa-users"></i></a>
            </div>
          </div>
        </div>

        <div class="col mb-4">
          <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
            <div class="card-header text-center">Add New Student</div>
            <div class="card-body">
              <a href="/register-student" className="custom-size"><i class="fa-solid fa-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
