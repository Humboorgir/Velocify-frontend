import { AiFillPlusCircle as Plus } from "react-icons/ai";

const AddUserButton = () => {
  return (
    <div className="absolute bottom-8 right-6 z-10">
      <div className="relative h-[60px] w-[60px]">
        <Plus
          className="absolute z-20 h-[60px] w-[60px] cursor-pointer text-neutral-600
         hover:text-neutral-700 active:text-neutral-600"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 m-1.5 flex rounded-full bg-white" />
      </div>
    </div>
  );
};

export default AddUserButton;
