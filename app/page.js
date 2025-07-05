import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">Resume Builder</h1>
                <Link 
                    href="/editor" 
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium"
                >
                    Create Resume
                </Link>
            </div>
        </div>
    );
}