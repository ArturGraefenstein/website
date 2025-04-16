const SearchBar = () => (
  <div className="flex items-center bg-white rounded-full px-4 py-1 w-40 md:w-56">
    <svg
      className="w-5 h-5 text-[#292F36]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <title>Suche</title>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <input
      type="text"
      placeholder="Search..."
      className="ml-2 bg-transparent outline-none text-[#292F36] placeholder:text-gray-400 w-full"
    />
  </div>
);

export default SearchBar;
