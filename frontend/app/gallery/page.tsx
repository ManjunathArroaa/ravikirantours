'use client';

import React from 'react';

export default function GalleryPage() {
  const galleries = [
    { id: 1, title: 'Temple Tours', photos: 12 },
    { id: 2, title: 'Jyotirlinga Tours', photos: 8 },
    { id: 3, title: 'Char Dham Tours', photos: 15 },
    { id: 4, title: 'South India Temple Tours', photos: 10 },
    { id: 5, title: 'Festival Tours', photos: 6 },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-saffron to-orange-600 text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Photo Gallery</h1>
          <p className="text-lg opacity-90">
            Explore the beauty of our pilgrimage tours
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery) => (
              <div key={gallery.id} className="card p-8 text-center hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-navy mb-2">{gallery.title}</h3>
                <p className="text-gray-600 mb-4">{gallery.photos} photos</p>
                <button className="btn-primary w-full">View Album</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
