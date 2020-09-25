import React, { useState } from "react";
import Select from 'react-select';


export function Sample1() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedValue) => {
      console.log(`${selectedValue} is selected`);
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      Sample1
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}
