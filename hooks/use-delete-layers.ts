import { useSelf, useMutation } from "@/liveblocks.config";

export const useDeleteLayers = () => {
  const selection = useSelf((me: any) => me.presence.selection);

  return useMutation((
    { storage, setMyPresence }: any
  ) => {
    const liveLayers = storage.get("layers");
    const liveLayerIds = storage.get("layerIds");

    for (const id of selection) {
      liveLayers.delete(id);

      const index = liveLayerIds.indexOf(id);

      if (index !== -1) {
        liveLayerIds.delete(index);
      }
    }

    setMyPresence({ selection: [] }, { addToHistory: true });
  }, [selection]);
};
