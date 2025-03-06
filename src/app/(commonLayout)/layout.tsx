import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavMenu";
import "../globals.css";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
}
