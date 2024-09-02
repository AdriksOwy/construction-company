import { useEffect, useState } from "react";

import useLazyBackground from "../hooks/useLazyBackground";
import useBackgroundAttachment from "../hooks/useBackgroundAttachment";
import CommentItem from "./items/CommentItem";
import type { CommentProps } from "../types/comment";

const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const backgroundAttachment = useBackgroundAttachment();

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("/data/comments.json");
      const data = await response.json();

      setComments(data);
    };

    fetchComments();
  }, []);

  useLazyBackground([
    { id: "background-comments", imageUrl: "/images/background-comments.webp" },
  ]);

  return (
    <div className="relative px-4 py-20 2xl:py-24 my-4 2xl:mb-40 sm:px-8 lg:px-12 2xl:px-44">
      <div
        id="background-comments"
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundAttachment }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative flex flex-col gap-6 lg:gap-20 2xl:gap-14 z-10">
        <h1 className="2xl:mb-8 text-xl sm:text-2xl 2xl:text-3xl lg:text-center underline underline-offset-8 decoration-amber-400 font-extrabold text-white">
          What People Said
        </h1>

        <div className="flex flex-col lg:flex-row gap-16">
          {comments.map((comment, index) => (
            <CommentItem key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
