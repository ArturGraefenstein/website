const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-[#12F7D6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Instagram</title>
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.5" fill="#12F7D6" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-[#12F7D6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Discord</title>
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
        <path d="M7 17c1.5-1 8.5-1 10 0" strokeWidth="2" />
        <circle cx="9" cy="10" r="1" fill="#12F7D6" />
        <circle cx="15" cy="10" r="1" fill="#12F7D6" />
      </svg>
    ),
  },
  {
    name: "Github",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-[#12F7D6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Github</title>
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M9 14c.5.5 1.5.5 2 0s1.5-.5 2 0" strokeWidth="2" />
        <circle cx="9" cy="10" r="1" fill="#12F7D6" />
        <circle cx="15" cy="10" r="1" fill="#12F7D6" />
      </svg>
    ),
  },
];

const SocialMediaBar = () => (
  <div className="flex flex-row gap-8">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="flex flex-row items-center gap-2 text-white hover:text-[#12F7D6]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
        <span className="text-base font-mono">{link.name}</span>
      </a>
    ))}
  </div>
);

export default SocialMediaBar;
