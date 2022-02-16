import { useState } from "react";

export const useUndo = <T>(init: T) => {
  const [past, setPast] = useState<T[]>([]);
  const [present, setPresent] = useState(init);
  const [future, setFuture] = useState<T[]>([]);

  const canUndo = past.length !== 0;
  const canRedo = future.length !== 0;

  const undo = () => {
    if (canUndo) {
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      setPast(newPast);
      setPresent(previous);
      setFuture([present, ...future]);
    }
  };

  const redo = () => {
    if (canRedo) {
      const next = future[0];
      const newFuture = future.slice(1);

      setPast([...past, present]);
      setPresent(next);
      setFuture(newFuture);
    }
  };

  const set = (value: T) => {
    if (value !== present) {
      setPast([...past, present]);
      setPresent(value);
      setFuture([]);
    }
  };

  const reSet = (value: T) => {
    if (value !== present) {
      setPast([]);
      setPresent(value);
      setFuture([]);
    }
  };

  return [
    { past, present, future },
    { set, reSet, undo, redo, canUndo, canRedo },
  ];
};
