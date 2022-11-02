function DiscountCard(props) {
  return (
    <div className="rounded-[1rem] overflow-hidden bg-white max-h-[43.3rem]">
      <div className="card-img w-full max-h-[30rem]">
        <img
          src={props.discount_card_img}
          alt="discount img"
          className="w-full h-[100%] max-h-[30rem] rounded-r-top-[1rem] rounded-l-top-[1rem]"
        />
      </div>
      {/* discount card describtion */}
      <div className="px-[2.4rem] pt-[1.5rem] pb-[2.4rem]">
        <h4 className="text-[2rem] leading-[2.4rem] text-ocean_color mb-[1.2rem] font-semibold">
          {props.discount_title}
        </h4>
        <p className="text-[1.5rem] leading-[1.7rem] mb-[2rem] text-black opacity-40">
          {props.discount_par}
        </p>
        <p className="text-[2rem] leading-[2.4rem] font-semibold text-[#F8B405]">
          {props.discount_price}
        </p>
      </div>
    </div>
  );
}
export default DiscountCard;
