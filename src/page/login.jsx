import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/index.css';
import MyInputBox from '../component/MyInputBox';
import MyLabel from '../component/MyLabel';
import MyButton from '../component/MyButton';
import Link from '../component/Link';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/data/user.json');
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        alert(`ยินดีต้อนรับ ${foundUser.name} (${foundUser.role})`);
        navigate('/home');
      } else {
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (err) {
      console.error('เกิดข้อผิดพลาดในการโหลดไฟล์:', err);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <MyLabel htmlFor="email">Email address</MyLabel>
            <MyInputBox
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <MyLabel htmlFor="password">Password</MyLabel>
              <div className="text-sm">
                <Link>Forgot password?</Link>
              </div>
            </div>
            <MyInputBox
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <MyButton type="submit">Sign in</MyButton>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member? <Link>Start a 14 day free trial</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
