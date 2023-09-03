import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IContact } from "../model/IContact";
import { useDispatch } from "react-redux";
import { addContact } from "../feature/formSlice";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const CreateContact = () => {
  const [contact, setContact] = useState<IContact>({
    firstName: "",
    lastName: "",
    status: "active",
    userId: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const contactObject = {
      ...contact,
      userId: uuidv4(),
    };
    dispatch(addContact(contactObject));
    navigate("/");
  };

  return (
    <div className="conatct-container">
      <div className="header">
        <h1>Contact Page</h1>
      </div>

      <div className="main-body">
        <div className="sidebar">
          <Link className="btn" to="/">
            Contact Page
          </Link>
          <Link className="btn" to="/charts">
            Charts and Maps
          </Link>
        </div>

        <div className="content-table">
          <div className="table-box">
            <h2>Create Contact</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <label>First Name</label>
                <input
                  type="input"
                  placeholder="First Name"
                  name="firstName"
                  value={contact.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Second Name</label>
                <input
                  type="input"
                  name="lastName"
                  value={contact.lastName}
                  onChange={handleChange}
                  placeholder="Second Name"
                />
              </div>
              <div className="select-box">
                <label className="select-head">Status</label>
                <div className="select">
                  <label htmlFor="active">
                    <input
                      type="radio"
                      id="active"
                      name="status"
                      value="active"
                      onChange={handleChange}
                      checked={contact.status === "active"}
                    />
                    Active
                  </label>
                  <label htmlFor="inactive">
                    <input
                      type="radio"
                      id="inactive"
                      name="status"
                      value="inactive"
                      onChange={handleChange}
                      checked={contact.status === "inactive"}
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
