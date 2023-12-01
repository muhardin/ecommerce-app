import React, { FC } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TinyMCEEditorProps {
  apiKey: string;
  value?: string;
  onChange?: (content: string) => void;
}

const TinyMCEEditor: FC<TinyMCEEditorProps> = ({ apiKey, value, onChange }) => {
  const handleEditorChange = (content: string, editor: any) => {
    if (onChange) {
      onChange(content);
    }
  };

  return (
    <Editor
      apiKey={apiKey}
      initialValue={value}
      init={{
        height: 200,
        menubar: false,
        // directionality: "rtl",
        // plugins: [
        //   "advlist autolink lists link image charmap print preview anchor",
        //   "searchreplace visualblocks code fullscreen",
        //   "insertdatetime media table paste code help wordcount",
        // ],
        // toolbar:
        //   "undo redo | formatselect | " +
        //   "bold italic backcolor | alignleft aligncenter " +
        //   "alignright alignjustify | bullist numlist outdent indent | " +
        //   "removeformat | help",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
