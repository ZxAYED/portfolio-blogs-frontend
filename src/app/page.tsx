import Footer from "@/components/shared/Footer";
import NavMenu from "@/components/shared/NavMenu";
import Home from "./home/page";

export default function Provider() {
  return (
    <div>
      <NavMenu></NavMenu>

      <Home></Home>

      <Footer></Footer>
    </div>
  );
}
