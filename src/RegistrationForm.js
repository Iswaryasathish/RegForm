import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationForm.css"; 

const RegistrationForm = () => {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Registration Successfull");
 
    reset(); 
  };
  return (
    <div className="container">
      <h3 className="text-center">Registration Form</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        
        <div className="box">
          <label>First Name</label>
          <input type="text" {...register("firstName", { required: "First Name is required" })} />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>


        <div className="box">
          <label>Last Name</label>
          <input type="text" {...register("lastName", { required: "Last Name is required" })} />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>


        <div className="box">
          <label>Age</label>
          <input type="number" {...register("age", { required: "Age is required", min: 18, max: 100 })} />
          {errors.age && <p className="error">Age must be between 18 and 100</p>}
        </div>


        <div className="box">
          <label>Gender</label>
          <div className="radio-group">
            <input type="radio" value="Male" {...register("gender", { required: "Gender is required" })} />
            <label>Male</label>

            <input type="radio" value="Female" {...register("gender", { required: "Gender is required" })} />
            <label>Female</label>
          </div>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>

        
        <div className="box">
          <label>Phone Number</label>
          <input type="tel" {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digits" } })} />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        
        <div className="box">
          <label>Email Address</label>
          <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email" } })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        
        <div className="box">
          <label>Address</label>
          <textarea {...register("address", { required: "Address is required" })}></textarea>
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

    
        <div className="box">
          <label>Qualification</label>
          <select {...register("qualification", { required: "Qualification is required" })}>
            <option value="">Select Qualification</option>
            <option value="B.Sc">B.Sc</option>
            <option value="B.E">B.E</option>
            <option value="M.E">M.E</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>
          {errors.qualification && <p className="error">{errors.qualification.message}</p>}
        </div>

        <div className="box">
          <label>Comments</label>
          <textarea {...register("comments", { required: "Comments are required" })}></textarea>
          {errors.comments && <p className="error">{errors.comments.message}</p>}
        </div>

    
        <button type="submit" className="btn-submit">Register</button>
      </form>
     
    </div>
  );
};

export default RegistrationForm;