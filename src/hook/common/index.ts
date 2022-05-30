/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useReducer, useState } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [tempValue, setTempValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setTempValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return tempValue;
};

export const useArray = <T>(data: T[]) => {
  const [value, setValue] = useState(data);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const temp = [...value];
      temp.splice(index, 1);
      setValue(temp);
    },
  };
};

// useReducer简单使用
type State<T> = {
  past: T[];
  present: T;
  future: T[];
};
type Action<T> = { type: "UNDO" | "REDO" | "SET" | "RESET"; value?: T };
const undoReducer = <T>(state: State<T>, action: Action<T>) => {
  const { past, present, future } = state;
  const { type, value } = action;
  switch (type) {
    case "UNDO": {
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    }
    case "REDO": {
      if (future.length === 0) return state;
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    }
    case "SET": {
      if (value === present) return state;
      return {
        past: [...past, present],
        present: value,
        future: [],
      };
    }
    case "RESET": {
      return {
        past: [],
        present: value,
        future: [],
      };
    }
  }
};
export const useUndo = <T>(init: T) => {
  const [state, dispatch] = useReducer(undoReducer, {
    past: [],
    present: init,
    future: [],
  } as State<T>);
  const undo = useCallback(() => dispatch({ type: "UNDO" }), []);
  const redo = useCallback(() => dispatch({ type: "REDO" }), []);
  const set = useCallback(
    (val: T) => dispatch({ type: "REDO", value: val }),
    []
  );
  const reset = useCallback(
    (val: T) => dispatch({ type: "RESET", value: val }),
    []
  );
  return [state, { set, reset, undo, redo }] as const;
};
