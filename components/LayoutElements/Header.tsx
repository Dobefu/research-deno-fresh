export default function Header() {
  return (
    <header class="p-4 py-2 shadow-md bg-white flex items-center justify-center gap-4">
      <a href="/other-page">Other page</a>

      <a href="/" class="text-lg flex flex-col items-center gap-2 font-medium">
        <img
          class="w-12 h-12"
          src="/logo.svg"
          alt="The Dobefu logo"
        />

        Research - Fresh
      </a>

      <a href="/other-page">Other page</a>
    </header>
  );
}
