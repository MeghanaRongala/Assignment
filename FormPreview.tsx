import React from "react";
import { useForm, Controller } from "react-hook-form";

const FormPreview: React.FC<{ schema: any }> = ({ schema }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  if (!schema || Object.keys(schema).length === 0) {
    return <p className="text-gray-500">Provide a valid JSON schema to render the form.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      {schema.fields.map((field: any) => (
        <div key={field.name} className="flex flex-col">
          <label className="mb-2">{field.label}</label>
          <Controller
            name={field.name}
            control={control}
            defaultValue={field.default || ""}
            render={({ field }) => (
              <input
                {...field}
                type={field.type}
                className="p-2 border rounded-md"
                placeholder={field.placeholder || ""}
              />
            )}
          />
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
