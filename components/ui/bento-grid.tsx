import { cn } from "../../utils/cn";
import Image from "next/image";
import { useTheme } from "next-themes";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        "bento-grid", // Add a class to identify this as a BentoGrid
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  imageSrc,
  youtubeId,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imageSrc?: string;
  youtubeId?: string;
}) => {
  const { resolvedTheme } = useTheme();

  const renderMedia = () => {
    
    if (youtubeId) {
      return (
        <div className="aspect-w-16 aspect-h-25">
          <iframe
            title={title as string} // Cast to string to satisfy TypeScript
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            allowFullScreen
          />
        </div>
      );
    } else if (imageSrc) {
      return (
        <div className="relative w-50 h-[300px] rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={typeof title === 'string' ? title : 'Image Alt Text'}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div
  className={cn(
    "grid grid-cols-1 md:grid-cols-2 row-span-2 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input",
    resolvedTheme === "dark"
      ? "dark:bg-black dark:text-white"
      : "bg-white text-black",
    className
  )}
>
  <div className="md:col-span-2">
    {renderMedia()}
  </div>
  <div className="md:col-span-2 p-4">
    {header}
    <div className="flex flex-row">
      {icon}
      <div className="ml-3">
        <div className="font-sans font-bold mb-2 mt-2">
          {title}
        </div>
        <div className="mt-2 opacity-30 text-xl hover:opacity-100">
          {description}
        </div>
      </div>
    </div>
  </div>
</div>
  );
};