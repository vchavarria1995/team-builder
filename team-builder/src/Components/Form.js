import React, { useState } from "react";

const Form = (props) => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const onChange = (event) => {
    setNewMember({
      ...newMember,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.setMembers([...props.members, newMember]);
    resetsForm(event);
  };

  const resetsForm = (event) => {
    event.preventDefault();
    setNewMember({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="name"
          value={newMember.memberName}
          placeholder="Member Name"
        />
        <input
          onChange={onChange}
          type="text"
          name="email"
          value={newMember.email}
          placeholder="Email Address"
        />
        <input
          onChange={onChange}
          type="text"
          name="role"
          value={newMember.role}
          placeholder="Role"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;