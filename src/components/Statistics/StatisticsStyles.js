import styled from 'styled-components';

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


const Li=styled.li`display:block;
background:${getRandomHexColor}`;

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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export{Statistic,Title,Stat,Li,Label,Percentage}