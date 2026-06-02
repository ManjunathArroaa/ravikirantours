import React from 'react';

export default function YatraDetailPage({ params }: { params: { id: string } }) {
  const yatraId = params.id;

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-saffron to-orange-600 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold">Yatra Details</h1>
          <p className="text-lg opacity-90">Yatra ID: {yatraId}</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container">
          <p className="text-lg text-gray-600">
            Detailed yatra information will be loaded from the API here.
          </p>
          {/* Will be replaced with dynamic content from API */}
        </div>
      </section>
    </main>
  );
}
