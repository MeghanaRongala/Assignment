import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { useJSONValidation } from "../hooks/useJSONValidation";

const Editor: React.FC<{ onChange: (json: string) => void }> = ({ onChange }) => {
  const [code, setCode] = useState("{}");
  const { error, isValid } = useJSONValidation(code);

  return (
    <div className="p-4 border-r border-gray-200 h-full">
      <CodeMirror
        value={code}
        options={{
          mode: "application/json",
          theme: "material",
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
          onChange(value);
        }}
      />
      {!isValid && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Editor;
