export default function Footer() {
  return (
    <footer className="bg-navy py-6 p-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-base leading-loose text-white md:text-left font-mono">
          Built by{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-yellow-500 hover:text-indigo-500 transition duration-300 underline"
          >
            Mihir
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/mixh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-300 hover:text-yellow-500 transition duration-300 no-underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
