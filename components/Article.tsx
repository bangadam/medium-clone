import Image from "next/image";
import React from "react";
import TagButton from "./TagButton";

type Props = {
  author: {
    name: string;
    photo: string;
  };
  title: string;
  date: string;
  content: string;
  thumbnail: string;
  category: string;
  url: string;
};

const Article: React.FC<Props> = ({
  author,
  title,
  date,
  content,
  thumbnail,
  category,
  url,
}) => {
  const formatDate = (date: string) => {
    // format to Jan 22
    const newDate = new Date(date);
    const month = newDate.toLocaleString("default", { month: "short" });
    const day = newDate.getDate();
    return `${month} ${day}`;
  };
  return (
    <div className="border-slate-200 border-b pb-8 mb-8">
      <div className="flex items-center text-sm mb-3">
        <Image
          src={author.photo}
          width={24}
          height={24}
          alt="photo"
          className="mr-2"
        />
        <p className="text-slate-900">{author.name}</p>
        <div className="w-[2px] h-[2px] bg-slate-400 mx-2 rounded-full" />
        <p className="text-slate-400 font-sans">{formatDate(date)}</p>
      </div>
      <div className="flex justify-between">
        <div className="mr-10">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="font-serif mb-8">{content}</p>
        </div>
        <Image
          src={thumbnail}
          alt="thumbnail"
          className="h-32 w-32 object-cover"
          width={"128"}
          height={"128"}
        />
      </div>
      <div>
        <TagButton size="sm" label={category} />
      </div>
    </div>
  );
};

export default Article;
