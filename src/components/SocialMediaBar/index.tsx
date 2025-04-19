import {
  socialBarStyles,
  socialLinkStyles,
  socialLinkTextStyles,
  socialIconStyles,
} from "./SocialMediaBar.styles";

const socialLinks = [
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
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-[#12F7D6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Twitter</title>
        <path d="M6 19L18 5M6 5l12 14" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-[#12F7D6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>LinkedIn</title>
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
        <path d="M7 10v7M12 10v7M7 7h.01M12 7h.01M17 10v7" strokeWidth="2" />
      </svg>
    ),
  },
];

const SocialMediaBar = () => (
  <div className={socialBarStyles()}>
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className={socialLinkStyles()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={socialIconStyles()}>{link.icon}</span>
        <span className={socialLinkTextStyles()}>{link.name}</span>
      </a>
    ))}
  </div>
);

export default SocialMediaBar;
