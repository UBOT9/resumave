'use client';

import { useSelector, useDispatch } from 'react-redux';
import { updateResumeValue, saveResume } from '@/store/slices/resumeSlice';
import { useState } from 'react';

export default function Editor() {
    const dispatch = useDispatch();
    const resumeData = useSelector(state => state.resume);
    const [activeTab, setActiveTab] = useState('contact');

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateResumeValue({
            tab: activeTab,
            name,
            value,
        }));
    };

    const handleSave = () => {
        dispatch(saveResume());
        alert('Resume saved!');
    };

    const tabs = ['contact', 'summary', 'education', 'experience', 'projects', 'skills'];

    return (
        <div className="min-h-screen bg-gray-800 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Resume Editor</h1>
                
                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded capitalize ${
                                activeTab === tab 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Editor */}
                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4 capitalize">{activeTab}</h2>
                        
                        {activeTab === 'contact' && (
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={resumeData.contact.name}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-600 rounded border border-gray-500 text-white"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={resumeData.contact.email}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-600 rounded border border-gray-500 text-white"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={resumeData.contact.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-600 rounded border border-gray-500 text-white"
                                />
                            </div>
                        )}

                        {activeTab === 'summary' && (
                            <textarea
                                name="summary"
                                placeholder="Professional summary..."
                                value={resumeData.summary.summary}
                                onChange={handleChange}
                                rows={6}
                                className="w-full p-3 bg-gray-600 rounded border border-gray-500 text-white"
                            />
                        )}

                        {activeTab === 'skills' && (
                            <textarea
                                name="skills"
                                placeholder="List your skills..."
                                value={resumeData.skills.skills}
                                onChange={handleChange}
                                rows={6}
                                className="w-full p-3 bg-gray-600 rounded border border-gray-500 text-white"
                            />
                        )}

                        <button
                            onClick={handleSave}
                            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-medium"
                        >
                            Save
                        </button>
                    </div>

                    {/* Preview */}
                    <div className="bg-white text-black p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Preview</h2>
                        
                        <div className="space-y-4">
                            {resumeData.contact.name && (
                                <h1 className="text-2xl font-bold">{resumeData.contact.name}</h1>
                            )}
                            
                            {(resumeData.contact.email || resumeData.contact.phone) && (
                                <div className="text-sm text-gray-600">
                                    {resumeData.contact.email && <div>{resumeData.contact.email}</div>}
                                    }
                                    {resumeData.contact.phone && <div>{resumeData.contact.phone}</div>}
                                    }
                                </div>
                            )}

                            {resumeData.summary.summary && (
                                <div>
                                    <h3 className="font-semibold mb-2">Summary</h3>
                                    <p className="text-sm">{resumeData.summary.summary}</p>
                                </div>
                            )}

                            {resumeData.skills.skills && (
                                <div>
                                    <h3 className="font-semibold mb-2">Skills</h3>
                                    <p className="text-sm">{resumeData.skills.skills}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}