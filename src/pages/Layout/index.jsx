import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <section>
      <Navigation />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Layout;