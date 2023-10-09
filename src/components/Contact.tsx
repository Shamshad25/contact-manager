import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../feature/formSlice";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";

const Contact = () => {
  const contacts = useAppSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="conatct-container">
      <div className="header">
        <h1>Contact Page</h1>
      </div>

      <div className="main-body">
        <div className="sidebar">
          <Link className="btn" to={"/contact"}>
            Contact
          </Link>
          <Link className="btn" to="/">
            Charts and Maps
          </Link>
        </div>

        <div className="content-table">
          <div className="table-box">
            <div className="btn-box">
              <Link className="create-btn" to="/createContact">
                Create Contact
              </Link>
            </div>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              {contacts && contacts.length > 0 ? (
                <>
                  {contacts.map((contact, i) => (
                    <tbody key={i}>
                      <tr>
                        <td
                          onClick={() =>
                            navigate(`viewContact/${contact.userId}`)
                          }
                        >
                          {contact.firstName}
                        </td>
                        <td>{contact.lastName}</td>
                        <td>{contact.status}</td>
                        <td>
                          <button
                            className="delete-btn"
                            onClick={() =>
                              navigate(`viewContact/${contact.userId}`)
                            }
                          >
                            <FaEye className="view" />
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() =>
                              navigate(`editContact/${contact.userId}`)
                            }
                          >
                            <FaEdit className="edit" />
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => {
                              dispatch(deleteContact(contact));
                              alert("Item deleted successfully!");
                            }}
                          >
                            <FaTrashAlt className="delete" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </>
              ) : (
                <h3>
                  No Contacts Found Please add contact from Create Contact
                  Button.
                </h3>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
