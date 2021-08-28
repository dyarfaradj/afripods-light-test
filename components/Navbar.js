import Link from "next/link";
import styled from "styled-components";

const navLinks = [
  { title: "Podcasts", id: "podcasts" },
  //   { title: "FAQ", id: "faq" },
  //   { title: "Contact", id: "contact" },
];

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 25px 0 25px;
  background-color: #20b7f8;
  color: white;
`;

const Title = styled.h1`
  cursor: pointer;
`;

const NavLinkWrapper = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  padding-right: 14px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link href="/">
        <Title>Afripods</Title>
      </Link>
      <NavLinkWrapper>
        {navLinks.map((n) => (
          <Link href="/" key={n.id}>
            <NavLink>{n.title}</NavLink>
          </Link>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
