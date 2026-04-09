'use client';

import React, { useState, useEffect } from 'react';
import { updatePageMedia, getPageMedia, getMediaUrl } from '../../../lib/api';
import { FileUpload } from '../../../components/FileUpload';
import { useAdmin } from '../AdminContext';

const PAGES = [
  { id: 'franchise', label: 'Franchise Page' },
  { id: 'teacher-training', label: 'Teacher Training Page' },
  { id: 'program-abacus', label: 'Abacus Program' },
  { id: 'program-handwriting', label: 'Handwriting Program' },
  { id: 'program-vedic-maths', label: 'Vedic Maths Program' },
  { id: 'program-aip', label: 'An Ideal Parent (AIP)' },
  { id: 'program-cbdp', label: 'Child Behavior Development (CBDP)' },
  { id: 'program-feep', label: 'Effective Early Parenting (FEEP)' },
  { id: 'program-seep', label: 'Exceptional Parenting (SEEP)' },
  { id: 'program-english', label: 'Communicative English' },
  { id: 'institutions', label: 'Educational Institutions Page' },
  { id: 'events', label: 'Events Page' },
  { id: 'home', label: 'Home Page' }
];

export default function MediaAdminPage() {
  const [selectedPage, setSelectedPage] = useState(PAGES[0].id);
  const [heroImage, setHeroImage] = useState('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [youtubeIds, setYoutubeIds] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [token, setToken] = useState('');
  const { setHasUnsavedChanges } = useAdmin();

  useEffect(() => {
    setToken(localStorage.getItem('admin_token') || '');
  }, []);

  useEffect(() => {
    loadPageData();
  }, [selectedPage]);

  const loadPageData = async () => {
    setIsLoading(true);
    setMessage({ text: '', type: '' });
    try {
      const data = await getPageMedia(selectedPage);
      if (data) {
        setHeroImage(data.heroImageUrl || '');
        setGalleryImages(data.galleryImages || []);
        setYoutubeIds(data.youtubeVideoIds?.join(', ') || '');
      } else {
        setHeroImage('');
        setGalleryImages([]);
        setYoutubeIds('');
      }
    } catch (err) {
      console.error('Error fetching page media:', err);
      // Fail gracefully
      setHeroImage('');
      setGalleryImages([]);
      setYoutubeIds('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    setMessage({ text: '', type: '' });
    try {
      const parsedYoutubeIds = youtubeIds.split(',').map(s => s.trim()).filter(Boolean);
      await updatePageMedia(selectedPage, {
        heroImageUrl: heroImage,
        galleryImages,
        youtubeVideoIds: parsedYoutubeIds
      }, token);
      setMessage({ text: 'Media settings saved successfully!', type: 'success' });
      setHasUnsavedChanges(false); // ← clear unsaved flag on save
    } catch (err: any) {
      setMessage({ text: err.message || 'Failed to save configuration', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
    setHasUnsavedChanges(true);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-surface-container-lowest min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-primary">Media Management Admin</h1>

      <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
        <label className="block text-sm font-bold text-slate-700 mb-2">Target Page Module</label>
        <select 
          value={selectedPage} 
          onChange={e => setSelectedPage(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-outline-variant/50 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        >
          {PAGES.map(p => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </div>

      <div className="space-y-8">
        {/* Cover / Hero Image Upload */}
        <section className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
          <h2 className="text-xl font-bold mb-4 border-b border-outline-variant/20 pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">image</span>
            Hero / Cover Image
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FileUpload 
                token={token} 
                onUploadSuccess={(url) => { setHeroImage(url); setHasUnsavedChanges(true); }} 
              />
            </div>
            <div className="flex items-center justify-center bg-surface-container border border-dashed rounded-lg overflow-hidden min-h-[8rem]">
              {heroImage ? (
                <img src={getMediaUrl(heroImage)} alt="Hero" className="max-h-48 w-full object-contain p-2" />
              ) : (
                <span className="text-slate-400 font-medium">No hero image set</span>
              )}
            </div>
          </div>
          {heroImage && (
            <button 
              onClick={() => setHeroImage('')} 
              className="mt-4 text-red-500 text-sm font-bold border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50"
            >
              Clear Hero Image
            </button>
          )}
        </section>

        {/* YouTube Video List */}
        <section className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
             <span className="material-symbols-outlined text-[#FF0000]">play_circle</span>
             YouTube Video Integration
          </h2>
          <p className="text-sm text-slate-500 mb-4">
             Enter YouTube Video IDs separated by commas. (E.g., if link is <code>youtube.com/watch?v=Nj1AtSH1lPI</code>, ID is <code>Nj1AtSH1lPI</code>)
          </p>
          <input 
            type="text" 
            value={youtubeIds}
            onChange={e => { setYoutubeIds(e.target.value); setHasUnsavedChanges(true); }}
            placeholder="e.g. Nj1AtSH1lPI, snxgCNKzSK8"
            className="w-full p-4 text-lg border border-outline-variant/50 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </section>

        {/* Local Gallery Image Uploads */}
        <section className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
          <h2 className="text-xl font-bold mb-4 border-b border-outline-variant/20 pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">perm_media</span>
            Gallery Images
          </h2>
          <FileUpload 
            token={token} 
            onUploadSuccess={(url) => { setGalleryImages(prev => [...prev, url]); setHasUnsavedChanges(true); }} 
          />
          {galleryImages.length > 0 && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((url, i) => (
                <div key={i} className="relative group rounded-lg overflow-hidden border border-outline-variant/50 shadow-sm bg-surface-container-low">
                  <img src={getMediaUrl(url)} alt={`Gallery ${i}`} className="w-full h-32 object-cover" />
                  <button 
                    onClick={() => removeGalleryImage(i)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-600"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
        
        {message.text && (
          <div className={`p-4 rounded-xl flex items-center gap-3 font-semibold shadow-sm border ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
             <span className="material-symbols-outlined">{message.type === 'success' ? 'check_circle' : 'error'}</span>
             {message.text}
          </div>
        )}

        <button 
          onClick={handleSave}
          disabled={isLoading}
          className="w-full btn-gradient text-on-primary py-5 rounded-full font-bold text-lg hover:shadow-xl transition-shadow disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isLoading ? 'Saving...' : 'Save Media Configurations'}
          {!isLoading && <span className="material-symbols-outlined">save</span>}
        </button>
      </div>
    </div>
  );
}
