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

const Table = styled.table`
  display: block;
  box-sizing: border-box;
  width: 600px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

const THead = styled.thead`
  display: flex;
  box-sizing: border-box;
  width: 600px;
  height: 40px;
  background: #2377c3;
`;

const Tr = styled.tr`
  display: flex;
  box-sizing: border-box;
  width: auto;
  height: 40px;
  border-left: 1px solid #bec2b8;
  border-right: 1px solid #bec2b8;
`;

const Th = styled.th`
  display: flex;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #bec2b8;
  box-sizing: border-box;
  font-family: 'Roboto';
  font-style: normal;
  font-wqeight: 500;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #fff;
`;

const TBody = styled.tbody`
  display: block;
  width: 600px;
  height: auto;
  background: #fff;
`;

const Td = styled.td`
  display: flex;
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #bec2b8;
  font-family: 'Roboto';
  font-style: normal;
  font-wqeight: 500;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #bec2b8;
`;

export { Container, Title, Table, THead, Tr, Th, TBody, Td };
