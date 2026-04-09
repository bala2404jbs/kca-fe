'use client';

import { FileUpload } from "../../components/FileUpload";

export default function DemoPage() {
  return (
    <div className="p-12 max-w-xl mx-auto mt-24 bg-white rounded-xl shadow-lg border border-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Media Upload Demo</h1>
      <FileUpload 
        token="mock-token-for-demo" 
        onUploadSuccess={(url) => alert(`Uploaded successfully! File URL: ${url}`)} 
      />
    </div>
  );
}
