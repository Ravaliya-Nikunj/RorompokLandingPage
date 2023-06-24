import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/responsive.css";
import { Button, Form, Nav } from "react-bootstrap";
import { svgIcon } from "./svg";
import headerLogo from "./assets/images/logo/logo.svg";
function App() {
  return (
    <>
      <section className="heroSection position-relative">
        <div className="container">
          <header className="header pd-top pd-bottom d-flex align-items-center justify-content-between">
            <div className="heroLogo w-100">
              <img src={headerLogo} alt="header logo" className="w-inherit" />
            </div>
            <Nav className="headerNav">
              <Nav.Link href="#beranda">Beranda</Nav.Link>
              <Nav.Link href="#produk">Produk</Nav.Link>
              <Nav.Link href="#inspirasi">Inspirasi</Nav.Link>
            </Nav>
            <div className="headerCart d-flex align-items-center justify-content-center position-relative">
              {svgIcon.cartIcon}
              <span className="cartCount position-absolute d-flex align-items-center justify-content-center w-100 h-100"></span>
            </div>
          </header>
        </div>
        <div className="heroContent text-center mx-auto">
          <h1 className="text-white m-0 p-0">
            Buat Suasana Rumah Senyaman <span>Imajinasimu</span>
          </h1>
          <p className="pale-silver-color m-0 mt-3">
            Hidupkan suasana ruanganmu dengan berbagai produk dan koleksi
            pilihan furniture tebaik! Temukan furniture idamanmu sekarang
          </p>
          <Form.Group
            controlId="email"
            className="inputWrapper mx-auto mt-5 position-relative"
          >
            <Form.Control
              type="email"
              placeholder="cari furniture disini"
              className="custom-input"
            />
            <Button className="custom-button position-absolute">
              {svgIcon.searchIcon}
            </Button>
          </Form.Group>
        </div>

        <div className="pillowInfoIcon position-absolute">
          {svgIcon.circlePointIcon}
        </div>
        <div className="sofaInfoIcon position-absolute">
          {svgIcon.circlePointIcon}
        </div>
      </section>
    </>
  );
}

export default App;
