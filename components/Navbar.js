import styled from "styled-components";
import Link from "components/Link";

const navLinks = [{ title: "Podcasts", id: "podcasts" }];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 0 25px 0 25px;
  background-color: #20b7f8;
  color: white;
`;

const NavbarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  justify-content: space-between;
  align-items: center;
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
    <Wrapper>
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
    </Wrapper>
  );
};

export default Navbar;
