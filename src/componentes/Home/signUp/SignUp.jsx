// src/components/Signup.js
import { useForm } from "react-hook-form";
import axiosInstance from "../../Hook/axiosInstance";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/signup", data);
      alert(response.data.message);

      // Form reset after successful submission
      reset();
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="mt-6">
      <form
        className="w-1/3 mx-auto p-10 border-2 shadow-lg rounded-[12px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full border-2 rounded-[10px] py-1 px-2 "
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="text-red-500">Username is required.</p>
        )}

        <br />

        <input
          className="w-full border-2 rounded-[10px] py-1 px-2 my-5"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">Email is required.</p>}

        <br />

        <input
          className="w-full border-2 rounded-[10px] py-1 px-2 "
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 10,
            pattern: /^[0-9]+$/,
          })}
        />
        {errors.password && (
          <p className="text-red-500">
            Password must be at least 10 characters long and contain only
            numbers.
          </p>
        )}

        <br />

        <div className=" flex justify-center mt-5">
          <button
            className="bg-orange-500 py-1 px-4 text-white text-lg font-bold rounded-[10px] hover:bg-green-500"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
