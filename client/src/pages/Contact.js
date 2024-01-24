import React, { useState } from "react";
import style from "./Contact.module.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [inputvalue, setInputvalue] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputvalue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!inputvalue.name || !inputvalue.email || !inputvalue.details) {
      toast.error("Please fill out the form first.");
      return;
    }
    toast.success("Details Shared Successfully");
    setInputvalue({ name: "", email: "", details: "" });
  };

  return (
    <div className={style.container}>
      <h1 className={style.contactHeading}>Contact details</h1>
      <p className={style.para}>
        Prepared to embrace new opportunities, I thrive in dynamic environments,
        ready to tackle challenges and apply new skills effectively. Eager to
        enhance my skills, contribute meaningfully, and grow within your team .{" "}
        <strong>kapilsharmanfl97@gmail.com</strong>
      </p>
      <form onSubmit={handleSubmit} className={style.formdiv}>
        <input
          className={style.inputfield}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={inputvalue.name}
        />
        <input
          className={style.inputfield}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={inputvalue.email}
        />
        <textarea
          className={style.textareafield}
          name="details"
          placeholder="Project Details"
          onChange={handleChange}
          value={inputvalue.details}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
