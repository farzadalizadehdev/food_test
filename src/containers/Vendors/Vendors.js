import Filters from "../../components/Filters/Filters";
import VendorsList from "../../components/VendorsList/VendorsList";
import VendorsContextProvider from "../../context/VendorsContext";
import "./vendors.scss";

const Vendors = () => {
  return (
    <section className="vendors">
      <VendorsContextProvider>
        <VendorsList />
        <Filters />
      </VendorsContextProvider>
    </section>
  );
};
export default Vendors;
