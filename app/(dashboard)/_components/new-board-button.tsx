"use client";

import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useApiAction } from "@/hooks/use-api-action";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
};

export const NewBoardButton = ({
  orgId,
  disabled,
}: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);
  const { action } = useApiAction(api.board.getRandomPhoto);

  const onClick = async () => {

    const randomPhotoUrl = await action({})

    mutate({
      orgId,
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
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-teal-500 rounded-lg hover:bg-teal-700 flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-75 hover:bg-teal-500 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">
        New board
      </p>
    </button>
  );
};
