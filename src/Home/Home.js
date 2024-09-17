import DocumentMeta from "react-document-meta";
import HomeAbout from "./HomeAbout";
import HomeHero from "./HomeHero";
import HomeNumbers from "./HomeNumbers";
import HomeVisa from "./HomeVisa";
import HomeContact from "./HomeContact";

export default function Home() {
  const meta = {
    title: "Dubai's Best Visa Service Provider | VisaWadi",
    description: "Need a visa? Call VisaWadi.",
    canonical: "https://localhost:3000",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <HomeHero />
      <HomeAbout />
      <HomeVisa />
      <HomeNumbers />
      <HomeContact />
    </>
  );
}
