import React, { useState } from 'react';
import './SignUp.css';  // Make sure to import the CSS file for styling

function SignUp() {
  // State to handle user category (Attendee or Host)
  const [userCategory, setUserCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    category: '',
    additionalInfo: '',
    eventPreferences: '',
    dietaryRequirements: '',
    organization: '',
    experience: '',
    preferredEventType: '',
    socialMedia: '',
    availability: '',
    feedback: '',
  });

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Logic to submit data (could be an API call)
  };

  // Conditional rendering based on user category
  const renderAdditionalFields = () => {
    if (userCategory === 'attendee') {
      return (
        <>
          <div>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Where are you located?"
              />
            </label>
          </div>

          <div>
            <label>
              Event Preferences:
              <textarea
                name="eventPreferences"
                placeholder="Topics or types of events you're interested in"
                value={formData.eventPreferences}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Dietary Requirements:
              <input
                type="text"
                name="dietaryRequirements"
                value={formData.dietaryRequirements}
                onChange={handleChange}
                placeholder="Any dietary restrictions?"
              />
            </label>
          </div>

          <div>
            <label>
              Feedback (optional):
              <textarea
                name="feedback"
                placeholder="Any suggestions or feedback?"
                value={formData.feedback}
                onChange={handleChange}
              />
            </label>
          </div>
        </>
      );
    } else if (userCategory === 'host') {
      return (
        <>
          <div>
            <label>
              Organization Name:
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your organization or business"
                required
              />
            </label>
          </div>

          <div>
            <label>
              Event Hosting Experience:
              <textarea
                name="experience"
                placeholder="Describe your event hosting experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Preferred Event Type:
              <input
                type="text"
                name="preferredEventType"
                value={formData.preferredEventType}
                onChange={handleChange}
                placeholder="Type of events you are most comfortable hosting"
                required
              />
            </label>
          </div>

          <div>
            <label>
              Social Media/Website (optional):
              <input
                type="url"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder="Your social media or website link"
              />
            </label>
          </div>

          <div>
            <label>
              Availability:
              <textarea
                name="availability"
                placeholder="When are you available to host events?"
                value={formData.availability}
                onChange={handleChange}
              />
            </label>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up for eventSphere Management</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              I am a:
              <select
                name="category"
                value={userCategory}
                onChange={(e) => setUserCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="attendee">Attendee</option>
                <option value="host">Host</option>
              </select>
            </label>
          </div>

          {renderAdditionalFields()}

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
