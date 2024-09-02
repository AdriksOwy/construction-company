import Link from "next/link";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="duration-200 hover:translate-y-1 hover:text-amber-400"
  >
    {children}
  </Link>
);

export default NavLink;
