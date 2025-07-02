import Link from 'next/link';

type NavLinkProps = {
  text: string;
  href: string;
};

const NavLink = ({ text, href }: NavLinkProps) => (
  <li>
    <Link href={href} className="hover:underline">
      {text}
    </Link>
  </li>
);

export default NavLink;
