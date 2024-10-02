import { VNode } from "preact";
import Header from "../components/LayoutElements/Header.tsx";
import Footer from "../components/LayoutElements/Footer.tsx";

interface LayoutDefaultProps {
  children: VNode;
}

export default function LayoutDefault(props: LayoutDefaultProps) {
  return (
    <div class="flex flex-col justify-between flex-1 gap-4">
      <Header />

      <main id="main-content" class="flex-1 p-4">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
