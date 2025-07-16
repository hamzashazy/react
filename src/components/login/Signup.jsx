import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"; 

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const User = {
        email: "test@gmail.com",
        password: "12345",
    }

    if(!email || !password){
        setMessage("Please fill the form completely.");
    }
    else if(email ===User.email && password === User.password){
        setMessage("Logged In.");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
    }
    else {
        setMessage("Invalid Email or Password.");
    }

  }

  return (
 <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {message && (
          <div className="mb-4 text-center text-sm text-red-600">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


export default Signup
