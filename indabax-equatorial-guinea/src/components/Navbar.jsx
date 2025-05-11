const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-green-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="IndabaX Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-white">
            IndabaX - Equatorial Guinea
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
