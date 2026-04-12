'use client';

import React, { useState } from 'react';
import { uploadImage } from '../lib/api';

interface FileUploadProps {
  onUploadSuccess?: (url: string, id: string) => void;
  token: string;
}

export function FileUpload({ onUploadSuccess, token }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState({ current: 0, total: 0 });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      setError(null);
      const fileList = Array.from(files);
      setUploadStatus({ current: 0, total: fileList.length });
      setIsUploading(true);
      
      let count = 0;
      for (const file of fileList) {
        count++;
        setUploadStatus(prev => ({ ...prev, current: count }));
        
        // Verification log (internal)
        console.log(`Uploading [${count}/${fileList.length}] file:`, file.name);
        const data = await uploadImage(file, token);
        if (onUploadSuccess) {
          onUploadSuccess(data.url, data.id);
        }
      }

      // Reset input
      e.target.value = '';
    } catch (err: any) {
      setError(err.message || 'Error uploading file');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/50 rounded-lg cursor-pointer hover:bg-primary/5 transition-colors">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
          <span 
            className="material-symbols-outlined text-3xl text-primary mb-2 block" 
            aria-hidden="true"
          >
            {isUploading ? 'sync' : 'cloud_upload'}
          </span>
          <p className="text-sm text-slate-600 font-medium font-sans">
            {isUploading 
              ? `Uploading ${uploadStatus.current} of ${uploadStatus.total}...` 
              : 'Click to upload or drag and drop'}
          </p>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            {isUploading ? 'Please wait...' : 'You can select multiple gallery images'}
          </p>
        </div>
        <input 
          type="file" 
          multiple
          className="hidden" 
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </label>
      {error && <p className="text-red-500 text-sm font-sans px-1">{error}</p>}
    </div>
  );
}
