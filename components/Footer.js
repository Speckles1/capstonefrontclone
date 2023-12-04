import React from "react";
import Center from "./Center";
import{
FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkitems,
FooterLinkTitle,
FooterLink    
} from "./FooterElements"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
              <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkitems>
                    
                    <FooterLinkTitle>&copy; 2023 Harry's Toys ALL RIGHTS RESERVED </FooterLinkTitle>
                         
                  
                    </FooterLinkitems>
                   
                </FooterLinksWrapper>
              </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;