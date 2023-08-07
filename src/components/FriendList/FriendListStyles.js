import styled from 'styled-components';

const Container = styled.section`
  display: block;
  width: 100%;
  height: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #a2dac7;
`;

const Title = styled.h2`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  place-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-wqeight: 700;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #000;
`;

const List = styled.ul`
  display: block;
  list-style: none;
  width: 400px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background: #a2dac7;
`;

export { Container, Title, List };
