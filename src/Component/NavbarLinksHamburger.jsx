import React, {useState} from 'react'
import styled from 'styled-components/macro'

const HamburgerContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
`
const Links = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: none;
    @media (max-width: 990px) {
        display: block;
        width: 100%;
        margin-left: 20px;
        margin-right: 10px;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px 0px;
    border-top: .5px solid #dfdfdf;
`
const Button = styled.div``
const NavbarLinksHamburger = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <HamburgerContainer>
            <Links>
                <Buttons>
                    <Button>Home</Button>
                    <Button>+</Button>
                </Buttons>
                <Buttons>About</Buttons>
                <Buttons>Jobs
                </Buttons>
                <Buttons>Candidates
                </Buttons>
                <Buttons>Pages
                </Buttons>
                <Buttons>Blogs
                </Buttons>
                <Buttons>Contact</Buttons>
            </Links>
        </HamburgerContainer>
    )
}

export default NavbarLinksHamburger