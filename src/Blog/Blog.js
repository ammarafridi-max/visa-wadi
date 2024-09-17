import styles from "./Blog.module.css";
import DocumentMeta from "react-document-meta";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

export default function Blog() {
  const meta = {
    name: "Blog",
    title: "Blog | VisaWadi",
    description: "Always ready to assist you. Call, WhatsApp or visit us now!",
    canonical: "https://localhost:3000",
    meta: {
      charset: "utf-8",
    },
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <Breadcrumb name={meta.name} />
    </>
  );
}
