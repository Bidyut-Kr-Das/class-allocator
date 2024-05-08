import React, { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const [form, setForm] = useState({
    roomNumber: "",
    batch: "",
    teacher: "",
    slot: "",
    classes: "",
  });

  // const [usedSlots, setUsedSlots] = useState([]);

  const [teachers, setTeachers] = useState([]);
  const slots = [
    "Slot 1",
    "Slot 2",
    "Slot 3",
    "Slot 4",
    "Slot 5",
    "Slot 6",
    "Slot 7",
    "Slot 8", //single and double
    "Slot 9", //only single
  ];
  const classes = ["Single Class", "Double Class", "Triple Class"];

  useEffect(() => {
    fetch("https://class-allocator-api.up.railway.app/api/v2/teachers/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeachers(data.data);
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "slot") {
      if (e.target.value === "Slot 8" && form.classes === "Triple Class") {
        alert("Only Single and Double classes are allowed for Slot 8");
        return;
      }
      if (
        e.target.value === "Slot 9" &&
        (form.classes === "Double Class" || form.classes === "Triple Class")
      ) {
        alert("Only Single class is allowed for Slot 9");
        return;
      }
    }
    if (e.target.name === "classes") {
      if (form.slot === "Slot 8" && e.target.value === "Triple Class") {
        alert("Only Single and Double classes are allowed for Slot 8");
        return;
      }
      if (
        form.slot === "Slot 9" &&
        (e.target.value === "Double Class" || e.target.value === "Triple Class")
      ) {
        alert("Only Single class is allowed for Slot 9");
        return;
      }
    }
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

    let formData = { ...form, slots: slotsArray, teacher: form.teacher };
    console.log(formData);

    axios
      .patch(
        `https://class-allocator-api.up.railway.app/api/v2/classrooms/4?room=${formData.roomNumber}`,
        {
          batch: formData.batch,
          teacherId: formData.teacher,
          slots: formData.slots,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    setForm({
      roomNumber: "",
      batch: "",
      teacher: "",
      slot: "",
      classes: "",
    });
    // setUsedSlots([]);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <form onSubmit={handleSubmit}>
          <label>
            Room Number:
            <input
              required
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
              required
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
              required
              name="teacher"
              value={form.teacher}
              onChange={handleChange}
              className="form-select mt-1 block w-full"
            >
              <option value="">{"Select Teacher"}</option>
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher._id}>
                  {teacher.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Slot:
            <select
              required
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
              required
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
