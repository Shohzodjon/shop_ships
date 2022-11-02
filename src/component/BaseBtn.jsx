import "./base-btn.css";
function BaseBtn(props) {
  return (
    <button
      onClick={props.click}
      className="rounded-[1rem] py-[2rem] px-[3.5rem] text-center text-black font-medium text-[1.7rem] leading-[1.7rem] flex items-center justify-center relative overflow-hidden"
    >
      <span className="relative z-20">{props.btn_context}</span>
    </button>
  );
}
export default BaseBtn;
