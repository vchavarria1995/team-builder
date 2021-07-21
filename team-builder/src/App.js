import './App.css';
import React, { useState } from 'react'
import Form from './Components/Form';
import TeamMember from './Components/TeamMember';

function App() {
  const [members, setMembers] = useState([{}, {}]);

  return (
    <div className="App">
      <h1>Team Members</h1>

      <Form members={members} setMembers={setMembers} />
      <TeamMember members={members} />
    </div>
  );
}

export default App;