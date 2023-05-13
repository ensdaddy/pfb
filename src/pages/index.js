import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setJson } from '../store/json';

export default function Home() {
  const [namespaceId, setNamespaceId] = useState('');
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/submit_pfb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          namespace_id: namespaceId,
          data: data
        })
      });
      const result = await response.json();

      dispatch(setJson(result))

      router.push({
        pathname: '/result',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white font-bold text-xl shadow-md mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707,18.293c0.391,0.391,1.023,0.391,1.414,0l6-6c0.391-0.391,0.391-1.023,0-1.414L11.121,1.707C10.93,1.516,10.693,1.414,10.455,1.414h-1.414C8.307,1.414,8.07,1.516,7.879,1.707L1.293,8.293c-0.391,0.391-0.391,1.023,0,1.414l6,6C9.684,18.684,10.316,18.684,10.707,18.293z" />
        </svg>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-white">CELESTIA BLOCKSPACERACE-0</h1>

      <form onSubmit={handleSubmit} className="max-w-xl w-full max-w-md mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-md p-8">
        <div className="mb-4">
          <label htmlFor="namespace_id" className="block font-medium text-gray-400 mb-2">Namespace Id</label>
          <input
            type="text"
            id="namespace_id"
            name="namespace_id"
            value={namespaceId}
            onChange={(e) => setNamespaceId(e.target.value)}
            placeholder="Enter namespace ID should be 8 bytes"
            className="border border-gray-600 bg-gray-800 rounded-full w-full py-3 px-4 placeholder-gray-400 text-gray-400 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="data" className="block font-medium text-gray-400 mb-2">HEX-ENCODED BYTES</label>
          <textarea
            id="data"
            name="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter data is in hex-encoded bytes of the raw message"
            className="border border-gray-600 bg-gray-800 rounded-full w-full py-3 px-4 placeholder-gray-400 text-gray-400 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}