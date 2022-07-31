import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Link href="/">
        <Logo onClick={() => setIsOpen(false)}>
          Tsotetsi <span>Masters</span>
        </Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/">
          <MenuLink onClick={() => setIsOpen(!isOpen)}>Home</MenuLink>
        </Link>
        <Link href="/about">
          <MenuLink onClick={() => setIsOpen(!isOpen)}>About</MenuLink>
        </Link>
        <Link href="#">
          <MenuLink onClick={() => setIsOpen(!isOpen)}>Services</MenuLink>
        </Link>
        <Link href="#">
          <MenuLink onClick={() => setIsOpen(!isOpen)}>Contact</MenuLink>
        </Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;

  @media (max-width: 768px) {
    padding: 0 0rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: max-height 0.3s ease-in;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67ec98;
  transition: all 3s ease-in;
  font-size: 0.9rem;

  :hover {
    color: #7b7fda;
  }
  @media (max-width: 768px) {
    transition: all 3s ease-out;
    display: block;
    width: 100%;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;
export default Navbar;
