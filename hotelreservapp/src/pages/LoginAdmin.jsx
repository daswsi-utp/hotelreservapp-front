import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Ir directamente al panel de admin
    navigate("/AdminPanel");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="User"
          className="w-full p-2 border mb-3"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full p-2 border mb-3"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
