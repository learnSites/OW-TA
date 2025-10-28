import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Countries } from "../countryDetails.js";

const CountryCodeDropdown = forwardRef(({ className }, ref) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCode, setSelectedCode] = useState("+91");

  const filtered = Countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial_code.includes(search)
  );
  useImperativeHandle(ref, () => ({
    val: () => selectedCode,
  }));

  return (
    <div className={`relative ${className}`}>
      {/* Selected */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full rounded-xl border px-4 py-3 border-gray-300 focus:ring-gray-900 flex justify-between items-center`}
      >
        {selectedCode}
        <span>{open ? "▴" : "▾"}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 w-full bg-white border mt-1 max-h-60 overflow-y-auto rounded shadow">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border-b outline-none"
          />
          {filtered.map((c) => (
            <div
              key={c.code}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedCode(c.dial_code);
                setOpen(false);
              }}
            >
              {c.dial_code}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="px-3 py-2 text-gray-500">No results</div>
          )}
        </div>
      )}
    </div>
  );
});

export default CountryCodeDropdown;
