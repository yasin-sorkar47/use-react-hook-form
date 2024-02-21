import { useForm } from "react-hook-form";
import Filed from "../components/Filed";
import FiledSet from "../components/FiledSet";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "y@email.com", password: "12345678" };
    const found =
      formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError("root.random", {
        message: `the use with this email ${formData.email} not found.`,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)} className="w-2/5">
        <FiledSet label="Enter login details">
          <Filed label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className={`p-2 border ${
                !!errors.email ? "border-red-600" : "border-gray-400"
              } outline-none bg-gray-100 w-full`}
              type="email"
              name="email"
              id="name"
              placeholder="Enter your email"
            />
          </Filed>
          <Filed label="password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Your password must be 8 characters.",
                },
              })}
              className={`p-2 border ${
                !!errors.email ? "border-red-600" : "border-gray-400"
              } outline-none bg-gray-100 w-full`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </Filed>
          <div className="text-red-600">{errors?.root?.random?.message}</div>
          <Filed>
            <button
              type="submit"
              className="py-1 px-3 bg-pink-600 text-white font-semibold text-lg mt-3 rounded"
            >
              Login
            </button>
          </Filed>
        </FiledSet>
      </form>
    </div>
  );
}
