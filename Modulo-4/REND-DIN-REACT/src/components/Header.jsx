import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <Carousel fade interval={3000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R007.png?resize=2880:1612&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"
          alt="Accesorios Apple"
        />
        <Carousel.Caption className="mb-3 text-start rounded p-3">
          <h3 className="text-black font-archivo-black h1">TUS ACCESORIOS</h3>
          <p className="font-montserrat text-black h3">En el lugar correcto.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R285.png?resize=2880:1612&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"
          alt="Compras Apple"
        />
        <Carousel.Caption className="mb-3 text-start rounded p-3">
          <h3 className="text-white font-archivo-black h1">TUS COMPRAS</h3>
          <p className="font-montserrat text-white h3">En el lugar correcto.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
