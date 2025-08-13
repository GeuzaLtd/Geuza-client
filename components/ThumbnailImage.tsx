import Image from "next/image";

interface ThumbnailImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export default function ThumbnailImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}: ThumbnailImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
