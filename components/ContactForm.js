import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (formData) => {
    setLoading(true);
    const res = await sendEmail(formData);

    setLoading(false);
  };

  const sendEmail = async (formData) => {
    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    console.log(res);
  };

  return (
    <div className="w-full max-w-xl">
      <form className=" px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mail"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              (errors.email?.type === "required" ||
                errors.email?.type === "pattern") &&
              "border border-red-500"
            }`}
            id="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
            })}
            type="text"
            placeholder="email@example.com"
          />
          {errors.email?.type === "required" && (
            <small className="text-red-500 font-bold text-xs ">
              Email is required
            </small>
          )}
          {errors.email?.type === "pattern" && (
            <small className="text-red-500 font-bold text-xs ">
              Email not valid
            </small>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title?.type === "required" && "border border-red-500"
            }`}
            id="title"
            ref={register({
              required: true,
            })}
            type="text"
            name="title"
          />
          {errors.title?.type === "required" && (
            <small className="text-red-500 font-bold text-xs ">
              Title is required
            </small>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            ref={register({
              required: true,
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.message?.type === "required" && "border border-red-500"
            }`}
          />
          {errors.message?.type === "required" && (
            <small className="text-red-500 font-bold text-xs ">
              Message is required
            </small>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {loading ? (
              <img src="/ball-triangle.svg" className="w-4" alt=""></img>
            ) : (
              "Contact me"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
