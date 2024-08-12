import * as React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

export default function Form() {
  

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required!"),
    Email: yup.string().email("Invalid email format").required("Email is required!"),
    phoneNumber: yup.number().typeError("Phone Number must be a number").required("Phone Number is required!"),
    address: yup.string().required("Address is required!"),
    city: yup.string().required("City is required!"),
    state: yup.string().required("State is required!"),
    zipCode: yup.number().typeError("Zip Code must be a number").required("Zip Code is required!"),
    hosting: yup.string().required("Hosting is required!"),
    comments: yup.string(),
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" pt-10  px-10 py-20 bg-white  rounded-3xl border-2 border-gray lg:h-fulls w-screen ">
      <h1 className="text-5xl font-semibold">Welcome Back!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your details
      </p>

      <div className="mt-8">


        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-lg font-medium"> Full Name </label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            placeholder="enter your Full Name"
            {...register("fullName")}
          ></input>
          <p>{errors.fullName?.message} </p>

          <label className="text-lg font-medium"> Email </label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            placeholder="enter your email"
            {...register("Email")}
          ></input>
          <p>{errors.Email?.message} </p>

          <label className="text-lg font-medium"> Phone Number </label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            placeholder="Phone Number"
            {...register("phoneNumber")}
          ></input>
          <p>{errors.phoneNumber?.message} </p>

          <label className="text-lg font-medium"> Address </label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            placeholder="enter your Address"
            {...register("address")}
          ></input>
          <p>{errors.address?.message} </p>

          <label className="text-lg font-medium"> city </label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            type="text"
            placeholder="city"
            {...register("city")}
          />
          <p>{errors.city?.message} </p>

          <label className="text-lg font-medium"> State </label>
          <select
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            placeholder="Please select your state"
            {...register("state")}
          >
            <option value="" style={{ color: "gray" }}>
              {" "}
              Select your state
            </option>
            <option value="NSW">NSW</option>
            <option value="NT">NT</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
          </select>
          <p>{errors.state?.message} </p>

          <label className="text-lg font-medium"> Zip Code </label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            type="number"
            placeholder="Zip Code "
            {...register("zipCode")}
          />
          <p>{errors.zipCode?.message} </p>

        
          <label className=" text-lg font-medium "> do you have hositng </label>
          <div>

            <div>
              <input
                type="radio"
                id="hostingYes"
                value="yes"
                {...register("hosting")}
              />
              <label className="text-lg font-medium"> Yes</label>
            </div>

            <div>
              <input
                type="radio"
                id="hostingNo"
                value="no"
                {...register("hosting")}
              />
              <label className="text-lg font-medium"> No</label>
            </div>

          </div>
          <p>{errors.hosting?.message} </p>

          <label className="text-lg font-medium mt-3">Description</label>
          <textarea
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1"
            placeholder="Enter any comments or description"
            {...register("comments")}
          ></textarea>
         
          <div className="flex flex-col mt-6 gap-y-4">
            <input
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
