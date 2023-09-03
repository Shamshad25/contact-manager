import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Charts from "./components/Charts";
import CreateContact from "./components/CreateContact";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Contact />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/createContact" element={<CreateContact />} />
      <Route path="/editContact/:id" element={<EditContact />} />
      <Route path="/viewContact/:id" element={<ViewContact />} />
    </Routes>
  );
}

export default App;
