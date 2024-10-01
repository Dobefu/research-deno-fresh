import Header from "../LayoutElements/Header.tsx";
import Footer from "../LayoutElements/Footer.tsx";
import { VNode } from "preact";

interface LayoutDefaultProps {
  children: VNode;
}

export default function LayoutDefault(props: LayoutDefaultProps) {
  return (
    <div class="flex flex-col justify-between flex-1 gap-8">
      <Header />

      <main id="main-content" class="flex-1">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
