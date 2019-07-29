import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavButton from "./components/NavButton";

const Footer = styled.footer`
  height: 80px;
  background: #111;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 90%;
  z-index: 1;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
  border-top: solid 1px white;
`;

const FooterLink = styled(Link)`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  &:active {
    background-color: #ff5a36;
    color: white;
  }
`;

function FooterNavigation({ links }) {
  const [scrollState, setScrollState] = React.useState({
    visible: true,
    prevScrollpos: window.pageYOffset
  });

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    setScrollState({
      visible: scrollState.prevScrollpos > currentScrollPos,
      prevScrollpos: currentScrollPos
    });
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollState]);

  return (
    <Footer visible={scrollState.visible}>
      {links.map(({ to, title }) => (
        <FooterLink key={to} to={to}>
          {title}
        </FooterLink>
      ))}
    </Footer>
  );
}

FooterNavigation.propTypes = {
  links: PropTypes.array.isRequired
};

export default FooterNavigation;
