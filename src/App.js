// import Vendors from "./containers/Vendors/Vendors";
import Header from "./components/Header/Header";
import RoutesWithNavigation from "./Routes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <RoutesWithNavigation />
      </main>
    </div>
  );
};
export default App;
