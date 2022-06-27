import React from 'react'
import styled from 'styled-components/macro'


const Links = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    /* margin: 3rem; */
    @media (max-width: 990px) {
        display: none;
    }
`

const DropdownHome = styled.div`
    position: absolute;
    display: flex;
    width: max-content;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    background-color: whtie;
    color: white;
    top: 80px;
    visibility: hidden;
    background-color: black;
    opacity: 0;
    transition: visibility ease-in .5s, top .5s, opacity .4s;
    border-radius: 5px;
`

const Buttons = styled.div`
    padding: 15px 12px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-weight: 800;
    color: #333333;
    transition: color 0.3s ease-in-out;

    @media (max-width: 1200px) {
        padding: 14px 11px;
        font-size: 15px;
    }
    &:hover ${DropdownHome}{
        visibility: visible;
        top: 50px;
        color: white;
        opacity: 1;
    }
    &:hover{
        color: #4BCC5A;
        cursor: pointer;
        visibility: visible;
    }
`
const Ul = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: left;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    width: 200px;
   
`
const Li = styled.div`
color: white;
&:hover{
        color: #4BCC5A;
        cursor: pointer;
    }
`;

const NavbarLinks = () => {
  return (
    <Links>
        <Buttons style={{color:"#4BCC5A"}}>Home <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <Li>Home Page 1</Li>
                    <Li>Home Page 2</Li>
                    <Li>Home Page 3</Li>
                </Ul>
            </DropdownHome></Buttons>
        <Buttons>About</Buttons>
        <Buttons>Jobs <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <Li>Job List</Li>
                    <Li>Favourite Jobs</Li>
                    <Li>Job Details</Li>
                    <Li>Post A Job</Li>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Candidates <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <Li>Candidate List</Li>
                    <Li>Candidate Details</Li>
                    <Li>Single Resume</Li>
                    <Li>Submit Resume</Li>
                    <Li>Pricing</Li>
                    <Li>Candidate Dashboard</Li>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Pages <i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <Li>Company List</Li>
                    <Li>Company Details</Li>
                    <Li>Login Page</Li>
                    <Li>Create Account Page</Li>
                    <Li>Profile</Li>
                    <Li>Single Profile</Li>
                    <Li>404</Li>
                    <Li>FAQ</Li>
                    <Li>Terms And Conditions</Li>
                    <Li>Privacy Policy</Li>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Blogs &nbsp;<i class="fa-solid fa-angle-down"></i>
            <DropdownHome>
                <Ul>
                    <Li>Blog</Li>
                    <Li>Blog Details</Li>
                </Ul>
            </DropdownHome>
        </Buttons>
        <Buttons>Contact</Buttons>
    </Links>
  )
}

export default NavbarLinks