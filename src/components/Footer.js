import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = styled.footer`
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
  margin: -1px 20px -5px 20px;

  &:hover {
    color: #6dc0d5;
  }

  &:active {
    color: white;
  }
`;

function FooterNavigation({ links }) {
  return (
    <Footer>
      {links.map(({ to, icon }) => (
        <FooterLink key={to} to={to} data-cy="nav">
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
