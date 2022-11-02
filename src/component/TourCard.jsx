import "./tour.css";
function TourCard(props) {
  const htmlPart = "<p>Welcome to this <strong>page</strong></p>";
  return (
    <div className="rounded-[1rem] tour_card pb-[1.7rem] bg-white">
      <div className="max-h-[25.4rem]">
        <img
          src={props.tour_img}
          alt="tour img"
          className="max-h-[25.4rem] rounded-r-top-[1rem]"
        />
      </div>
      {/* tour describsion */}
      <div className="px-[2.4rem] pt-[1.4rem]">
        <h5 className="font-semibold text-[2rem] leading-[2.4rem] text-ocean_color mb-[1.4rem]">
          {props.tour_title}
        </h5>
        <ul className="mb-[1.7rem]">
          {props.tour_steps.map((item, i) => {
            return (
              <li
                key={i}
                className="font-medium text-[1.5rem] leading-[1.7rem] text-[#272A35] opacity-40"
              >
                <span>{i + 1} . </span> <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
        {/* tour time */}
        <div className="flex items-center gap-[.9rem]">
          <img src={props.tour_clock} alt="clock img" />
          <div dangerouslySetInnerHTML={{ __html: props.tour_html1 }} />
        </div>
        <div className="flex items-center gap-[.9rem] mt-[1.2rem]">
          <img src={props.tour_mountain} alt="mountain img" />
          <div dangerouslySetInnerHTML={{ __html: props.tour_html2 }} />
        </div>
      </div>
    </div>
  );
}
export default TourCard;
