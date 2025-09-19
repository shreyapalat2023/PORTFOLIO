export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-white to-blue-100 py-3">
      <div className="text-center text-sm">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <a
          href="https://github.com/jayshah" // change this to your profile link
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:underline"
        >
          Shreya Palat
        </a>
      </div>
    </footer>
  );
}
