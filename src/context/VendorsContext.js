import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initFetchVendors } from "../store/vendors/actions";

export const VendorsContext = React.createContext({
  data: [null],
  onFilterVendors: () => {},
  getVendorsData: () => {},
});

const VendorsContextProvider = (props) => {
  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.vendors);
  const [data, setData] = useState();
  const queryParams = {
    page: "0",
    page_size: "15",
    lat: "35.754",
    long: "51.328",
  };

  useEffect(() => {
    dispatch(initFetchVendors(queryParams));
  }, []);

  useEffect(() => {
    if (vendors) {
      setData(vendors);
    }
  }, [vendors]);

  const handelFilterVendors = (filterOptions) => {
    let deliveryFee;
    switch (filterOptions) {
      case "delivery_fee_until_0":
        deliveryFee = 0;
        break;
      case "delivery_fee_until_5":
        deliveryFee = 5;
        break;
      case "delivery_fee_until_10":
        deliveryFee = 10;
        break;
      case "delivery_fee_until_20":
        deliveryFee = 20;
        break;
      default:
        deliveryFee = 0;
        break;
    }
    const { finalResult } = vendors.data;
    const filteredVendors = finalResult.filter(
      (item) => item.data.deliveryFee <= +`${deliveryFee}000`
    );
    // setData(vendors);
    setData((prevData) => {
      return {
        ...prevData,
        data: {
          ...prevData.data,
          finalResult: filteredVendors,
        },
      };
    });
  };

  const handleGetVendorsData = (params) => {
    dispatch(initFetchVendors(params));
  };

  return (
    <VendorsContext.Provider
      value={{
        data: data,
        onFilterVendors: handelFilterVendors,
        getVendorsData: handleGetVendorsData,
      }}
    >
      {props.children}
    </VendorsContext.Provider>
  );
};

export default VendorsContextProvider;
