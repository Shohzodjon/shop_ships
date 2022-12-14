import logo from "../assets/imges/logo.png";
import viber from "../assets/imges/viber.svg";
import whatsapp from "../assets/imges/whatsapp.svg";
import wlink from "../assets/imges/wlink.svg";
import telegram from "../assets/imges/telegram.svg";
function Navbar() {
  return (
    <nav className="bg-main_color">
      <div className="container flex gap-[6rem] items-center py-[2rem]">
        <div className="w-[24rem] h-[4.4rem]">
          <a href="#">
            <img src={logo} alt="logo" className="w-full h-full" />
          </a>
        </div>
        <ul className="flex justify-between items-center gap-[3rem]">
          <li className="relative text-white uppercase text-[1.4rem] leading-[1.4rem] tracking-[0.04em] font-medium group">
            <a href="#">Главная</a>
            <span className="absolute bg-[#FFD289] w-0 h-[1px] left-0 -bottom-1 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative text-white uppercase text-[1.4rem] leading-[1.4rem] tracking-[0.04em] font-medium group">
            <a href="#">Аренда яхт</a>
            <span className="absolute bg-[#FFD289] w-0 h-[1px] left-0 -bottom-1 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative text-white uppercase text-[1.4rem] leading-[1.4rem] tracking-[0.04em] font-medium group">
            <a href="#">Маршруты</a>
            <span className="absolute bg-[#FFD289] w-0 h-[1px] left-0 -bottom-1 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative text-white uppercase text-[1.4rem] leading-[1.4rem] tracking-[0.04em] font-medium group">
            <a href="#">Доп. услуги</a>
            <span className="absolute bg-[#FFD289] w-0 h-[1px] left-0 -bottom-1 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative text-white uppercase text-[1.4rem] leading-[1.4rem] tracking-[0.04em] font-medium group">
            <a href="#">Контакты</a>
            <span className="absolute bg-[#FFD289] w-0 h-[1px] left-0 -bottom-1 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative text-white uppercase text-[1.4rem] leading-[1.4rem] tracking-[0.04em] font-medium ml-[5rem]  group">
            <a
              href="tel:+7 (978) 050-43-16"
              className="flex items-center gap-[1rem]"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.03746 0.0599865C3.89701 0.267665 2.90596 0.885774 2.03497 1.93251C0.984772 3.19462 0.373588 4.70667 0.108908 6.69748C0.00313839 7.49296 -0.0340238 9.00871 0.0352394 9.69915C0.347673 12.8116 1.97667 15.8234 4.9831 18.8468C7.84702 21.7268 10.6429 23.3619 13.6137 23.8941C14.1423 23.9889 14.3625 24.0016 15.4335 23.9998C16.7405 23.9976 17.4218 23.9333 18.3624 23.7233C20.8564 23.1665 22.9244 21.6798 23.6578 19.9165C24.3669 18.2118 23.8685 16.3409 22.416 15.2558C22.0438 14.9777 20.4461 14.1069 19.9323 13.902C18.7351 13.4248 17.7904 13.4684 16.9398 14.0399C16.7057 14.1972 16.2674 14.6183 15.4817 15.441C14.8638 16.0878 14.3459 16.6171 14.3309 16.6171C14.3159 16.6171 14.118 16.5422 13.8912 16.4506C11.6512 15.5467 9.99769 14.2143 8.7428 12.3022C8.39705 11.7753 7.71323 10.4371 7.56205 9.99148L7.47034 9.72105L7.869 9.31141C9.97206 7.15073 10.0785 7.02236 10.2685 6.41804C10.3536 6.14733 10.3713 5.98622 10.3667 5.52495C10.3605 4.90529 10.2703 4.51756 9.9625 3.78764C9.75659 3.29935 8.94019 1.84734 8.6847 1.51491C8.17623 0.853412 7.42952 0.353118 6.6233 0.133715C6.29357 0.0439932 5.36297 0.000703516 5.03746 0.0599865ZM12.7389 0.93502V1.87009L13.4301 1.92651C15.7571 2.11655 17.7154 3.01902 19.3494 4.65437C20.9834 6.28972 21.8852 8.24967 22.0751 10.5785L22.1314 11.2703H23.0657H24L23.9681 10.6958C23.7575 6.90281 21.7548 3.5725 18.503 1.60772C16.9545 0.672093 15.1899 0.136341 13.313 0.0319396L12.7389 0V0.93502ZM6.22838 1.98138C6.57217 2.08846 6.9503 2.3361 7.14647 2.58261C7.34845 2.83639 8.10571 4.19849 8.27385 4.61038C8.52611 5.22835 8.57663 5.63549 8.43801 5.93252C8.39293 6.02904 7.70451 6.78387 6.88104 7.63967C5.16193 9.42618 5.29446 9.15861 5.63356 10.1591C6.43636 12.5277 7.94136 14.754 9.69281 16.1639C11.1421 17.3305 13.1196 18.314 14.8017 18.7049C14.9075 18.7295 15.0747 18.5712 16.412 17.1805C17.3157 16.2408 17.9755 15.5924 18.0847 15.5366C18.5298 15.3093 19.0168 15.4648 20.565 16.3289C21.4111 16.8012 21.7134 17.0666 21.9283 17.5261C22.1985 18.1042 22.1632 18.7065 21.8182 19.398C21.6664 19.7023 21.5372 19.8717 21.201 20.2073C20.1676 21.2389 18.854 21.8141 16.9565 22.0659C16.24 22.161 14.4568 22.146 13.8636 22.04C11.8558 21.6811 9.95121 20.6988 7.79487 18.9101C7.11807 18.3487 5.48659 16.6944 4.90906 15.9839C3.23957 13.93 2.34182 12.1479 1.97864 10.1663C1.87226 9.58593 1.85698 7.70135 1.95296 7.00233C2.20124 5.19439 2.78524 3.83149 3.72821 2.85947C4.5365 2.02627 5.39948 1.72319 6.22838 1.98138ZM12.7389 4.69058V5.62837L13.1345 5.6588C14.5072 5.76438 15.7273 6.32658 16.703 7.30302C17.6786 8.27945 18.2403 9.50061 18.3458 10.8744L18.3762 11.2703H19.3133H20.2503L20.2173 10.7896C19.9589 7.02133 16.9844 4.04437 13.2192 3.78576L12.7389 3.75274V4.69058ZM12.7389 8.44412V9.3835L12.9902 9.41488C13.3193 9.45606 13.7594 9.66777 14.0248 9.91269C14.287 10.1546 14.5481 10.6605 14.5919 11.0118L14.6242 11.2703H15.5628H16.5014L16.4718 10.9537C16.3634 9.7914 15.7448 8.76614 14.7637 8.1228C14.262 7.79384 13.6775 7.59249 13.0552 7.53433L12.7389 7.50478V8.44412Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>+7 (978) 050-43-16</span>
            </a>
          </li>

          <li>
            <ul className="flex items-center gap-[1rem]">
              <li>
                <a href="#">
                  <img
                    src={viber}
                    alt="viber"
                    className="w-[2.4rem] h-[2.6rem]"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    className="w-[2.4rem] h-[2.6rem]"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-[2.4rem] h-[2.6rem] flex items-center justify-center border-[2px] border-[#37AEE2] rounded-full"
                >
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={wlink}
                    alt="wlink"
                    className="w-[2.4rem] h-[2.6rem]"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
