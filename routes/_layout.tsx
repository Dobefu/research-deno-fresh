import Header from "../components/LayoutElements/Header.tsx";
import Footer from "../components/LayoutElements/Footer.tsx";
import { defineLayout } from "$fresh/server.ts";

export default defineLayout((_req, ctx) => {
  return (
    <div class="flex flex-col justify-between flex-1 gap-4">
      <Header />

      <main id="main-content" class="flex-1 p-4">
        <ctx.Component />
      </main>

      <Footer />
    </div>
  );
});
