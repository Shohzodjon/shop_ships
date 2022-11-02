import "./App.css";
import Navbar from "./page/Navbar";
import CaterCard from "./component/CaterCard";
import cardImg from "./assets/imges/card_img.png";
import tourImg from "./assets/imges/tour-img.png";
import clockImg from "./assets/imges/clock.svg";
import monutainImg from "./assets/imges/mountains.svg";
import DiscountCard from "./component/DicountCard";
import TourCard from "./component/TourCard";
import FaqComp from "./component/FaqComponent";
function App() {
  const clickBtn = () => {
    alert("Hie");
  };
  const arr = [
    { text: "Бочка Смерти" },
    { text: " Пляж Серебряный и Золотой" },
    { text: "Пляж Инжир" },
    { text: "Мыс Айя" },
    { text: 'Горный "Затерянный мир' },
  ];
  return (
    <div className="App">
      <Navbar />
      <h2 className="text-3xl font-bold underline">Lorem </h2>
      <CaterCard
        card_img={cardImg}
        card_text="Princess 58 Diamond"
        location="Севатополь"
        user_count="10"
        cater_speed="16.3 м"
        confortable="Люкс"
        discount_price="5 000 ₽/час"
        price="8 000 ₽/час"
        btn_textLeft="Забронировать"
        btn_textRight="Подробнее"
      />
      <DiscountCard
        discount_card_img={cardImg}
        discount_title="Профессиональный повар"
        discount_par="Организуем питание для любого повода и праздника на палубе. Заранее согласуем индивидуальное меню и закупим продукты"
        discount_price="10 000 ₽ + продукты"
      />
      <TourCard
        tour_img={tourImg}
        tour_title="Маршрут из Балаклавы №1"
        tour_steps={arr}
        tour_clock={clockImg}
        tour_mountain={monutainImg}
        tour_html1='<span style="color:#000; font-size:1.5rem;line-height:1.7rem; font-weight:500">В пути:</span> <span style="color:#3E5E82; font-size:1.5rem; line-height:1.7rem; font-weight:500"> 3-4 часа</span>'
        tour_html2='<span style="color:#000; font-size:1.5rem;line-height:1.7rem; font-weight:500">Развлечения: </span> <span style="color:#3E5E82; font-size:1.5rem; line-height:1.7rem; font-weight:500"> купание, стоянки в живописных местах</span>'
      />
      <FaqComp />
    </div>
  );
}

export default App;
