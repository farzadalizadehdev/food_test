import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initFetchVendors } from "../../store/vendors/actions";
import loadingImg from "../../assets/images/loading.svg";
import noDataImg from "../../assets/images/noData.svg";

const VendorsList = React.memo(function () {
  const [vendorList, setVendorList] = useState([]);
  const [sortingList, setSortingList] = useState(null);
  const { loading, vendors } = useSelector((state) => state.vendors);
  const [queryParams, setQueryParams] = useState({
    page: 1,
    page_size: "15",
    lat: "35.754",
    long: "51.328",
  });

  const dispatch = useDispatch();
  const observer = useRef();

  const lastVendorElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setQueryParams((prevParams) => {
            return {
              ...prevParams,
              page: prevParams.page + 1,
            };
          });
          dispatch(initFetchVendors(queryParams));
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    dispatch(initFetchVendors(queryParams));
  }, []);

  useEffect(() => {
    if (vendors) {
      const { finalResult } = vendors;
      const { filters } = vendors.extra_sections;
      setVendorList((prevData) => {
        return [...prevData, ...finalResult];
      });
      setSortingList(filters.top.data);
    }
  }, [vendors]);

  const toggleFilterHandler = () => {
    let filter = document.getElementById('filters')
    filter.classList.add("open")
    console.log('toggleFilterHandler');
  }

  return (
    <div className="vendors__wrapper">
      <div className="vendors__topfilter--wrapper">
        <select className="vendors__topfilter--options">
          {vendorList &&
            sortingList &&
            sortingList.map((sort) => {
              return (
                <option value={sort.value} key={sort.value}>
                  {sort.title}
                </option>
              );
            })}
        </select>
        <span onClick={toggleFilterHandler} className="vendors__topfilter--toggle">فیلترها</span>
      </div>
      {loading ? (
        <div className="loading">
          <img src={loadingImg} />
        </div>
      ) : null}
      <ul className="vendors__list">
        {vendorList && vendorList.length ? (
          vendorList.map((vendor, index) => {
            let { title, logo, rate, description, backgroundImage } =
              vendor.data;
            return (
              <li
                ref={lastVendorElementRef}
                key={index}
                className="vendors__item"
              >
                <img
                  className="vendors__item--cover"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <img className="vendors__item--logo" src={logo} />
                <h1 className="vendors__item--title">{title}</h1>
                <span className="vendors__item--rate">{rate}</span>
                <p className="vendors__item--des">{description}</p>
              </li>
            );
          })
        ) : (
          <div className="noData">
            <img src={noDataImg} />
            اطلاعاتی موجود نیست.
          </div>
        )}
      </ul>
    </div>
  );
});

export default VendorsList;
