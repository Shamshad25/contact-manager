import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import "./style.css";

const ViewContact = () => {
  const { id } = useParams();
  const selectedUser = useAppSelector((state) =>
    state.contact.contacts.find((user) => user.userId === id)
  );
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
          <div className="table-box card">
            <div className="container">
              <h3>First Name : {selectedUser?.firstName}</h3>
              <h3>Last Name : {selectedUser?.lastName}</h3>
              <h4>Status : {selectedUser?.status.toUpperCase()}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContact;
