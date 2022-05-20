import Filters from "../../components/Filters/Filters";
import VendorsList from "../../components/VendorsList/VendorsList";
import "./vendors.scss";

const Vendors = () => {
  return (
    <section className="vendors">
      <VendorsList />
      <Filters />
    </section>
  );
};
export default Vendors;
