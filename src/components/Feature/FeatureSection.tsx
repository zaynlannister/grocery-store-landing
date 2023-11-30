import styled from "styled-components";
import FeatureCard from "./FeatureCard";

const cardsData = [
  { number: 1, title: "150+", description: "Global Franchises" },
  { number: 2, title: "100%", description: "Orgnic Product" },
  { number: 3, title: "97%", description: "Happy Customer" },
  { number: 4, title: "10M+", description: "Monthly Sales" },
];

const FeatureSection = () => {
  return (
    <StyledFeature
      id="about"
      className="flex justify-between items-center py-12"
    >
      <div className="feature-section__img">
        <img src="/img/lemons.png" alt="img" />
      </div>
      <div>
        <p
          data-aos="fade-up"
          className="feature-section__title text-[42px] font-[600]"
        >
          Eat a banana for a healthy snack
        </p>
        <p data-aos="fade-up" className="py-4">
          You should eat at least five serves of vegetables and two serves of
          fruit each day. Choose different colours and varieties.
        </p>
        <div data-aos="fade-down" className="feature-cards__container">
          {cardsData.map((item, index) => (
            <FeatureCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </StyledFeature>
  );
};

const StyledFeature = styled.div`
  .feature-cards__container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 1075px) {
    .feature-section__img {
      display: none;
    }
  }

  @media (max-width: 530px) {
    <div className="" > </div > feature-section__title {
      font-size: 30px;
    }
  }

  @media (max-width: 440px) {
    .feature-cards__container {
      display: block;
    }
  }
`;

export default FeatureSection;
