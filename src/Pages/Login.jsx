import logo from "../assets/siniLoker2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(input);
    let { email, password } = input;
    axios
      .post("https://final-project-api-alpha.vercel.app/api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        Cookies.set("userName", data.user.name, { expires: 1 });
        Cookies.set("profileImg", data.user.image_url, { expires: 1 });
        navigate("/dashboard");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <img src={logo} alt="Workify logo" className="inline-block w-20" />
        <span className="text-2xl font-semibold text-gray-800 ml-2">
          SiniLoker.id
        </span>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Login Akun</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg bg-blue-100"
              placeholder="name@email.com"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              //   value="********"
              className="w-full p-3 border rounded-lg bg-blue-100"
              placeholder="********"
              name="password"
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-800"
          >
            Masuk Sekarang
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Belum punya akun?
          <span
            className="text-blue-600 ml-1 hover:border-b-2 hover:border-blue-600 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Daftar
          </span>
        </p>
      </div>
    </div>
  );
};
export default Login;
