import styled from "styled-components";
import ProductCard from "./ProductCard";
import Slider, { Settings } from "react-slick";

interface IProduct {
  img: string;
  name: string;
  price: number;
  description: string;
}

const products = [
  {
    img: "cherries",
    name: "Cherries",
    price: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ",
  },
  {
    img: "amalaki",
    name: "Amalaki",
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ",
  },
  {
    img: "apple",
    name: "Apples",
    price: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ",
  },
  {
    img: "pear",
    name: "Pear",
    price: 14,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ",
  },
  {
    img: "dragonfruit",
    name: "Dragon Fruit",
    price: 88,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ",
  },
  {
    img: "acaiberry",
    name: "Acai Berry",
    price: 18,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ",
  },
  {
    img: "avocado",
    name: "Avocado",
    price: 33,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ",
  },
] as IProduct[];

const ProductsSection = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <StyledProductsSection id="menu">
      <div>
        <p
          data-aos="fade-right"
          className="products-title text-[40px] font-[600]"
        >
          Our purpose is to deliver fresh fruit to you
        </p>
        <p data-aos="fade-left">
          Fruits and vegetables contain many vitamins and minerals that are good
          for your health. These include vitamins
        </p>
      </div>
      <div className="my-12">
        <Slider {...sliderSettings}>
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </StyledProductsSection>
  );
};

const StyledProductsSection = styled.div`
  padding: 30px 0;

  @media (max-width: 530px) {
    .products-title {
      font-size: 30px;
    }
  }
`;

export default ProductsSection;
