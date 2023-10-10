'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { hostApi } from '@/utils/url/host-api';

export default function AddPost() {
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await fetch(hostApi('posts'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    setTitle('');
    setContent('');

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
      <div>
        <label htmlFor="title">title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border"
          required
        />
      </div>
      <div>
        <label htmlFor="content">content:</label>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border"
          required
        />
      </div>
      <div>
        <button type="submit" className="rounded-lg bg-blue-500 px-2 py-1 text-white">
          Submit
        </button>
      </div>
    </form>
  );
}
