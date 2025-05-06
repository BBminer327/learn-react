import React from "react";
import Navbar from "../component/Navbar";
import { useState } from "react";
import Axios from "axios";

function About() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="flex h-screen">
      <Navbar />
      <section className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Employees Information
          </h1>

          <div className="bg-white shadow-md rounded-lg p-6 mb-10">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="age"
                >
                  Age:
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter age"
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="country"
                >
                  Country:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter country"
                  onChange={(event) => setCountry(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="position"
                >
                  Position:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter position"
                  onChange={(event) => setPosition(event.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="wage"
                >
                  Wage:
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter wage"
                  onChange={(event) => setWage(event.target.value)}
                />
              </div>
              <button
                onClick={addEmployee}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-200"
              >
                Add Employee
              </button>
            </form>
          </div>

          <div className="text-center mb-6">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200"
              onClick={getEmployees}
            >
              Show Employees
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">USERNAME</th>
                  <th className="px-6 py-3">AGE</th>
                  <th className="px-6 py-3">COUNTRY</th>
                  <th className="px-6 py-3">POSITION</th>
                  <th className="px-6 py-3">WAGE</th>
                  <th className="px-6 py-3">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((val, key) => {
                  return (
                    <tr
                      key={key}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {val.id}
                      </td>
                      <td className="px-6 py-4">{val.name}</td>
                      <td className="px-6 py-4">{val.age}</td>
                      <td className="px-6 py-4">{val.country}</td>
                      <td className="px-6 py-4">{val.position}</td>
                      <td className="px-6 py-4">{val.wage}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            type="number"
                            placeholder="15000..."
                            onChange={(event) => setNewWage(event.target.value)}
                          />
                          <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-200"
                            onClick={() => updateEmployeeWage(val.id)}
                          >
                            Update
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                            onClick={() => deleteEmployee(val.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
