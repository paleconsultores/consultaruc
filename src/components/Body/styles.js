import styled from "styled-components";
import { animation, rotateHexImgKeyFrames } from "../../styles/GlobalStyles";

export const ImgHex = styled.img`
  position: absolute;
  transform-origin: 43% 33%;
  ${animation({keyFrames: rotateHexImgKeyFrames, duration: '10s', timing_function: 'linear', iteration_count: 'infinite'})}
`;

export const ImgHexS = styled.img`
  position: absolute;
  transform-origin: 50% 50%;
  ${animation({keyFrames: rotateHexImgKeyFrames, duration: '10s', timing_function: 'linear', iteration_count: 'infinite'})}
`;