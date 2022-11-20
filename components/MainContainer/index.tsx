import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface ChildrenProp {
  children: ReactNode
}

export default function MainContainer({ children }: ChildrenProp) {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}