import styled, { css } from 'styled-components';

const removeMargin = css`
  margin: 0;
`;

export const Container = styled.div`
  background-color: #f9f6f4;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
`;

export const Title = styled.h1`
  ${removeMargin}
  font-size: 20px;
`;

export const SubTitle = styled.h2`
  ${removeMargin}
  font-size: 16px;
  margin-top: 10px;
`;

export const Paragraph = styled.p`
  ${removeMargin}
  margin-bottom: 10px;
`;

export const Time = styled.time`
  font-size: 12px;
`;

export const Tag = styled.data`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 5px 10px;
  display: inline-block;
`;

export const Wrapper = styled.section`
  padding: 10px;
`;
