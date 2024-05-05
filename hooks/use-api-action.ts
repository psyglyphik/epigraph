import { useState } from "react";
import { useAction } from "convex/react";

export const useApiAction = (actionFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiAction = useAction(actionFunction);

  const action = (payload: any) => {
    setPending(true);
    return apiAction(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch ((error) => {
        throw error;
      });
  };

  return {
    action,
    pending,
  };
};