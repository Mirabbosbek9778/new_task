import styled from "styled-components";

const Content = styled.select`
  border: none;
  background-color: #ffc017;
  &:hover {
    border: none !important;
  }
`;

const ContentItem = styled.h1`
  color: #000;
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export { Content, ContentItem };
