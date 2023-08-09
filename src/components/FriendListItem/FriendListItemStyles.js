import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 20px;
  background: #fff;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

const Status = styled.p`
  display: flex;
  width: auto;
  height: auto;
`;

const Avatar = styled.img`
  display: flex;
  width: 48px;
  height: auto;
  object-fit: cover;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Name = styled.p`
  display: flex;
  margin-left: 20px;
  width: auto;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-wqeight: 500;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #000;
`;

const Point = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: auto;
  margin-bottom: auto;

  background: ${props => (props.state ? '#33cc0a' : '#ff3412')};
`;

export { Li, Status, Avatar, Name, Point };
