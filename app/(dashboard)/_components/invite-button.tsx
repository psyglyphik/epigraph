import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-7">
          <Plus className="h-3 w-3 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
