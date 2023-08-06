import styled from 'styled-components';

const Container=styled.section`
display:block;
padding-top:40px;
padding-bottom:40px;
width:100%;
height:auto;
background:#a2dac7;`;

const Title=styled.h2`
display:flex;
width:auto;
height:auto;
margin-top:20px;
margin-left:auto;
margin-right:auto;
place-content:center;
font-family:'Roboto';
font-style:normal;
font-wqeight:700;
text-transform:uppercase;
font-size:16px;
line-height:1.1;
letter-spacing: 0.02em;
color:#000;`;

const Description=styled.div`
display:block;
margin-left:auto;
margin-right:auto;
margin-top:20px;
width:340px;
height:auto;
padding:20px 20px 20px 20px;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
background:#F8F8F8;`;

const Avatar=styled.img`
display:flex;
margin-left:auto;
margin-right:auto;
margin-bottom:10px;
width:150px;
height:auto;
border-radius:50%;`;

const Name=styled.p`
display:flex;
margin-left:auto;
margin-right:auto;
place-content:center;
width:150px;
margin-top:40px;
font-family:'Roboto';
font-size:16px;
font-weight:700;
line-height:1.1;
letter-spacing: 0.02em;
color:#000;`;

const Tag=styled.p`
display:flex;
margin-left:auto;
margin-right:auto;
place-content:center;
width:150px;
font-family:'Roboto';
font-style:normal;
font-wqeight:500;
font-size:16px;
line-height:1.1;
letter-spacing: 0.02em;
color:#bec2b8;
margin-top:20px;`;

const Location=styled.p`
display:flex;
margin-left:auto;
margin-right:auto;
place-content:center;
width:150px;
font-family:'Roboto';
font-style:normal;
font-wqeight:500;
font-size:16px;
line-height:1.1;
letter-spacing: 0.02em;
color:#bec2b8;
margin-top:20px;`;

const Stats=styled.ul`
display:flex;
list-style:none;
margin-left:auto;
margin-right:auto;
margin-top:0;
width:340px;
height:auto;
padding:20px 20px 20px 20px;
gap:60px;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
background:#b4fee7;`;

const Label=styled.span`
display:flex;
width:auto;
text-align:left;
font-family:'Roboto';
font-style:normal;
font-wqeight:500;
font-size:16px;
line-height:1.1;
letter-spacing: 0.02em;
color:#bec2b8;`;

const Quantity=styled.span`
display:flex;
width:auto;
height:auto;
margin-top:10px;
text-align:left;
justify-content:center;
font-family:'Roboto';
font-size:16px;
font-weight:700;
line-height:1.1;
letter-spacing: 0.02em;
color:#000;`;

const Li=styled.li`display:block;
width:auto;
height:aoto;
justify-content:center;`;

export{Container,Title,Description,Avatar,Name,Tag,Location,Stats,Label,Quantity,Li}