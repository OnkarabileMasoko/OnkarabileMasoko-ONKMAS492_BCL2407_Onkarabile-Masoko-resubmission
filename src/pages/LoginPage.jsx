import 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    console.log('Logging in with:', email);
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-900">
      <div className="bg-red-800 p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center">
            <AiFillThunderbolt className="mr-2 text-green-300" />
            <span>Podcastors</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-red-700 text-black border border-red-600 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-lg bg-red-700 text-black border border-red-600 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
