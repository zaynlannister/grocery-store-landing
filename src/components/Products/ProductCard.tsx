import styled from "styled-components";

interface IProduct {
  img: string;
  name: string;
  price: number;
  description: string;
}

const ProductCard = (props: IProduct) => {
  return (
    <StyledProduct>
      <img className="product-image" src={`/img/${props.img}.png`} alt="img" />
      <div>
        <p className="text-[22px] font-[600]">{props.name}</p>
        <p className="text-[30px] font-[600] text-[#59BE29]">
          ${props.price} kg
        </p>
        <p className="opacity-[0.7] mb-4">{props.description}</p>
        <button className="primary-button">Add To Cart</button>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  margin: 0 20px;
  text-align: center;
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 4px;

  .product-image {
    width: 200px;
    height: 180px;
    object-fit: contain;
    margin: 0 auto;
  }
`;

export default ProductCard;
