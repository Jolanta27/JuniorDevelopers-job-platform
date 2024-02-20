"use client"

import { useForm } from "react-hook-form";

const CreateJobForm = () => {
    const container = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        margin: '0',
        padding: '0',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f4eef4',
    }
   const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '500px',
    margin: '0',
    padding: '0',
    textAlign: 'center',
   };
   const styles = {
    textAlign: 'center',
    fontSize: '40px',
   };
   const  inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '90%',
   };
   const description = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10',
    marginTop: '20px',
    width: '400px',
    height: '200px',
   }
   const submitButton = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
    padding: '10px',
    width: '40%',
    cursor: 'pointer',
    margin: '20px'
   };
   const radioStyle = {
    display: 'flex',
    margin: '10px',
   };
   const labelEmployment = {
    marginTop: '10px',
   }
   const styleText = {
    marginTop: '10px',
    marginBottom: '10px',
   }

   interface IFormInput {
    jobTitle: string;
    location: string;
    companyName: string;
    salary: number;
    employmentType: string;
    description: string;
   };
  

   const { register, handleSubmit, formState: {
    errors },
     } = useForm<IFormInput>({
        defaultValues: {
            jobTitle: "",
            location: "",
            companyName: "",
            salary: 0,
            employmentType: "",
            description: "",
        },
    });
    const onSubmit = (data: IFormInput) => {
        console.log(data);
    };
    return (
        <div style={container}>
        <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <h1 style={styles}>Post a Job</h1>
        <label style={styleText}>Job Title</label>
        <input {...register("jobTitle")} style={inputStyle}/>
        <label style={styleText}>Location</label>
        <input {...register("location")} style={inputStyle}/>
        <label style={styleText}>Company Name</label>
        <input {...register("companyName")} style={inputStyle}/>
        <label style={styleText}>Salary</label>
        <input {...register("salary")} style={inputStyle}/>
        <label style={labelEmployment}>Employment Type:</label>
        <div style={radioStyle}>
        <div>
            <label>
                <input type="radio" 
                {...register("employmentType")}
                value="full-time"
                name="employmentType"
                /> Full-Time
            </label>
        </div>
        <div>
            <label>
                <input type="radio" 
                {...register("employmentType")}
                value="part-time"
                name="employmentType"
                /> Part-Time
            </label>
        </div>
        <div>
            <label>
                <input type="radio" 
                {...register("employmentType")}
                value="contract"
                name="employmentType"
                /> Contract
            </label>
        </div>
        <div>
            <label>
                <input type="radio" 
                {...register("employmentType")}
                value="internship"
                name="employmentType"
                /> Internship
            </label>
        </div>
        </div>
        <div>
        <textarea {...register("description")} placeholder="Enter your description" style={description}></textarea>
        </div>
        <button style={submitButton}>Submit</button>
        </form>
        </div>
    );
} 
export default CreateJobForm;