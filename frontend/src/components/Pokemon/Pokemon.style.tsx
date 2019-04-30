import styled from 'styled-components';

export default {
  Intro: styled.div`
    width: 200px;
    border: 5px double black;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    line-height: 15px;

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
  `,
};
