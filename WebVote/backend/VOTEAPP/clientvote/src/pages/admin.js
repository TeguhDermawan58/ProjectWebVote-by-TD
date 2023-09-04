// CandidateForm.js
import React, { useEffect, useState } from 'react';
import './admin.css'; // Import CSS file

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    description: '',
    picture: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      picture: event.target.files[0],
    });
  };

  useEffect(() => {
    console.log("test");
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('position', formData.position);
    formPayload.append('description', formData.description);
    formPayload.append('picture', formData.picture);

    try {
      const response = await fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        body: formPayload,
      });
      if (response.ok) {
        // Handle success, maybe show a success message
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container1">
      <input type="text" name="name" onChange={handleInputChange} placeholder="Name" />
      <input type="text" name="position" onChange={handleInputChange} placeholder="Position" />
      <textarea name="description" onChange={handleInputChange} placeholder="Description"></textarea>
      <input type="file" name="picture" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CandidateForm;
