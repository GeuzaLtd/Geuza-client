import Image from "next/image";

interface ThumbnailImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ThumbnailImage({
  src,
  alt,
  className = "",
}: ThumbnailImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-[center_35%]"
      />
    </div>
  );
}
