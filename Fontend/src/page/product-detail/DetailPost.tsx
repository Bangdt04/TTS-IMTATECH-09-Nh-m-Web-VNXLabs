import React, { useEffect, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { Post } from "@/types/post";
import { followUser, getFlowId, getFlowUser } from "@/service/follow";
import { UserFollow } from "@/types/followUser";
import { CiCircleMinus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
interface Props {
  post: Post | null;
}
const DetailPost = ({ post }: Props) => {
  console.log(post);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const userObject = user ? JSON.parse(user) : null;
  console.log(userObject);
  console.log(token);
  console.log(userObject);
  const [dataFollow, setDataFollow] = useState<UserFollow | any>({});
  useEffect(() => {
    const fetchAuthorData = async () => {
      if (!post || !post.author || !post.author._id) {
        return;
      }

      try {
        const { data } = await getFlowId(post.author._id);
        setDataFollow(data.user);
        console.log(data);
        return data;
      } catch (error) {
        console.log("Error fetching author data:", error);
      }
    };

    fetchAuthorData();
  }, [post]);
  const navigate = useNavigate();
  const handleFollow = async (id: string) => {
    if (!token) {
      alert("Bạn chưa đăng nhập");
      navigate(`/login`);
      return;
    }
    try {
      const { data } = await followUser(id, token as string);
      console.log(data);
      setDataFollow((prev: any) => {
        const isFollowing = prev?.follow.includes(userObject?._id);
        const updatedFollow = isFollowing
          ? prev.follow.filter((userId: any) => userId !== userObject?._id)
          : [...prev.follow, userObject?._id];
        return {
          ...prev,
          follow: updatedFollow,
        };
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-span-2 flex flex-col gap-10">
      <div className="border border-gray-200 p-7 flex flex-col gap-4">
        <p className="font-medium text-gray-300 text-xs">OWNER</p>
        <div className="flex gap-3">
          <img
            src={post?.author?.avatar}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">{post?.author?.email}</h2>
            <p className="text-sm text-gray-500 font-medium ">
              Thach That Ha Noi
            </p>
          </div>
        </div>
        {dataFollow?._id === userObject?._id ? (
          ""
        ) : dataFollow?.follow?.includes(userObject?._id) ? (
          <button
            className="w-full rounded-full p-2 px-5 bg-blue-600 text-white"
            onClick={() => handleFollow(post?.author?._id as string)}
          >
            <div className="flex justify-center items-center gap-1">
              <CiCircleMinus size={20} />
              <p>Hủy Follow</p>
            </div>
          </button>
        ) : (
          <button
            className="w-full rounded-full p-2 px-5 bg-blue-600 text-white"
            onClick={() => handleFollow(post?.author?._id as string)}
          >
            <div className="flex justify-center items-center gap-1">
              <GoPlusCircle size={20} />
              <p>Follow</p>
            </div>
          </button>
        )}
        {}

        {/* <button className="w-full rounded-full p-2 px-5 bg-white text-blue-400 border border-gray-200 hover:border-blue-200 hover:bg-blue-200 duration-200">
          <div className="flex justify-center items-center gap-1 ">
            <MdOutlineMail size={20} />
            <p>Follow</p>
          </div>
        </button> */}
      </div>
      <div className="border border-gray-200 p-7 flex flex-col gap-4">
        <h2 className="font-medium">{post?.title}</h2>
        <p className="text-sm">{post?.content}</p>
        <div className="flex items-center gap-1">
          <p className="text-sm">{post?.like_count}</p>
          <AiFillLike />
          {/* <p className="text-sm">20</p>
          <FaMessage /> */}
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
