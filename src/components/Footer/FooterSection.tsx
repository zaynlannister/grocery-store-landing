import styled from "styled-components";

const FooterSection = () => {
  return (
    <StyledFooter id="faq">
      <div data-aos="fade-left">
        <p className="text-[24px] font-[600]">Socials</p>
        <p className="text-[14px] w-[300px] mt-4 footer-description">
          Fresh groceries delivered to your doorstep. Convenient, reliable
          personalized experience.
        </p>
      </div>
      <div data-aos="fade-right" className="footer-socials mt-2">
        <div className="footer-socials__links ml-[-18px]">
          <img src="/img/facebook.svg" alt="img" />
          <img src="/img/inst.svg" alt="img" />
          <img src="/img/twitter.svg" alt="img" />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  border-top: 1px solid #e7e7e7;
  padding: 20px 0;
  .footer-socials {
    & img {
      width: 70px;
      height: 70px;
      cursor: pointer;
    }
    &__links {
      display: flex;
    }
  }

  @media (max-width: 450px) {
    .footer-description {
      width: 100%;
    }
  }
`;

export default FooterSection;
