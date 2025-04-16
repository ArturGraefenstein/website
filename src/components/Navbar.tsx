const Navbar = () => (
  <nav className="flex flex-row gap-8 md:gap-8">
    <a
      href="/"
      className="text-xl md:text-2xl font-mono text-[#12F7D6] hover:underline"
    >
      Home
    </a>
    <a
      href="/blogs"
      className="text-xl md:text-2xl font-mono text-white hover:underline"
    >
      Blogs
    </a>
  </nav>
);

export default Navbar;
