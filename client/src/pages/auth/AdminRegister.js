import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { adminRegister } from "../../redux/features/auth/authAction";

import InputType from "../../components/shared/Form/InputType";
import { adminRegister } from "../../redux/features/auth/authActions";

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      phone,
      address,
      website,
    };
    dispatch(adminRegister(userData));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Admin Registration</h1>
        <hr />
        <InputType
          labelText={"Name"}
          labelFor={"forName"}
          inputType={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputType
          labelText={"Email"}
          labelFor={"forEmail"}
          inputType={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputType
          labelText={"Password"}
          labelFor={"forPassword"}
          inputType={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputType
          labelText={"Address"}
          labelFor={"forAddress"}
          inputType={"text"}
          name={"address"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <InputType
          labelText={"Phone"}
          labelFor={"forPhone"}
          inputType={"text"}
          name={"phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <InputType
          labelText={"Website"}
          labelFor={"forWebsite"}
          inputType={"text"}
          name={"website"}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <div className="d-flex flex-row justify-content-between">
          <p>
            Already registered? <a href="/login">Login Here!</a>
          </p>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AdminRegister;
