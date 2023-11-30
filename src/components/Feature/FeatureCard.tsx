import styled from "styled-components";

interface IFeatureCard {
  number: number;
  title: string;
  description: string;
}

const FeatureCard = (props: IFeatureCard) => {
  return (
    <StyledFeatureCard className="flex items-center gap-4">
      <div className="feature-card__number font-[700] text-[25px] text-[#82CD5E]">
        {props.number}
      </div>
      <div className="feature-card__content">
        <p className="feature-card__title text-[#82CD5E] border-b-[3px] border-b-[#82CD5E] text-[40px]">
          {props.title}
        </p>
        <p className="feature-card__description">{props.description}</p>
      </div>
    </StyledFeatureCard>
  );
};

const StyledFeatureCard = styled.div`
  .feature-card {
    &__number {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 43px;
      height: 43px;
      box-shadow: 0px 12px 18px 0px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 515px) {
    .feature-card {
      &__number {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 440px) {
    margin-bottom: 20px;
    .feature-card {
      &__content,
      &__title {
        width: 100%;
      }
    }
  }
`;

export default FeatureCard;
