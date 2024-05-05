"use client";

import Image from "next/image";

import { 
  UserButton, 
  OrganizationSwitcher, 
  useOrganization
} from "@clerk/nextjs";

import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";

export const PanelNavbar = () => {
  const { organization } = useOrganization();

  return (
    <div className="relative">



    <div className="flex items-center gap-x-4 p-20">
        <Image 
            src="https://images.unsplash.com/photo-1483354483454-4cd359948304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="main navbar background"
            className="object-cover z-0"
            fill
        />



      <div className="hidden lg:flex lg:flex-1">
        {/* <SearchInput /> */}
      </div>
      <div className="block lg:hidden flex-1">
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "376px",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            }
          }
        }}
      />
      </div>
      {/* {organization && (
        <div className="z-10">
            <InviteButton />
        </div>
      )}
      <UserButton /> */}
    </div>
    </div>
  );
};
