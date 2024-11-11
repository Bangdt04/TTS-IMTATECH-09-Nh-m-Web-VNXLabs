import { Author } from "@/types/post";
import React, { useEffect, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { followUser, getFlowId } from "@/service/follow";
import { useNavigate } from "react-router-dom";
import { UserFollow } from "@/types/followUser";
import { CiCircleMinus } from "react-icons/ci";
interface Props {
  user: Author;
}

const InforUserHome = ({ user }: Props) => {
  console.log(user);
  const token = localStorage.getItem("token");
  const userLocal = localStorage.getItem("user");
  const userObject = user ? JSON.parse(userLocal as string) : null;
  console.log(userObject);
  console.log(token);
  console.log(userObject);
  const [dataFollow, setDataFollow] = useState<UserFollow | any>({});
  useEffect(() => {
    const fetchAuthorData = async () => {
      if (!user) {
        return;
      }

      try {
        const { data } = await getFlowId(user._id);
        setDataFollow(data.user);
        console.log(data);
        return data;
      } catch (error) {
        console.log("Error fetching author data:", error);
      }
    };

    fetchAuthorData();
  }, [user]);
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
        const updatedCountFollow = isFollowing
          ? prev.count_follow - 1
          : prev.count_follow + 1;

        return {
          ...prev,
          follow: updatedFollow,
          count_follow: updatedCountFollow,
        };
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute bg-white shadow-xl border border-gray-200 px-2 pt-1 pb-5 rounded-md z-10 w-[350px] -top-8 -left-9">
      <div className="flex flex-col items-center">
        <div className="relative w-full h-[100px] cursor-pointer">
          <img
            src="https://picsum.photos/200"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-sm"
            alt="Background Image"
          />
          <img
            src={user.avatar}
            className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[75px] h-[75px] rounded-full"
            alt="Overlay Image"
          />
        </div>
        <div className="ml-3 mt-8">
          <h2 className="text-lg font-bold cursor-pointer">{user.email}</h2>
          <div className="flex gap-3 justify-center items-center">
            <FaMapMarkerAlt size={13} className="text-gray-400" />
            <p className="text-sm text-gray-500">Riyadh, Saudi Arabia</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 text-center">
        <div>
          <p className="font-semibold">30.9K</p>
          <p className="text-xs text-gray-500">Appreciations</p>
        </div>
        <div>
          <p className="font-semibold">{dataFollow?.count_follow}</p>
          <p className="text-xs text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-semibold">526.4K</p>
          <p className="text-xs text-gray-500">Project Views</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-y-5">
        {dataFollow?._id === userObject?._id ? (
          ""
        ) : dataFollow?.follow?.includes(userObject?._id) ? (
          <button
            className="w-full rounded-full p-2 px-5 bg-blue-600 text-white"
            onClick={() => handleFollow(user._id as string)}
          >
            <div className="flex justify-center items-center gap-1">
              <CiCircleMinus size={20} />
              <p>Hủy Follow</p>
            </div>
          </button>
        ) : (
          <button
            className="w-full rounded-full p-2 px-5 bg-blue-600 text-white"
            onClick={() => handleFollow(user._id as string)}
          >
            <div className="flex justify-center items-center gap-1">
              <GoPlusCircle size={20} />
              <p>Follow</p>
            </div>
          </button>
        )}
        {/* <button className="w-full rounded-full p-2 px-5 bg-white text-blue-400 border border-gray-200 hover:border-blue-200 hover:bg-blue-200 duration-200">
          <div className="flex justify-center items-center gap-1 ">
            <MdOutlineMail size={20} />
            <p>Follow</p>
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default InforUserHome;
