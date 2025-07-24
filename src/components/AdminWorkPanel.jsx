import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { log } from 'three/src/nodes/TSL.js';

const AdminWorkPanel = () => {
    const [works, setWorks] = useState([]);
    const [currentWork, setCurrentWork] = useState({
        label: '',
        content: '',
        images: [],
        p: '',
        li1: '',
        li2: '',
        li3: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            setIsAuthenticated(true);
            fetchWorks();
        }
    }, []); 

    const authenticate = () => {
        const correctPassword = 'Karama1@raval';
        if (password === correctPassword) {
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuthenticated(true);
            fetchWorks();
        } else {
            alert('Incorrect password!');
        }
    };

    

    const fetchWorks = async () => {
        setIsLoading(true);
        try {

            const response = await fetch('https://karamaserver.onrender.com/api/works', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            setWorks(data);
        } catch (error) {
            console.error('Error fetching works:', error);
            // Add user notification here (toast, alert, etc.)
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const url = editingId
                ? `https://karamaserver.onrender.com/api/works/${editingId}`
                : 'https://karamaserver.onrender.com/api/works';

            const method = editingId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentWork),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            fetchWorks();
            resetForm();
        } catch (error) {
            console.error('Error saving work:', error);
            // Add user notification here (toast, alert, etc.)
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (work) => {
        setCurrentWork({
            label: work.label,
            content: work.content,
            images: work.images,
            p: work.p,
            li1: work.li1,
            li2: work.li2,
            li3: work.li3
        });
        setEditingId(work._id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this work item?')) {
            setIsLoading(true);
            try {
                await fetch(`https://karamaserver.onrender.com/api/works/${id}`, {
                    method: 'DELETE',
                });
                fetchWorks();
            } catch (error) {
                console.error('Error deleting work:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const resetForm = () => {
        setCurrentWork({
            label: '',
            content: '',
            images: [],
            p: '',
            li1: '',
            li2: '',
            li3: ''
        });
        setEditingId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentWork(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImagesChange = (e) => {
        const images = e.target.value.split(',').map(img => img.trim());
        setCurrentWork(prev => ({
            ...prev,
            images
        }));
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
      
        // Validate file type
        if (!file.type.match('image.*')) {
          alert('Please select an image file');
          return;
        }
      
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
          alert('File size must be less than 5MB');
          return;
        }
      
        setUploading(true);
        
        try {
          const formData = new FormData();
          formData.append('image', file);
      
          const response = await fetch('https://karamaserver.onrender.com/api/upload', {
            method: 'POST',
            body: formData,
            // Don't set Content-Type header - let browser set it with boundary
          });
      
          console.log(response);
          
          const result = await response.json();
          console.log("result",result);
          
          if (!response.ok || !result.success) {
            throw new Error(result.error || 'Upload failed');
          }
          
          setCurrentWork(prev => ({
            ...prev,
            images: [...prev.images, result.imageUrl]
          }));
      
        } catch (error) {
          console.error('Upload error:', error);
          alert(`Upload failed: ${error.message}`);
        } finally {
          setUploading(false);
          e.target.value = ''; // Reset input
        }
      };


    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-4 px-3 py-2 border rounded-md"
                    />
                    <button
                        onClick={authenticate}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <h1 className="text-3xl font-bold mb-8">Work Items Management</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    {editingId ? 'Edit Work Item' : 'Add New Work Item'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                        <input
                            type="text"
                            name="label"
                            value={currentWork.label}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <input
                            type="text"
                            name="content"
                            value={currentWork.content}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>

                    {/* File input */}
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                    />

                    {/* Custom upload button */}
                    <label
                        htmlFor="image-upload"
                        className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-md cursor-pointer hover:bg-blue-200 mb-2"
                    >
                        {uploading ? 'Uploading...' : 'Select Image'}
                    </label>

                    {/* Preview uploaded images */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {currentWork.images.map((imageUrl, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={`${imageUrl}`}
                                    alt={`Preview ${index}`}
                                    className="h-20 w-20 object-cover rounded"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setCurrentWork(prev => ({
                                            ...prev,
                                            images: prev.images.filter((_, i) => i !== index)
                                        }));
                                    }}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        name="p"
                        value={currentWork.p}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows="3"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">List Item 1</label>
                        <input
                            type="text"
                            name="li1"
                            value={currentWork.li1}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">List Item 2</label>
                        <input
                            type="text"
                            name="li2"
                            value={currentWork.li2}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">List Item 3</label>
                        <input
                            type="text"
                            name="li3"
                            value={currentWork.li3}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                    >
                        {isLoading ? 'Processing...' : editingId ? 'Update' : 'Add'}
                    </button>

                    {editingId && (
                        <button
                            type="button"
                            onClick={resetForm}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Work Items List</h2>

                {isLoading && works.length === 0 ? (
                    <p>Loading works...</p>
                ) : (
                    <div className="space-y-4">
                        {works.map((work) => (
                            <motion.div
                                key={work._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium">{work.label}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-1">{work.p}</p>
                                    </div>

                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEdit(work)}
                                            className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(work._id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default AdminWorkPanel;