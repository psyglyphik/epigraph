"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useApiAction } from "@/hooks/use-api-action";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);
  const { action } = useApiAction(api.board.getRandomPhoto);



  const onClick = async () => {
    if (!organization) return;
  
    const randomPhotoUrl = await action({})

    mutate({
      orgId: organization.id,
      title: "Untitled",
      imageUrl: randomPhotoUrl,
    })
    .then((id) => {
      toast.success("Board created");
      router.push(`/board/${id}`);
    })
    .catch(() => toast.error("Failed to create board"));

  }


  return (
    <div className="h-full flex flex-col items-center py-48">
      <Image
        src="/note.svg"
        height={110}
        width={110}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first workspace!
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a workspace for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create workspace
        </Button>
      </div>
    </div>
  );
};
