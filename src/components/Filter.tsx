import { type } from "os";
import React from "react";

type FilterProps = {
  onFilter: Function;
};

export const Filter = ({ onFilter }: FilterProps) => {
  const handlerFilter = (event: any) => {
    onFilter("title", event.target.value);
  };
  return (
    <input
      className="form-control mb-3"
      type="text"
      placeholder="Search any post by the title"
      onChange={handlerFilter}
    />
  );
};
