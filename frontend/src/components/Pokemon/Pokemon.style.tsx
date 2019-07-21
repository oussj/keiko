import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default {
  Intro: styled(Link)`
    width: 200px;
    border: 5px double black;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 5px 10px 5px 10px;
    line-height: 15px;
    text-decoration: none;
    color: inherit;

    .numberElement {
      font-weight: 600;
    }
    .turnIcon {
      position: absolute;
      left: 75px;
    }
    .imageContainer {
      position: relative;
      width: 100px;
    }
    .link {
      height: 100%;
      display: block;
      width: 100%;
    }
  `,
};
