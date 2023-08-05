import styled from 'styled-components';

import PropTypes from "prop-types";



const Statistic=styled.section`
display:block;
width:auto;
height:auto;

padding-top:40px;
padding-bottom:40px;
background:#a2dac7;`;

const Title=styled.h2`
display:flex;
width:400px;
height:auto;
margin-left:auto;
margin-right:auto;
place-content:center;
font-family:'Roboto';
font-style:normal;
font-wqeight:500;
font-size:16px;
text-transform:uppercase;
line-height:1.1;
color:#000;`;

const Stat=styled.ul`
display:flex;
list-style:none;
width:200px;
height:auto;
margin-left:auto;
margin-right:auto;
place-content:center;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
margin-top:20px;`;

const LiDoc=styled.li`display:block;
background:#12e3e1;`;
const LiPdf=styled.li`display:block;
background:#9c45bc;`;
const LiMp=styled.li`display:block;
background:#ff3412;`;
const LiPsd=styled.li`display:block;
background:#2669ee;`;
const LiPd=styled.li`display:block;
background:#f9c95b;`;

const Label=styled.span`
display:flex;
width:100px;
height:auto;
margin-top:10px;
place-content:center;
font-family:'Roboto';
font-style:normal;
font-wqeight:500;
font-size:16px;
line-height:1.1;
letter-spacing: 0.02em;
color:#000;`;

const Percentage=styled.span`
display:flex;
width:100px;
height:auto;
margin-top:10px;
margin-bottom:10px;
place-content:center;
font-family:'Roboto';
font-style:normal;
font-wqeight:500;
font-size:16px;
line-height:1.1;
letter-spacing: 0.02em;
color:#000;`;

const Statistics=({title,stats})=>(

<Statistic>
  <Title>{title}</Title>

  <Stat>
    <LiDoc key={stats[0].id}>
      <Label>{stats[0].label}</Label>
      <Percentage>{stats[0].percentage}</Percentage>
    </LiDoc>
    <LiPdf key={stats[1].id}>
      <Label>{stats[1].label}</Label>
      <Percentage>{stats[1].percentage}</Percentage>
    </LiPdf>
    <LiMp key={stats[2].id}>
      <Label>{stats[2].label}</Label>
      <Percentage>{stats[2].percentage}</Percentage>
    </LiMp>
    <LiPsd key={stats[3].id}>
      <Label>{stats[3].label}</Label>
      <Percentage>{stats[3].percentage}</Percentage>
    </LiPsd>
    <LiPd key={stats[4].id}>
      <Label>{stats[4].label}</Label>
      <Percentage>{stats[4].percentage}</Percentage>
    </LiPd>
  </Stat>
</Statistic>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
  };

  export {Statistics} 