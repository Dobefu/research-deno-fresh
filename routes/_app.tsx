import { type PageProps } from "$fresh/server.ts";
import LayoutDefault from "../components/Layouts/LayoutDefault.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Research - Fresh</title>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <LayoutDefault>
          <Component />
        </LayoutDefault>
      </body>
    </html>
  );
}
