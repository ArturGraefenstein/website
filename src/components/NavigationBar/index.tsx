import { navBarStyles, navItemStyles, navIconStyles, navLabelStyles } from "./NavigationBar.styles";

const navItems = [
  { label: "About me", icon: "user" },
  { label: "Skills", icon: "code" },
  { label: "Works", icon: "monitor" },
  { label: "Blogs", icon: "edit" },
  { label: "Contact", icon: "mail" },
];

const NavigationBar = () => (
  <nav className={navBarStyles()}>
    {navItems.map((item) => (
      <div
        key={item.label}
        className={navItemStyles()}
      >
        {/* Icon-Placeholder, später SVG/Icon-Komponente einfügen */}
        <span className={navIconStyles()}>
          {item.icon.charAt(0).toUpperCase()}
        </span>
        <span className={navLabelStyles()}>{item.label}</span>
      </div>
    ))}
  </nav>
);

export default NavigationBar;
