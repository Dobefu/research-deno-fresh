import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Research - Fresh</title>
        <link rel="stylesheet" href="/main.css" />
      </head>

      <body class="min-h-full flex flex-col bg-gray-50">
        <Component />
      </body>
    </html>
  );
}
