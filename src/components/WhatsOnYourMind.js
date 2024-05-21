import { IMGG_URL } from "../utils/constants";
import useWhatsOnYourMind from "../utils/useWhatsOnYourMind"
const WhatsOnYourMind = () => {

  const dish = useWhatsOnYourMind();

  return (
    <>
      <h2>What's on your mind?</h2>
{console.log(dish.imageId)}
      <div className="flex overflow-auto">
    


        {dish.map((res) => (
            

       <img className="w-40"  alt="error" key={res?.id} src={IMGG_URL + res?.imageId} />

        ))}
      </div>
    </>
  );
};

export default WhatsOnYourMind;