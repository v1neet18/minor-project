import React from 'react';
import Select from './Select';

function AddPatientInfo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  const genders = ['Male', 'Female', 'Others']

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

  return (
<>
    <header className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Select Lab Test & Pathology Lab
        </h2>
        <p className="text-gray-500 mt-2 text-base">
          Select a test to view available pathology labs near you
        </p>
      </header>
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 text-lg "
    >
      {/* Full Name */}
      <div>
        <label className="label font-semibold" htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="label font-semibold" htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Gender */}
      <div>
        <label className="label font-semibold" htmlFor="gender">Gender</label>
        <Select defaultValue="Select Gender" options={genders} />
      </div>

      {/* Phone Number */}
      <div>
        <label className="label font-semibold" htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="9876543210"
          onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Email Address */}
      <div>
        <label className="label font-semibold" htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="example@mail.com"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Address */}
      <div>
        <label className="label font-semibold" htmlFor="address">Address</label>
        <textarea
          id="address"
          placeholder="Full Address"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
      </div>

      {/* Blood Group */}
      <div>
        <label className="label font-semibold" htmlFor="bloodGroup">Blood Group</label>
        <Select defaultValue="Select Blood Group" options={bloodGroups} />
      </div>

      {/* Emergency Contact */}
      <div>
        <label className="label font-semibold" htmlFor="emergencyContact">Emergency Contact</label>
        <input
          type="tel"
          onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
          id="emergencyContact"
          placeholder="Emergency Contact Number"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Submit Button */}
      {/* <div className="md:col-span-2 text-right">
        <button type="submit" className="btn btn-primary mt-4">Save Patient Info</button>
      </div> */}
    </form>
    </>
  );
};

export default AddPatientInfo;
