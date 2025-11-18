'use client';

import React from 'react';

export default function Page() {
  // sample data - replace with real data or props
  const post = {
    title: "How to Travel Kumaon on a Budget",
    subtitle: "A practical, beautifully simple guide for backpackers and weekenders",
    author: {
      name: 'Akhil Tv',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    },
    date: 'November 18, 2025',
    readTime: '6 min read',
    tags: ['Kumaon', 'Budget Travel', 'Itinerary', 'India'],
    hero: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60',
    content: `

**Introduction**

Kumaon is a beautiful and affordable region to explore if you know where to save and where to spend. In this post you'll find a compact itinerary, budgeting tips, and what to pack.

### 1. Getting there
Take a sleeper bus or shared taxi from major hubs. Trains to nearby junctions plus a short taxi are often cheapest.

> "Travel doesn't have to be expensive to be memorable." — Travel Guide

### 2. Where to stay
Look for homestays and guesthouses in small towns — they are way cheaper than hotels and often include breakfast.

### 3. Sample 3-day budget itinerary
- Day 1: Arrive, local market, short trek.
- Day 2: Full-day trek or sightseeing.
- Day 3: Return via scenic route.

### 4. Packing list
Bring layers, a light rain jacket, and comfortable footwear. Keep electronics minimal to enjoy the outdoors.

### Final tips
Negotiate shared rides, eat where locals eat, and always carry small change for local transport.

    `,
  };

  const related = [
    { id: 1, title: 'Top 7 Treks near Nainital', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=60' },
    { id: 2, title: 'Budget Packing Hacks', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=60' },
    { id: 3, title: 'Hidden Cafes of Kumaon', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=60' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-20">
      <article className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main column */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="relative">
            <img
              src={post.hero}
              alt="hero"
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
              {post.date} • {post.readTime}
            </div>
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">{post.title}</h1>
            <p className="text-gray-600 mb-6">{post.subtitle}</p>

            <div className="flex items-center gap-3 mb-6">
              <img src={post.author.avatar} alt="author" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium">{post.author.name}</div>
                <div className="text-xs text-gray-500">Author</div>
              </div>
            </div>

            <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }} />

            {/* Tags + share */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="text-sm px-3 py-1 border rounded-full text-gray-700 border-gray-200">#{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Share</span>
                <ShareButton label="Twitter" svg={twitterSvg} />
                <ShareButton label="Facebook" svg={facebookSvg} />
                <ShareButton label="Copy" svg={copySvg} onClick={() => copyToClipboard(window.location.href)} />
              </div>
            </div>

            {/* Comments mockup */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Comments</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <div className="text-sm font-medium">Rohit</div>
                      <div className="text-xs text-gray-500 mb-2">Nov 12, 2025</div>
                      <div className="text-gray-700 text-sm">Great tips — saved this for my trip!</div>
                    </div>
                  </div>
                </div>

                <form className="space-y-2">
                  <textarea className="w-full border rounded-lg p-3" rows={3} placeholder="Write a comment..." />
                  <div className="flex justify-end">
                    <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-lg">Post comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-semibold mb-3">Related posts</h4>
              <div className="space-y-3">
                {related.map((r) => (
                  <a key={r.id} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg" href="#">
                    <img src={r.img} alt="r" className="w-16 h-12 object-cover rounded" />
                    <div className="text-sm font-medium">{r.title}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-semibold mb-3">Subscribe</h4>
              <p className="text-sm text-gray-600 mb-3">Get weekly travel tips in your inbox.</p>
              <div className="flex gap-2">
                <input className="flex-1 border rounded-lg px-3 py-2" placeholder="Email address" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Subscribe</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-semibold mb-3">About author</h4>
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt="a" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-medium">{post.author.name}</div>
                  <div className="text-xs text-gray-500">Traveller & developer</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
}


/* ---------- Helpers & small components ---------- */

function ShareButton({ label, svg, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm hover:bg-gray-100"
      aria-label={`Share to ${label}`}
    >
      <span className="w-4 h-4" dangerouslySetInnerHTML={{ __html: svg }} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

function copyToClipboard(text) {
  if (!text) return;
  try {
    navigator.clipboard.writeText(text);
    alert('Link copied to clipboard');
  } catch (e) {
    console.error(e);
  }
}

function mdToHtml(md) {
  // Minimal markdown -> html converter for headings, lists, bold, blockquote, and paragraphs.
  // For production use, replace with a proper markdown library (remark/marked).
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/>\s?(.*)/gim, '<blockquote>$1</blockquote>')
    .replace(/^-\s+(.*)/gim, '<li>$1</li>')
    .replace(/\n\n+/gim, '</p><p>');

  html = '<p>' + html + '</p>';
  html = html.replace(/<p><\/p>/g, '');
  // wrap list items
  if (html.includes('<li>')) html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
  return html;
}

const twitterSvg = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M20 7.5c-.5.2-1 .3-1.6.4.6-.4 1-1 1.2-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.8 0-3.2 1.7-2.9 3.4-2.4-.1-4.6-1.2-6-2.8-.8 1.4-.4 3.4 1 4.4-.5 0-1-.2-1.4-.4 0 1.4 1 2.6 2.4 2.9-.5.1-1 .1-1.5 0 .4 1.2 1.6 2 3 2-1.2 1-2.6 1.6-4.2 1.6H6c1.6 1 3.4 1.6 5.4 1.6 6.5 0 10.1-5.5 10.1-10.3v-.5c.7-.5 1.2-1.2 1.6-2z" fill="currentColor"/></svg>
`;
const facebookSvg = `
<svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12H20l-.5 3.9h-2.1v7A10 10 0 0022 12z" fill="currentColor"/></svg>
`;
const copySvg = `
<svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4a2 2 0 00-2 2v12h2V3h12V1zM19 5H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z" fill="currentColor"/></svg>
`;
