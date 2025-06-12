import { useEffect, useRef } from "react";
import { useFormikContext } from "formik";

const AutoSave = () => {
  const { values } = useFormikContext();
  const timeoutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      localStorage.setItem("draftForm", JSON.stringify(values));
      console.log("Auto-saving form values (debounced)", values);
    }, 1000); 

    return () => clearTimeout(timeoutRef.current);
  }, [values]);

  return null;
};

export default AutoSave;
