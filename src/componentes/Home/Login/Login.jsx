// src/components/Login.js
import { useForm } from "react-hook-form";
import axiosInstance from "../../Hook/axiosInstance";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/login", data);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");

      // Form reset after successful submission
      reset();
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };

  return (
    <div className="mt-6">
      <form
        className="w-1/3 mx-auto p-10 border-2 shadow-lg rounded-[12px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full border-2 rounded-[10px] py-1 px-2 mb-4"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">Email is required.</p>}

        <input
          className="w-full border-2 rounded-[10px] py-1 px-2 mb-4"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 6,
          })}
        />
        {errors.password && (
          <p className="text-red-500">Password must be at t 6 characters</p>
        )}

        <div className="flex justify-center mt-4 mx-3">
          <button
            className="bg-orange-500 py-1 px-4 text-white text-lg font-bold rounded-[10px] hover:bg-green-500"
            type="submit"
          >
            Log In
          </button>
          <button
            className="bg-red-500 py-1 px-4 text-white text-lg font-bold rounded-[10px] hover:bg-green-500"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
