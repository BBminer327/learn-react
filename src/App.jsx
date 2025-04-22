import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Pumint Wattana")

  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "123@456"
  }

  const product = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Welcome to my app</h1>
      <p>My name is {user.firstName} last name is {user.lastName}</p>
      <ul>
        {product.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <MyButton />
    </>
  )
}

export default App
