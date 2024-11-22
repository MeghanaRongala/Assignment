import { useState, useEffect } from "react";
import Ajv from "ajv";

export const useJSONValidation = (json: string) => {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ajv = new Ajv();
    try {
      JSON.parse(json);
      setIsValid(true);
      setError(null);
    } catch (e) {
      setIsValid(false);
      setError("Invalid JSON format.");
    }
  }, [json]);

  return { isValid, error };
};
