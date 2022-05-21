import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { VendorsContext } from "../../context/VendorsContext";

const Filters = (props) => {
  const [filterList, setFilterList] = useState(null);
  const { vendors } = useSelector((state) => state.vendors);
  const vendorContext = useContext(VendorsContext);

  useEffect(() => {
    if (vendors) {
      const { filters } = vendors.extra_sections;
      setFilterList(filters.sections);
    }
  }, [vendors]);

  const filterListHandler = (e) => {
    let filterOption = e.target.value;
    let deliveryFee;
    switch (filterOption) {
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
    if (e.target.checked) {
      vendorContext.addFilterList(deliveryFee);
    } else {
      vendorContext.removeFilterList(deliveryFee);
    }
  };
  const closeFilterHandler = () => {
    let filter = document.getElementById("filters");
    filter.classList.remove("open");
  };
  return (
    <aside id="filters" className="vendors__filters">
      <div>
        <span onClick={closeFilterHandler} className="vendors__filters--close">
          بستن
        </span>
        {filterList &&
          filterList.map((filter, index) => {
            if (filter.section_name === "deliveryFee") {
              return (
                <section className="vendors__filters--section" key={index}>
                  <h1
                    className="vendors__filters--section--title"
                    key={filter.section_name}
                  >
                    {filter.section_name_fa}
                  </h1>
                  <div className="vendors__filters--section--items">
                    {filter.data.map((item) => {
                      return (
                        <label
                          className="vendors__filters--section--item"
                          key={item.value}
                        >
                          <input
                            className="vendors__filters--section--input"
                            onClick={filterListHandler}
                            type="checkbox"
                            value={item.value}
                          />
                          <span className="vendors__filters--section--lable">
                            {item.title}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </section>
              );
            }
          })}
      </div>
    </aside>
  );
};
export default Filters;
