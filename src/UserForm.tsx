import { useState } from 'react';
import type { FormEvent } from 'react';
import './UserForm.css';

interface UserData {
  name: string;
  age: string;
  weight: string;
  height: string;
  city: string;
  state: string;
  preferredMeal: string;
}

function UserForm() {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    age: '',
    weight: '',
    height: '',
    city: '',
    state: '',
    preferredMeal: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add your form submission logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <h2>Personal Information Form</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Height (inches):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferredMeal">Preferred Meal:</label>
          <input
            type="text"
            id="preferredMeal"
            name="preferredMeal"
            value={formData.preferredMeal}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default UserForm; 