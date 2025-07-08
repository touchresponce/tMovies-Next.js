import "./Background.css";
import Image from "next/image";
import { getBackdropUrl } from "@/utils/actions";

export default async function Background({ data }) {
  const imageSrc = await getBackdropUrl(data);

  const renderImage = () => {
    if (!imageSrc) return;

    return (
      <Image
        src={imageSrc}
        alt=""
        priority
        fill
        sizes="(max-width: 768px) 100vw, 70vw"
        style={{
          objectFit: "cover",
          objectPosition: "50% 30%",
        }}
      />
    );
  };

  return <div className="background noselect">{renderImage()}</div>;
}
