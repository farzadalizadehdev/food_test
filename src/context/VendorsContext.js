import React, { useState } from "react";

export const VendorsContext = React.createContext({
  filterList: [null],
  addFilterList: () => {},
  removeFilterList: () => {},
});

const VendorsContextProvider = (props) => {
  const [filters, setFilters] = useState([]);

  const handelAddFilter = (filter) => {
    const updatedFilterList = [...filters, +`${filter}000`];
    setFilters(updatedFilterList);
  };

  const handleRemoveFilter = (filter) => {
    const updatedFilterList = filters.filter(
      (item) => item !== +`${filter}000`
    );
    setFilters(updatedFilterList);
  };

  return (
    <VendorsContext.Provider
      value={{
        filterList: filters,
        addFilterList: handelAddFilter,
        removeFilterList: handleRemoveFilter,
      }}
    >
      {props.children}
    </VendorsContext.Provider>
  );
};

export default VendorsContextProvider;
