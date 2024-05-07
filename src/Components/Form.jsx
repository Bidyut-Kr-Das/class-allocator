import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    roomNumber: "",
    batch: "",
    teacher: "",
    slot: "",
  });

  const teachers = ["Teacher 1", "Teacher 2", "Teacher 3"];
  const slots = ["Slot 1", "Slot 2", "Slot 3"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <form>
          <label>
            Room Number:
            <input
              type="text"
              name="roomNumber"
              onChange={handleChange}
              className="form-input mt-1 block w-full"
              placeholder="Enter room number"
            />
          </label>
          <label>
            Batch:
            <input
              type="text"
              name="batch"
              onChange={handleChange}
              className="form-input mt-1 block w-full"
              placeholder="Enter batch"
            />
          </label>
          <label>
            Teacher:
            <select
              name="teacher"
              onChange={handleChange}
              className="form-select mt-1 block w-full"
            >
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
          </label>
          <label>
            Slot:
            <select
              name="slot"
              onChange={handleChange}
              className="form-select mt-1 block w-full"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Form;
