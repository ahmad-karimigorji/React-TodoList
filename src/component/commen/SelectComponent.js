import Select from "react-select";

const options = [
  { value: "", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "uncompleted", label: "unCompleted" },
];

const SelectComponent = ({ onSelected, selectedOption }) => {
  return (
    <Select
      defaultValue={selectedOption}
      onChange={onSelected}
      options={options}
    />
  );
};

export default SelectComponent;
