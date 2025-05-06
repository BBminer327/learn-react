import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../component/Navbar";

function Contact() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/employees")
      .then((response) => {setEmployeeList(response.data)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex h-screen">
      <Navbar />
      <section className="flex-1 p-6 bg-gray-100 overflow-auto">
        <h1>Contact</h1>
      </section>
    </div>
  );
}

export default Contact;
