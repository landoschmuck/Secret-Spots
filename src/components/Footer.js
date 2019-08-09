import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = styled.footer`
  height: 65px;
  background: #45a2a2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  bottom: 0%;
  z-index: 1;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
  border-top: solid 1px grey;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const FooterLink = styled(Link)`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  margin: 35px 20px 35px;

  &:hover {
    background-color: teal;
    color: black;
  }

  &:active {
    background-color: teal;
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
  });

  return (
    <Footer visible={scrollState.visible}>
      {links.map(({ to, icon }) => (
        <FooterLink key={to} to={to}>
          <i className={`fas ${icon}`} />
        </FooterLink>
      ))}
    </Footer>
  );
}

FooterNavigation.propTypes = {
  links: PropTypes.array.isRequired
};

export default FooterNavigation;
