import React, { useEffect, useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    roomNumber: "",
    batch: "",
    teacher: "",
    slot: "",
    classes: "",
  });

  // const [usedSlots, setUsedSlots] = useState([]);

  const teachers = ["Teacher 1", "Teacher 2", "Teacher 3"];
  const slots = ["Slot 1", "Slot 2", "Slot 3"];
  const classes = ["Single Class", "Double Class", "Triple Class"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let startSlot = parseInt(form.slot.split(" ")[1]);

    let endSlot = startSlot + classes.indexOf(form.classes);
    let slotsArray = [];
    for (let i = startSlot; i <= endSlot; i++) {
      // if (usedSlots.includes(i)) {
      //   alert(`Slot ${i} is already used.`);
      //   return;
      // }
      slotsArray.push(i);
    }

    // setUsedSlots([...usedSlots, ...slotsArray]);

    let formData = { ...form, slots: slotsArray };
    console.log(formData);

    setForm({
      roomNumber: "",
      batch: "",
      teacher: "",
      slot: "",
      classes: "",
    });
    // setUsedSlots([]);
  };

  // Rest of your code...

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <form onSubmit={handleSubmit}>
          <label>
            Room Number:
            <input
              type="text"
              name="roomNumber"
              value={form.roomNumber}
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
              value={form.batch}
              onChange={handleChange}
              className="form-input mt-1 block w-full"
              placeholder="Enter batch"
            />
          </label>
          <label>
            Teacher:
            <select
              name="teacher"
              value={form.teacher}
              onChange={handleChange}
              className="form-select mt-1 block w-full"
            >
              <option value="">{"Select Teacher"}</option>
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
              value={form.slot}
              onChange={handleChange}
              className="form-select mt-1 block w-full"
            >
              <option value="">{"Select Slot"}</option>
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
          <label>
            Classes:
            <select
              name="classes"
              value={form.classes}
              onChange={handleChange}
              className="form-select mt-1 block w-full"
            >
              <option value="">{"Select no of classes"}</option>
              {classes.map((classType, index) => (
                <option key={index} value={classType}>
                  {classType}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
