// import { useState, useEffect } from "react";

export default function CustomDropdown({
  data = [],
  label = "Filter",
  onChange, // optional: biar bisa kasih tahu ke parent
  value = "",
}) {
  const handleChange = async (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div className="w-full">
      <label className="block mb-1 text-gray-600">{label}</label>
      <select
        value={value}
        onChange={handleChange}
        className="w-full py-3 px-4 rounded shado text-gray-700 cursor-pointer border  focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {/* Tambahkan opsi "All" manual */}
        {label !== "Tipe" && <option value="">All</option>}
        {data.map((item, idx) => (
          <option key={idx} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
