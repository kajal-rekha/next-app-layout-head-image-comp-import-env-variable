import Image from "next/image";

import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";
import img4 from "../public/images/img4.jpg";
import img5 from "../public/images/img5.jpg";

const Flowers = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl">Flowers</h1>

      {/* MULTI FLOWERS IMAGES */}
      <div>
        <Image
          src={img1}
          alt="flower 1"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img2}
          alt="flower 1"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img3}
          alt="flower 1"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img4}
          alt="flower 1"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img5}
          alt="flower 1"
          height="500"
          width="800"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Flowers;
