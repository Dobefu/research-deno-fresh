import Header from "../LayoutElements/Header.tsx";
import Footer from "../LayoutElements/Footer.tsx";
import { VNode } from "preact";

interface LayoutDefaultProps {
  children: VNode;
}

export default function LayoutDefault(props: LayoutDefaultProps) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
