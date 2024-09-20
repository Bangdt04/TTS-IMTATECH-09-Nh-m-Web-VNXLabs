import { FaSave } from "react-icons/fa";

const ProductDetailPage = () => {
  return (
    <div className="px-[100px]">
      <div className="flex flex-col">
        <div className="flex gap-3">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="rounded-full w-12 h-12"
          />
          <div className="flex flex-col">
            <h2 className="text-base font-medium">Riot client</h2>
            <p className="text-gray-600 hover:text-blue-400">Flow</p>
          </div>
        </div>
        <div className="relative group pt-5">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="cursor-pointer w-full h-[500px] object-cover"
          />
          <div className="absolute top-9 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex bg-[#383838] p-1 items-center gap-1 px-2 cursor-pointer">
            <FaSave />
            <span>Save</span>
          </div>
        </div>
        <div className="bg-[#000622] px-52 py-24">
          <h2 className="text-white text-2xl font-medium">Description</h2>
          <p className="text-gray-300 text-sm tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet enim vel ipsum tincidunt bibendum. Donec non egestas neque, vel
            congue turpis. Nullam vitae turpis vel justo tincidunt consectetur.
            Nulla facilisi. Vestibulum vel neque vel ipsum tincidunt
            consectetur. Sed sit amet enim vel ipsum tincidunt bibendum. Donec
            non egestas neque, vel congue turpis. Nullam vitae turpis vel justo
            tincidunt consectetur. Nulla facilisi. Vestibulum vel neque vel
            ipsum tincidunt consectetur. Sed sit amet enim vel ipsum tincidunt
            bibendum. Donec non egestas neque, vel congue turpis. Nullam vitae
            turpis vel justo tincidunt consectetur. Nulla facilisi. Vestibulum
            vel neque vel ipsum tincidunt consectetur. Sed sit amet enim vel
            ipsum tincidunt
          </p>
        </div>
        <div className="relative group">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="cursor-pointer w-full h-[500px] object-cover"
          />
          <div className="absolute top-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex bg-[#383838] p-1 items-center gap-1 px-2 cursor-pointer">
            <FaSave />
            <span>Save</span>
          </div>
        </div>
        <div className="flex gap-4 w-full bg-[#e3e3e3] py-20">
          <div className="relative group w-1/3">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="cursor-pointer w-full h-[350px] object-cover"
            />
            <div className="absolute top-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex bg-[#383838] p-1 items-center gap-1 px-2 cursor-pointer">
              <FaSave />
              <span>Save</span>
            </div>
          </div>
          <div className="relative group w-1/3">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="cursor-pointer w-full h-[350px] object-cover"
            />
            <div className="absolute top-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex bg-[#383838] p-1 items-center gap-1 px-2 cursor-pointer">
              <FaSave />
              <span>Save</span>
            </div>
          </div>
          <div className="relative group w-1/3">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="cursor-pointer w-full h-[350px] object-cover"
            />
            <div className="absolute top-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex bg-[#383838] p-1 items-center gap-1 px-2 cursor-pointer">
              <FaSave />
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
