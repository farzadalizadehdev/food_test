import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Filters = (props) => {
  const [filterList, setFilterList] = useState(null);
  const { vendors } = useSelector((state) => state.vendors);

  useEffect(() => {
    if (vendors) {
      const { filters } = vendors.extra_sections;
      setFilterList(filters.sections);
    }
  }, [vendors]);

  const filterListHandler = (e) => {
    props.filterList()
    // let filterOption = e.target.value;
    // if (e.target.checked) {
    //   vendorContext.onFilterData(filterOption);
    // } else {
    //   vendorContext.getAllData();
    // }
  };

  return (
    <aside id="filters" className="vendors__filters">
      <div>
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
