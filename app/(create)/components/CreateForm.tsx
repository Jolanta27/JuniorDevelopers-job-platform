"use client"

import {useForm} from "react-hook-form";
import {createJob, type FormData } from "@/app/(create)/actions/createJobActions"; 
import Button from "../../components/ui/Button";
import {useState, useEffect} from "react";
import { useEdgeStore } from "@/lib/edgestore";

const CreateForm = () => {
    const [file, setFile] = useState<File>();
    const { edgeStore } = useEdgeStore();

    const { register, setValue, handleSubmit, formState: {
        errors,
        isSubmitting,
        isDirty,
        dirtyFields,
    },
reset} = useForm<FormData>({
    defaultValues: {
        name: "",
        author: "",
        description: "",
        location: "",
        employmentType: "",
    },
});
const uploadFile = async () => {
    if (file) {
        const res = await edgeStore.publicFile.upload({
            file
        })
        setValue("file", res.file);
    }
};
   useEffect(() => {
    if(file) {
        uploadImageHandler();
    }
   }, [file]);

   const onSubmit = handleSubmit(async(data) => {
    await createJob(data);
    reset();
   })
    return (
    <>
    <form onSubmit={onSubmit} className="mt-10">
        <div className="flex flex-col sm:gap-10 gap-5">
        <Input 
        id="name"
        label="Job Title"
        errors={errors}
        disabled={isSubmitting}
        register={{...register("name", { required: true}),
    }}
        />
           <Input 
        id="location"
        label="Location"
        errors={errors}
        disabled={isSubmitting}
        register={{...register("name", { required: true}),
    }}
        />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
            <Input 
            id="author"
            label="Company Name"
            errors={errors}
            disabled={isSubmitting}
            register={{...register("author", { required: true}),
        }} />
              <Input 
            id="Salary"
            label="Salary"
            errors={errors}
            disabled={isSubmitting}
            register={{...register("Salary", { required: true, 
            validate: (value) => {
                const parsedValue = parseFloat(value.replace(/,/g, "")
              )
                return (
                    !isNaN(parsedValue) || "Must be a number"
                );
            },
        }),
    }}  
        />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
        <Input 
        label="Select Company Image"
        type="file"
        onChange={(e) => {
            setFile(e.target.files?.[0]);
        }}
        id="file"
        />
        </div>
        <label htmlFor="employmentType" className="Block text-sm font-medium leading-6 text-gray-900 mb-2">
        Employment Type
        </label>
        <select id="employmentType"
            {...register("employmentType", { required: true })}
            className="block w-full border-0 py-1.5 px-1 text-gray-900
            shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2
            sm: text-sm
            sm:leading-6
            mb-5"
            >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
        </select>
        <Input 
        id="description"
        label="Description"
        errors={errors}
        disabled={isSubmitting}
        register={{
            ...register("description", { required: true }),
        }}
        />
        <input 
        type="hidden"
        id="img"
        {...register("img")}
        />
        <Button type="submit">Submit</Button>
    </form>
    </>
    );
};
export default CreateForm;