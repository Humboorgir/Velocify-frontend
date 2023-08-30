import { AiFillPlusCircle as Plus } from "react-icons/ai";
import { useState } from "react";

const AddUserButton = ({ handleAddUser }) => {
  const [open, setOpen] = useState(false);

  function togglePopover() {
    setOpen((open) => !open);
  }

  return (
    <button className="absolute bottom-[80px] right-[74px] z-10">
      <div className="fixed">
        <div className="relative h-[60px] w-[60px]">
          <Plus
            onClick={togglePopover}
            className="absolute z-20 h-[60px] w-[60px] cursor-pointer rounded-full
         text-neutral-700 outline-none outline-2 -outline-offset-[4px] outline-neutral-600
         active:text-neutral-600"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 m-1.5 flex rounded-full bg-white" />

          {/* pop over  */}
          <form
            onSubmit={(e) => handleAddUser(e, setOpen)}
            className={`absolute right-5 bottom-full z-30 mb-2 flex origin-bottom-right scale-[.9]
           cursor-default flex-col items-end rounded-md border-2 border-neutral-700 bg-[#1c1c1c]
         p-3 opacity-0 transition-all duration-[100ms] ease-out ${open && "!scale-100 !opacity-100"}`}>
            <input
              name="id"
              autoComplete="off"
              className="mb-2 rounded-md bg-neutral-700
               p-2 text-white transition-all duration-300 placeholder:text-neutral-400 focus:bg-neutral-600"
              placeholder="user ID"
            />
            <input
              type="submit"
              className="cursor-pointer rounded-md bg-neutral-700 py-2 px-4 text-white active:bg-neutral-600"
              value="Add"
            />
          </form>
        </div>
      </div>
    </button>
  );
};

export default AddUserButton;
