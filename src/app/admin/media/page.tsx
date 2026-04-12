'use client';

import React, { useState, useEffect } from 'react';
import { updatePageMedia, getPageMedia, getMediaUrl } from '../../../lib/api';
import { FileUpload } from '../../../components/FileUpload';
import { useAdmin } from '../AdminContext';

const STATIC_PAGES = [
  { id: 'home', label: 'Home Page' },
  { id: 'franchise', label: 'Franchise Page' },
  { id: 'teacher-training', label: 'Teacher Training Page' },
  { id: 'institutions', label: 'Educational Institutions Page' },
  { id: 'events', label: 'Events Page' },
  // Program Group
  { id: 'program-cbdp', label: 'CBDP', group: 'Programs' },
  { id: 'program-english', label: 'Communicative English', group: 'Programs' },
  { id: 'program-creative-arts', label: 'Creative Arts', group: 'Programs' },
  { id: 'program-abacus', label: 'Abacus', group: 'Programs' },
  { id: 'program-vedic-maths', label: 'Vedic Maths', group: 'Programs' },
  { id: 'program-aip', label: 'AIP', group: 'Programs' },
  { id: 'program-seep', label: 'SEEP', group: 'Programs' },
  { id: 'program-feep', label: 'FEEP', group: 'Programs' },
  { id: 'program-robotics-ai', label: 'Robotics & AI', group: 'Programs' },
];

export default function MediaAdminPage() {
  const [pages, setPages] = useState(STATIC_PAGES);
  const [selectedPage, setSelectedPage] = useState(STATIC_PAGES[0].id);
  const [heroImage, setHeroImage] = useState('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [youtubeIds, setYoutubeIds] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [token, setToken] = useState('');
  const { setHasUnsavedChanges } = useAdmin();

  useEffect(() => {
    setToken(localStorage.getItem('admin_token') || '');
    // Fetch all existing page media to populate custom topics
    import('../../../lib/api').then(({ getAllPageMedia }) => {
      getAllPageMedia().then(all => {
        const customOnes = all
          .filter((m: any) => !STATIC_PAGES.find(p => p.id === m.page))
          .map((m: any) => ({
            id: m.page,
            label: m.page.startsWith('event-')
              ? m.page.replace('event-', '').replace(/-/g, ' ').toUpperCase()
              : m.page,
            group: m.page.startsWith('event-') ? 'Events' : 'Custom'
          }));
        setPages([...STATIC_PAGES, ...customOnes]);
      });
    });
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
          value={pages.find(p => p.id === selectedPage)?.group === 'Events' ? 'events' : selectedPage}
          onChange={e => {
            const val = e.target.value;
            if (val === 'events') {
              setSelectedPage('events');
            } else {
              setSelectedPage(val);
            }
          }}
          className="w-full md:w-1/2 p-3 border border-outline-variant/50 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50"
        >
          <optgroup label="Main Pages">
            {pages.filter((p: any) => !p.group || p.id === 'events').map((p: any) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </optgroup>
          <optgroup label="Academic Programs">
            {pages.filter((p: any) => p.group === 'Programs').map((p: any) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </optgroup>
        </select>

        {/* Sub-selection for Events */}
        {(selectedPage === 'events' || pages.find(p => p.id === selectedPage)?.group === 'Events') && (
          <div className="mt-6 pt-6 border-t border-dashed border-outline-variant/30 animate-in fade-in slide-in-from-top-2 duration-500">
            <label className="block text-xs font-bold text-primary mb-3 uppercase tracking-widest">Event Topic Manager</label>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setSelectedPage('events')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedPage === 'events' ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                General Events Page
              </button>
              {pages.filter((p: any) => p.group === 'Events' && p.id !== 'events').map((p: any, idx: number, filtered: any[]) => (
                  <div 
                    key={p.id} 
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData('sourceIdx', idx.toString());
                      e.dataTransfer.setData('sourceId', p.id);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={async (e) => {
                      e.preventDefault();
                      const sourceIdx = parseInt(e.dataTransfer.getData('sourceIdx'));
                      const sourceId = e.dataTransfer.getData('sourceId');
                      if (sourceId === p.id) return;

                      try {
                        const { updatePageMedia } = await import('../../../lib/api');
                        await updatePageMedia(sourceId, { order: idx }, token);
                        await updatePageMedia(p.id, { order: sourceIdx }, token);
                        window.location.reload();
                      } catch (err) { console.error(err); }
                    }}
                    className="relative group/btn flex items-center gap-1 cursor-grab active:cursor-grabbing"
                    onClick={() => setSelectedPage(p.id)}
                  >
                    <div 
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedPage === p.id ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
                    >
                      {p.label}
                    </div>

                    {selectedPage === p.id && (
                      <button 
                        onClick={async (e) => {
                          e.stopPropagation();
                          if (confirm(`Are you sure you want to PERMANENTLY delete the "${p.label}" topic and all its media?`)) {
                            try {
                              const { deletePageMedia } = await import('../../../lib/api');
                              await deletePageMedia(p.id, token);
                              setPages(prev => prev.filter(pg => pg.id !== p.id));
                              setSelectedPage('events');
                              setMessage({ text: 'Topic deleted successfully', type: 'success' });
                            } catch (err: any) {
                              setMessage({ text: err.message, type: 'error' });
                            }
                          }
                        }}
                        className="absolute -top-1 -left-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover/btn:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-700 shadow-sm z-20 pointer-events-auto"
                      >
                        <span className="material-symbols-outlined text-[10px]">delete</span>
                      </button>
                    )}
                  </div>
                ))}
              <button
                onClick={() => {
                  const name = prompt('Enter New Event Topic Name (e.g. Science Fair)');
                  if (name) {
                    const id = 'event-' + name.toLowerCase().replace(/\s+/g, '-');
                    if (!pages.find(p => p.id === id)) {
                      setPages(prev => [...prev, { id, label: name.toUpperCase(), group: 'Events' }]);
                    }
                    setSelectedPage(id);
                  }
                }}
                className="px-4 py-2 rounded-full text-sm font-bold bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Add New Topic
              </button>
            </div>
            {selectedPage.startsWith('event-') && (
              <div className="px-4 py-2 bg-primary/5 rounded-lg border border-primary/10 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-primary">Editing Event: {pages.find(p => p.id === selectedPage)?.label}</span>
              </div>
            )}
          </div>
        )}
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
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-outline-variant/20 pb-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">perm_media</span>
              Gallery Images
            </h2>
            {galleryImages.length > 0 && (
              <button
                onClick={() => { if (confirm('Clear all images in this gallery?')) { setGalleryImages([]); setHasUnsavedChanges(true); } }}
                className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 uppercase tracking-tight"
              >
                <span className="material-symbols-outlined text-sm">delete_sweep</span>
                Clear All Images
              </button>
            )}
          </div>
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
                    className="absolute top-2 right-2 bg-red-500/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-600 shadow-md"
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
