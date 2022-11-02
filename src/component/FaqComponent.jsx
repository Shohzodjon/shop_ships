import Faq from "react-faq-component";

function FaqComp() {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "+",
    // tabFocus: true
    expandIcon: "+",
    collapseIcon: "-",
  };
  const data = {
    rows: [
      {
        title:
          "Что взять с собой на борт? Если у Вас имеется морская болезнь, то укачает даже в очень спокойном море. Если в автомобиле или в самолете Вас не укачивает, на море может укачать. Поэтому, чтобы ваше мероприятие прошло идеально, мы обязательно рекомендуем нашим гостям за 1-2 часа перед отправлением в море выпить таблетки от укачивания.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
    ],
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
export default FaqComp;
