'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAllPageMedia, getMediaUrl } from '../../lib/api';

export default function EventsPage() {
  const [allMedia, setAllMedia] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPageMedia()
      .then(setAllMedia)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const generalEvents = allMedia.find(m => m.page === 'events');
  const eventModules = allMedia.filter(m => m.page.startsWith('event-'));

  if (isLoading) {
    return (
      <div className="pt-40 pb-40 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-32 bg-slate-50/50">
      <section className="px-8 max-w-5xl mx-auto space-y-24">
        
        {/* General Events Hero (if set) */}
        {generalEvents?.heroImageUrl && (
          <div className="relative w-full aspect-[21/7] rounded-[40px] overflow-hidden shadow-2xl group border-4 border-white">
            <Image 
              src={getMediaUrl(generalEvents.heroImageUrl)} 
              alt="Recent Events" 
              fill unoptimized 
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-12">
               <div className="max-w-xl space-y-4">
                  <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">Our Recent <span className="text-primary italic">Events</span></h1>
                  <p className="text-white/80 text-lg leading-relaxed">Explore the vibrant activities, competitions, and learning journeys at Kids Career Academy.</p>
               </div>
            </div>
          </div>
        )}

        {/* General Events Gallery Highlights */}
        {generalEvents?.galleryImages?.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
              <h2 className="text-3xl font-black text-on-surface tracking-tight">Moments at KCA</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {generalEvents.galleryImages.slice(0, 4).map((img: string, idx: number) => (
                <div key={idx} className="aspect-square relative rounded-3xl overflow-hidden shadow-premium group">
                  <Image src={getMediaUrl(img)} alt={`KCA Moment ${idx}`} fill unoptimized className="object-cover group-hover:scale-110 transition-all" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topic Specific Events */}
        {eventModules.length > 0 && (
          <div className="space-y-32">
            {eventModules.map((event, i) => {
              const title = event.page.replace('event-', '').replace(/-/g, ' ').toUpperCase();
              return (
                <div key={event.id} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="flex items-center gap-6">
                    <h2 className="text-2xl font-black text-on-surface tracking-tight whitespace-nowrap">{title}</h2>
                    <div className="h-px bg-outline-variant/20 flex-grow"></div>
                  </div>

                  {/* Hero / Cover */}
                  {event.heroImageUrl && (
                    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-premium group">
                      <Image src={getMediaUrl(event.heroImageUrl)} alt={title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <span className="text-white font-bold text-xl opacity-80 uppercase tracking-widest">{title} HIGHLIGHTS</span>
                      </div>
                    </div>
                  )}

                  {/* Gallery & Videos */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Gallery */}
                    {event.galleryImages?.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">photo_library</span>
                          Gallery
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {event.galleryImages.slice(0, 4).map((img: string, idx: number) => (
                            <div key={idx} className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm hover:scale-[1.03] transition-transform cursor-pointer">
                              <Image src={getMediaUrl(img)} alt={`${title} image ${idx}`} fill unoptimized className="object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Videos */}
                    {event.youtubeVideoIds?.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">videocam</span>
                          Videos
                        </h3>
                        <div className="space-y-4">
                          {event.youtubeVideoIds.slice(0, 2).map((vid: string, idx: number) => (
                            <div key={idx} className="aspect-video relative rounded-2xl overflow-hidden shadow-md border border-outline-variant/10">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${vid}`}
                                title={`${title} video ${idx}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="border-0"
                              ></iframe>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {eventModules.length === 0 && !generalEvents?.galleryImages?.length && (
           <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-outline-variant/30">
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">event_note</span>
            <p className="text-slate-400 font-medium">No events added yet.</p>
          </div>
        )}

      </section>
    </main>
  );
}
