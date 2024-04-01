import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Login from "./components/user/Login";
import CreateAccount from "./components/user/CreateAccount";
import AdminHome from "./components/admin/AdminHome";
import UpdateStudent from "./components/student/UpdateStudent";
import RegisterStudent from "./components/student/RegisterStudent";
import ViewStudents from "./components/student/ViewStudents";
import Header from "./components/layout/Header";
import background from "./img/school.png";

export function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover', /* Optional for aspect ratio control */
      backgroundAttachment: 'fixed',
      position: 'relative', /* Needed for some browsers with fixed background */
    }}>
      <BrowserRouter>
        <div>
          <div>
            <Header />
          </div>
        </div>
        <div>
          <div>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/create-account" element={<CreateAccount />}></Route>
              {localStorage.getItem("token") ?
                <>
                  <Route path="/admin-home" element={<AdminHome />}></Route>
                  <Route path="/students/update/:id" element={<UpdateStudent />}></Route>
                  <Route path="/register-student" element={<RegisterStudent />}></Route>
                  <Route path="/students" element={<ViewStudents />}></Route>
                  <Route path="/" element={<AdminHome />}></Route>
                </> : <></>}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
