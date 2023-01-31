import React, { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [details, setDetails] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // password validation
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      setError("Password entry doesn't meet criteria");
      return;
    }

    // API call or mock API call to submit data to the backend
    // on success, set success message
    setSuccess('Successful account creation');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <input
        type='text'
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder='Basic Details'
      />
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Registration;
