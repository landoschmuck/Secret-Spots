import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = styled.footer`
  height: 55px;
  background: linear-gradient(
    90deg,
    rgba(3, 86, 135, 1) 0%,
    rgba(7, 118, 184, 1) 49%,
    rgba(7, 150, 235, 1) 100%
  );
  width: 100vw;
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
    color: #6dc0d5;
  }

  &:active {
    color: white;
  }
`;

function FooterNavigation({ links }) {
  const [scrollState, setScrollState] = React.useState({
    visible: true,
    prevScrollpos: window.pageYOffset
  });
  const [clickable, setClickable] = React.useState("all");

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

  function handleAnimationEnd() {
    if (scrollState.visible === true) {
      setClickable("all");
    } else {
      setClickable("none");
    }
  }

  return (
    <Footer
      visible={scrollState.visible}
      onAnimationEnd={handleAnimationEnd}
      clickable={clickable}
    >
      {links.map(({ to, icon }) => (
        <FooterLink key={to} to={to}>
          <i className={`fas ${icon}`} />
        </FooterLink>
      ))}
    </Footer>
  );
}

FooterNavigation.propTypes = {
  links: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired
};

export default FooterNavigation;
