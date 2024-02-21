import { Controller, useFieldArray, useForm } from "react-hook-form";
import Filed from "../components/Filed";
import FiledSet from "../components/FiledSet";
import NumberInput from "../components/NumberInput";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)} className="w-2/5">
        <FiledSet label="Enter login details">
          <Filed label="Picture" error={errors.picture}>
            <input
              {...register("picture", { required: "Picture is required." })}
              className={`p-2 border w-[400px] ${
                !!errors.email ? "border-red-600" : "border-gray-400"
              } outline-none bg-gray-100 w-full`}
              type="file"
              name="picture"
              id="picture"
              placeholder="Chose your picture"
            />
          </Filed>
          <Filed label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className={`p-2 border w-[400px] ${
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
              className={`p-2 border  ${
                !!errors.email ? "border-red-600" : "border-gray-400"
              } outline-none bg-gray-100 w-[400px]`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </Filed>
          <Filed label="Full Name" error={errors.fullName}>
            <input
              {...register("fullName", {
                required: "Full name is required.",
                maxLength: {
                  value: 100,
                  message: "you age must be less then 100",
                },
              })}
              className={`p-2 border w-[400px] ${
                !!errors.email ? "border-red-600" : "border-gray-400"
              } outline-none bg-gray-100 `}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your fullName"
            />
          </Filed>
          <Filed label="Age" error={errors.age}>
            {/* use external component */}
            <Controller
              name="age"
              control={control}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border w-[400px] ${
                    !!errors.age ? "border-red-600" : "border-gray-400"
                  } outline-none bg-gray-100 `}
                  {...field}
                />
              )}
              rules={{
                required: "Age is required",
                max: {
                  value: 100,
                  message: "Age must be between 0 to 100",
                },
              }}
            />
          </Filed>
        </FiledSet>

        <FiledSet label="Handle sociol">
          {fields.map((field, index) => {
            return (
              <div
                className="flex justify-between items-center w-max"
                key={field.id}
              >
                <Filed label="Social name">
                  <input
                    {...register(`socials[${index}].name`, {
                      required: "Email is required.",
                    })}
                    className={`p-2 border ${
                      !!errors.email ? "border-red-600" : "border-gray-400"
                    } outline-none bg-gray-100 w-full`}
                    type="text"
                    name={`socials[${index}].name`}
                    id={`socials[${index}].name`}
                    placeholder="Enter your social name"
                  />
                </Filed>
                <Filed label="Social link">
                  <input
                    {...register(`socials[${index}].url`, {
                      required: "Email is required.",
                    })}
                    className={`p-2 border ml-1 ${
                      !!errors.email ? "border-red-600" : "border-gray-400"
                    } outline-none bg-gray-100 w-full`}
                    type="text"
                    name={`socials[${index}].url`}
                    id={`socials[${index}].url`}
                    placeholder="Enter your social link"
                  />
                </Filed>
                <button
                  onClick={() => remove(index)}
                  className="py-1 ml-2 px-3 mt-8 bg-teal-400 text-white font-semibold text-lg  rounded"
                >
                  remove
                </button>
              </div>
            );
          })}
          <button
            onClick={() => append({ name: "", url: "" })}
            className="py-1 w-2/5 px-3 bg-teal-400 text-white font-semibold text-lg mt-3 rounded"
          >
            Add a sociol
          </button>
        </FiledSet>

        <Filed>
          <button
            type="submit"
            className="py-1 px-3 w-2/5 bg-pink-600 text-white font-semibold text-lg mt-3 rounded"
          >
            Register
          </button>
        </Filed>
      </form>
    </div>
  );
}
