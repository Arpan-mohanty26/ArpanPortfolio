export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-5xl mx-auto px-4">
        <p>
          © {new Date().getFullYear()} Arpan Kumar Mohanty. All rights reserved.
        </p>
        <p className="mt-2">
          Built with ❤️ By Arpan
        </p>
      </div>
    </footer>
  );
}
