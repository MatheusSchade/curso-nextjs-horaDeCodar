import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from '../../styles/components/MainContainer.module.css'

interface ChildrenProp {
  children: ReactNode
}

export default function MainContainer({ children }: ChildrenProp) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </>
  )
}