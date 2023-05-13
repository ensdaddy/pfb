import { useRouter } from 'next/router';
import JsonDisplay from './JsonDisplay';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Result() {
    const router = useRouter();

    const json = useSelector((state) => state.json);

    const [expanded, setExpanded] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
            <div className="max-w-xl w-full mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-md p-8">
                <h1 className="text-2xl font-bold mb-4 text-white">Result</h1>

                <JsonDisplay data={json} />
                <button
                    onClick={() => router.push('/')}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
                >
                    Back to form
                </button>
            </div>
        </div>
    );
}

