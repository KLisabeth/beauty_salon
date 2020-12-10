import styled from 'styled-components';

export const Navigation = styled.nav`
background:#c2c2c0;
height: 80px;
display:flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index:10;

@media screen and (max-width: 960px){
    transition: 08s all ease;
}
`
export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
height: 80px;
z-index:1;
width: 100%;
padding: 0 24px;
max-width: 1100pix;
`
export const NavMenu = styled.div`
display: flex;
justify-content: space-evenly;
list-style:none;
text-align: center;
margin-right: 22px;

@media screen and (max-width:760px){
    display:none;  
}
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 760px){
    display: block;
    position: absolute;
    top: 0;
    right: 5px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
