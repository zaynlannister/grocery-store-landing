import React from "react";
import styled from "styled-components";
import BurgerMenu from "../Burger/BurgerMenu";
import MobileMenu from "../Burger/MobileMenu";

const HeaderSection = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };

  return (
    <StyledHeader className="flex justify-between items-center">
      <MobileMenu menuOpen={open} toggleMenu={toggleMenu} />
      <div data-aos="fade-right">
        <img width={80} height={70} src="/img/logo.jpg" alt="" />
      </div>
      <div data-aos="fade-down" className="flex gap-10 header-nav">
        <a className="custom-link" href="#menu">
          Menu
        </a>
        <a className="custom-link" href="#about">
          About us
        </a>
        <a className="custom-link" href="#menu">
          Fruits
        </a>
        <a className="custom-link" href="#menu">
          Pricing
        </a>
      </div>
      <div className="flex justify-end items-center gap-8">
        <button data-aos="fade-left" className="primary-button">
          Sign Up
        </button>
        <div className="header-burger hidden">
          <BurgerMenu menuOpen={open} toggleMenu={toggleMenu} />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 20px 0;
  @media (max-width: 745px) {
    .header-nav {
      display: none;
    }
    .header-burger {
      display: block;
    }
  }
`;

export default HeaderSection;
