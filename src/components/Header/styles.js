import styled from "styled-components";
import { animation, showBrandKeyFrames, sideSlideKeyFrames } from "../../styles/GlobalStyles";

export const HeaderS = styled.header`
  position: absolute;
  z-index: 1;
  width: 100%;
  background: indianred;
`;

export const Nav = styled.nav`
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
`;

export const DivMarca = styled.div`
  vertical-align: middle;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  /* &:hover {
    ${animation({keyFrames: sideSlideKeyFrames, duration: '2s', iteration_count: '2', direction: 'alternate'})};
  } */
`;

export const SpanText = styled.span`
  &:nth-of-type(2) {
      animation-delay: .05s;
  }
  &:nth-of-type(3) {
      animation-delay: .1s;
  }
  &:nth-of-type(4) {
      animation-delay: .15s;
  }
  &:nth-of-type(5) {
      animation-delay: .2s;
  }
  &:nth-of-type(6) {
      animation-delay: .25s;
  }
  &:nth-of-type(7) {
      animation-delay: .3s;
  }
  &:nth-of-type(8) {
      animation-delay: .35s;
  }
  &:nth-of-type(9) {
      animation-delay: .4s;
  }
  &:nth-of-type(10) {
      animation-delay: .45s;
  }
  &:nth-of-type(11) {
      animation-delay: .5s;
  }
  &:nth-of-type(12) {
      animation-delay: .55s;
  }
  &:nth-of-type(13) {
      animation-delay: .6s;
  }
  &:nth-of-type(14) {
      animation-delay: .65s;
  }
  &:nth-of-type(15) {
      animation-delay: .7s;
  }
  &:nth-of-type(16) {
      animation-delay: .75s;
  }
  &:nth-of-type(17) {
      animation-delay: .8s;
  }
  &:nth-of-type(18) {
      animation-delay: .85s;
  }
  &:nth-of-type(19) {
      animation-delay: .9s;
  }
  &:nth-of-type(20) {
      animation-delay: .95s;
  }
  position: relative;
  display: inline-block;
  ${animation({keyFrames: showBrandKeyFrames, duration: '2s', fill_mode: 'forwards'})};
`;

export const Em = styled.em`
  font: inherit;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;

  & li {
    padding: 10px;
  }
`;

export const SpanHMenu = styled.span`
  width: 35px;
  height: 5px;
  background: black;
  margin: 6px 0;
  padding: 0;
  border-radius: 50%;
  font: inherit 100%;
  display: block;
`;

export const DivHMenu = styled.div`
  visibility: hidden;
`;