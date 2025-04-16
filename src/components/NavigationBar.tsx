// NavigationBar.tsx
const navItems = [
  { label: "About me", icon: "user" },
  { label: "Skills", icon: "code" },
  { label: "Works", icon: "monitor" },
  { label: "Blogs", icon: "edit" },
  { label: "Contact", icon: "mail" },
];

const NavigationBar = () => (
  <nav className="flex flex-col gap-6 bg-[#1A1E23] border border-white rounded-[40px] p-3 absolute left-16 top-16 z-10">
    {navItems.map((item) => (
      <div
        key={item.label}
        className="flex flex-row items-center gap-2 px-3 py-2 rounded-[40px] hover:bg-white/10 transition-colors cursor-pointer"
      >
        {/* Icon-Placeholder, später SVG/Icon-Komponente einfügen */}
        <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#292F36]">
          {item.icon.charAt(0).toUpperCase()}
        </span>
        <span className="text-white font-mono text-base">{item.label}</span>
      </div>
    ))}
  </nav>
);

export default NavigationBar;
