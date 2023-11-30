import styled from "styled-components";

const HeaderContent = () => {
  return (
    <StyledHeaderContent className="flex items-center">
      <div className="header-content__container py-20">
        <p className="text-[25px]">FRESH FRUIT FOR YOU</p>
        <p className="header-content__title text-[100px] font-bold text-[#59BE29] leading-[108px]">
          Eat as you want
        </p>
        <p className="py-6">
          Fruit and vegetables should be an important part of your daily diet.
          They are naturally good and contain vitamins and minerals that can
          help to keep you healthy. .
        </p>
        <div className="flex gap-4">
          <button className="primary-button">Add To Cart</button>
          <button className="primary-button">Learn more</button>
        </div>
      </div>
      <div>
        <img
          className="header-content__img"
          style={{ width: "1000px", height: "400px" }}
          src="/img/header-bg.png"
          alt="img"
        />
      </div>
    </StyledHeaderContent>
  );
};

const StyledHeaderContent = styled.div`
  .header-content__img {
    object-fit: cover;
  }
  @media (max-width: 1075px) {
    .header-content__img {
      width: 600px;
      object-fit: contain;
    }
    & {
      flex-direction: column;
    }
  }
  @media (max-width: 850px) {
    .header-content__title {
      font-size: 60px;
    }
    .header-content__container {
      padding: 20px 0;
    }
    .header-content__img {
      margin-top: 20px;
    }
  }
  @media (max-width: 500px) {
    .header-content__title {
      font-size: 40px;
      line-height: unset;
    }
  }
`;

export default HeaderContent;
