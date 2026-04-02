import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";

import m1 from "../assets/About/1.jpg"
import m2 from "../assets/About/2.jpg"
import m3 from "../assets/About/3.jpg"
import m4 from "../assets/About/4.jpg"
import m5 from "../assets/About/5.jpg"
import m6 from "../assets/About/6.jpg"
import m7 from "../assets/About/7.jpg"
import m8 from "../assets/About/8.jpg"
import m9 from "../assets/About/9.jpg"
import m10 from "../assets/About/10.jpg"
import m11 from "../assets/About/11.jpg"

const aboutImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11];


const AboutArcGalleryDemo = () => {
  return (
    <ArcGalleryHero
      images={aboutImages}
      startAngle={10}
      endAngle={170}
      radiusLg={520}
      radiusMd={380}
      radiusSm={260}
      cardSizeLg={130}
      cardSizeMd={110}
      cardSizeSm={88}
      className="bg-background"
    />
  );
};

export default AboutArcGalleryDemo;

