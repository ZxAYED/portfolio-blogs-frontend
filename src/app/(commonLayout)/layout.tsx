import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavMenu";
import authOptions from "@/lib/authOpions";
import { getServerSession } from "next-auth";
import "../globals.css";

export default async function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <NavBar session={session}></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
}
