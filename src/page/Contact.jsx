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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">USERNAME</th>
                <th className="px-6 py-3">PASSWORD</th>
                <th className="px-6 py-3">FIRSTNAME</th>
                <th className="px-6 py-3">LASTNAME</th>
                <th className="px-6 py-3">EMAIL</th>
                <th className="px-6 py-3">ROLE</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((val, key) => (
                <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{val.id}</td>
                  <td className="px-6 py-4">{val.username}</td>
                  <td className="px-6 py-4">{val.password}</td>
                  <td className="px-6 py-4">{val.firstname}</td>
                  <td className="px-6 py-4">{val.lastname}</td>
                  <td className="px-6 py-4">{val.email}</td>
                  <td className="px-6 py-4">{val.role}</td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Contact;
