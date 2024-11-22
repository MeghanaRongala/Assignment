import React, { useState } from "react";
import Editor from "./components/Editor";
import FormPreview from "./components/FormPreview";

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>({});

  const handleJSONChange = (json: string) => {
    try {
      setSchema(JSON.parse(json));
    } catch {
      setSchema({});
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <Editor onChange={handleJSONChange} />
      <div className="p-4">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
