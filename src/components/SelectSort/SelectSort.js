import React from "react";
import "./SelectSort.css";

function SelectSort({ value, handleChange }) {
  return (
    <select className="select__container" value={value} onChange={handleChange}>
      <option value="ascending">возрастанию даты</option>
      <option value="descending">убыванию даты</option>
    </select>
  );
}

export default SelectSort;
