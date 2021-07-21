import React from "react";

const TeamMember = (props) => {
  return (
    <div>
      {props.members.map((member, index) => (
        <div key={index}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;