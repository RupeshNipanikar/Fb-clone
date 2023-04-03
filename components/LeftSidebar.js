import React from "react";

import LeftSidebarLink from "./LeftSidebarLink";
import { useSession } from "next-auth/react";
import { BsChevronDown } from "react-icons/bs";

const LeftSidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <LeftSidebarLink
          image={session?.user?.image}
          text={session?.user?.name}
        />
        <LeftSidebarLink image="/friends.png" text="Friends" />
        <LeftSidebarLink image="/group.jpg" text="Groups" />
        <LeftSidebarLink image="/market.png" text="Marketplace" />
        <LeftSidebarLink image="/save.jpg" text="Saved" />
        <LeftSidebarLink image="/flags.png" text="Pages" />
        <LeftSidebarLink image="/cal.png" text="Events" />
        <LeftSidebarLink image="/clockpng.png" text="Most Recent" />

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-orange-300">
          <div className="bg-orange-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div>

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
          2022
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
