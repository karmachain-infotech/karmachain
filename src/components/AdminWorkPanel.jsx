import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import toast, { Toaster } from 'react-hot-toast';
import { 
  Upload, 
  Edit3, 
  Trash2, 
  Plus, 
  Save, 
  X, 
  GripVertical, 
  Eye, 
  Image as ImageIcon,
  Lock,
  LogOut,
  Loader,
  Link as LinkIcon
} from 'lucide-react';
export const API_BASE_URL = import.meta.env.VITE_SERVER_URL;
export const ADMIN_PASS = import.meta.env.VITE_ADMINPASS;


// Memoized Draggable Item Component
const MemoizedDraggableItem = React.memo(({ work, index, handleEdit, handleDelete }) => {
  return (
    <Draggable key={work._id} draggableId={work._id} index={index}>
      {(provided, snapshot) => (
        <motion.div
          ref={provided.innerRef}
          {...provided.draggableProps}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: snapshot.isDragging ? 1.02 : 1,
            boxShadow: snapshot.isDragging ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
          }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className={`bg-white border-2 ${
            snapshot.isDragging 
              ? 'border-blue-300 shadow-xl' 
              : 'border-gray-100 hover:border-gray-200'
          } rounded-xl p-6 mb-4 transition-all duration-200`}
        >
          <div className="flex items-start gap-4">
            <div
              {...provided.dragHandleProps}
              className="p-2 hover:bg-gray-200 rounded-lg cursor-grab active:cursor-grabbing transition-colors"
            >
              <GripVertical className="w-5 h-5 text-gray-400" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{work.label}</h3>
                  <p className="text-gray-600 line-clamp-2 mb-3">{work.p}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {[work.li1, work.li2, work.li3].filter(Boolean).map((item, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                  {work.liveLink && (
                    <a 
                      href={work.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Live Project Link
                    </a>
                  )}
                </div>

                {work.images.length > 0 && (
                  <div className="flex gap-2">
                    {work.images.slice(0, 3).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${work.label} ${idx + 1}`}
                        className="w-12 h-12 object-cover rounded-lg border-2 border-white shadow-sm"
                      />
                    ))}
                    {work.images.length > 3 && (
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600 font-medium">
                        +{work.images.length - 3}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEdit(work)}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors font-medium"
                >
                  <Edit3 className="w-4 h-4" />
                  Edit
                </motion.button>
                
                {work.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={work.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    View Live
                  </motion.a>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDelete(work._id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Draggable>
  );
});

const AdminWorkPanel = () => {
    const [works, setWorks] = useState([]);
    const [currentWork, setCurrentWork] = useState({
        label: '',
        content: '',
        images: [],
        p: '',
        li1: '',
        li2: '',
        li3: '',
        liveLink: '',
        order: 0
    });
    const [editingId, setEditingId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [isReordering, setIsReordering] = useState(false);

    const fetchWorks = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/works`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const sortedData = data.sort((a, b) => (a.order || 0) - (b.order || 0));
            setWorks(sortedData);
            toast.success('Works loaded successfully');
        } catch (error) {
            console.error('Error fetching works:', error);
            toast.error('Failed to load works');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            setIsAuthenticated(true);
            fetchWorks();
        }
    }, [fetchWorks]); 

    const authenticate = () => {
        const correctPassword = ADMIN_PASS;
        if (password === correctPassword) {
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuthenticated(true);
            fetchWorks();
            toast.success('Successfully authenticated!');
        } else {
            toast.error('Incorrect password!');
        }
    };

    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        setWorks([]);
        setPassword('');
        toast.success('Logged out successfully');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const workData = {
                ...currentWork,
                order: editingId ? currentWork.order : works.length
            };

            const url = editingId
                ? `${API_BASE_URL}/api/works/${editingId}`
                : `${API_BASE_URL}/api/works`;

            const method = editingId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            await fetchWorks();
            resetForm();
            setShowForm(false);
            toast.success(editingId ? 'Work updated successfully!' : 'Work added successfully!');
        } catch (error) {
            console.error('Error saving work:', error);
            toast.error('Failed to save work');
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
            li3: work.li3,
            liveLink: work.liveLink || '',
            order: work.order || 0
        });
        setEditingId(work._id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this work item?')) {
            setIsLoading(true);
            try {
                await fetch(`${API_BASE_URL}/api/works/${id}`, {
                    method: 'DELETE',
                });
                await fetchWorks();
                toast.success('Work deleted successfully');
            } catch (error) {
                console.error('Error deleting work:', error);
                toast.error('Failed to delete work');
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
            li3: '',
            liveLink: '',
            order: 0
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

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
      
        if (!file.type.match('image.*')) {
          toast.error('Please select an image file');
          return;
        }
      
        if (file.size > 5 * 1024 * 1024) {
          toast.error('File size must be less than 5MB');
          return;
        }
      
        setUploading(true);
        const uploadToast = toast.loading('Uploading image...');
        
        try {
          const formData = new FormData();
          formData.append('image', file);
      
          const response = await fetch(`${API_BASE_URL}/api/upload`, {
            method: 'POST',
            body: formData,
          });
      
          const result = await response.json();
          
          if (!response.ok || !result.success) {
            throw new Error(result.error || 'Upload failed');
          }
          
          setCurrentWork(prev => ({
            ...prev,
            images: [...prev.images, result.imageUrl]
          }));

          toast.success('Image uploaded successfully', { id: uploadToast });
      
        } catch (error) {
          console.error('Upload error:', error);
          toast.error(`Upload failed: ${error.message}`, { id: uploadToast });
        } finally {
          setUploading(false);
          e.target.value = '';
        }
    };

    const handleDragEnd = async (result) => {
        if (!result.destination) return;
        if (result.source.index === result.destination.index) return;

        setIsReordering(true);
        
        const items = Array.from(works);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setWorks(items);

        try {
            const response = await fetch(`${API_BASE_URL}/api/works/reorder`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    draggedId: reorderedItem._id,
                    newIndex: result.destination.index
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update order');
            }

            await fetchWorks();
            toast.success('Order updated successfully');
        } catch (error) {
            console.error('Error updating order:', error);
            toast.error('Failed to update order');
            setWorks(works);
        } finally {
            setIsReordering(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
                <Toaster position="top-right" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100"
                >
                    <div className="text-center mb-8">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Access</h2>
                        <p className="text-gray-600">Enter your password to continue</p>
                    </div>
                    
                    <form onSubmit={(e) => { e.preventDefault(); authenticate(); }} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all duration-200"
                                required
                            />
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Access Admin Panel
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 lg:p-8">
            <Toaster position="top-right" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                Work Portfolio Manager
                            </h1>
                            <p className="text-gray-600 mt-1">Manage and organize your work items</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => { setShowForm(true); resetForm(); }}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Add New Work
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={logout}
                                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold flex items-center gap-2"
                            >
                                <LogOut className="w-5 h-5" />
                                Logout
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <AnimatePresence>
                        {showForm && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="xl:col-span-1"
                            >
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-bold text-gray-800">
                                            {editingId ? 'Edit Work Item' : 'Add New Work Item'}
                                        </h2>
                                        <button
                                            onClick={() => { setShowForm(false); resetForm(); }}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Label</label>
                                                <input
                                                    type="text"
                                                    name="label"
                                                    value={currentWork.label}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all duration-200"
                                                    placeholder="Enter project name..."
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                                                <input
                                                    type="text"
                                                    name="content"
                                                    value={currentWork.content}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all duration-200"
                                                    placeholder="Brief content description..."
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Live Project Link */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Live Project Link</label>
                                            <input
                                                type="url"
                                                name="liveLink"
                                                value={currentWork.liveLink}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all duration-200"
                                                placeholder="https://example.com"
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Leave empty if no live link available</p>
                                        </div>

                                        {/* Image Upload Section */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">Project Images</label>
                                            
                                            <input
                                                type="file"
                                                onChange={handleFileUpload}
                                                accept="image/*"
                                                className="hidden"
                                                id="image-upload"
                                            />

                                            <label
                                                htmlFor="image-upload"
                                                className="flex items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                                            >
                                                {uploading ? (
                                                    <Loader className="w-5 h-5 animate-spin text-blue-600" />
                                                ) : (
                                                    <Upload className="w-5 h-5 text-gray-500" />
                                                )}
                                                <span className="text-gray-600 font-medium">
                                                    {uploading ? 'Uploading...' : 'Upload Image'}
                                                </span>
                                            </label>

                                            {/* Image Preview */}
                                            {currentWork.images.length > 0 && (
                                                <div className="grid grid-cols-2 gap-3 mt-4">
                                                    {currentWork.images.map((imageUrl, index) => (
                                                        <div key={index} className="relative group">
                                                            <img
                                                                src={imageUrl}
                                                                alt={`Preview ${index}`}
                                                                className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setCurrentWork(prev => ({
                                                                        ...prev,
                                                                        images: prev.images.filter((_, i) => i !== index)
                                                                    }));
                                                                }}
                                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                                            <textarea
                                                name="p"
                                                value={currentWork.p}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all duration-200 resize-none"
                                                rows="4"
                                                placeholder="Detailed project description..."
                                                required
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="block text-sm font-semibold text-gray-700">Key Features</label>
                                            {['li1', 'li2', 'li3'].map((field, index) => (
                                                <input
                                                    key={field}
                                                    type="text"
                                                    name={field}
                                                    value={currentWork[field]}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all duration-200"
                                                    placeholder={`Feature ${index + 1}...`}
                                                    required
                                                />
                                            ))}
                                        </div>

                                        <div className="flex gap-3 pt-6">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                disabled={isLoading}
                                                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                                            >
                                                {isLoading ? (
                                                    <Loader className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <Save className="w-5 h-5" />
                                                )}
                                                {isLoading ? 'Processing...' : editingId ? 'Update' : 'Add Work'}
                                            </motion.button>

                                            {editingId && (
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="button"
                                                    onClick={() => { resetForm(); setShowForm(false); }}
                                                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold"
                                                >
                                                    Cancel
                                                </motion.button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Works List */}
                    <div className={`${showForm ? 'xl:col-span-2' : 'xl:col-span-3'} transition-all duration-300`}>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800">Work Portfolio ({works.length})</h2>
                                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    {isReordering ? (
                                        <span className="flex items-center gap-2">
                                            <Loader className="w-3 h-3 animate-spin" />
                                            Saving new order...
                                        </span>
                                    ) : (
                                        'Drag to reorder projects'
                                    )}
                                </div>
                            </div>

                            {isLoading && works.length === 0 ? (
                                <div className="text-center py-12">
                                    <Loader className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
                                    <p className="text-gray-600">Loading works...</p>
                                </div>
                            ) : works.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ImageIcon className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <p className="text-gray-600 mb-4">No work items yet</p>
                                    <button
                                        onClick={() => { setShowForm(true); resetForm(); }}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Add Your First Work
                                    </button>
                                </div>
                            ) : (
                                <DragDropContext onDragEnd={handleDragEnd}>
                                    <Droppable droppableId="works">
                                        {(provided, snapshot) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className={`space-y-4 ${
                                                    snapshot.isDraggingOver ? 'bg-blue-50 rounded-xl p-4' : ''
                                                } transition-all duration-200`}
                                            >
                                                {works.map((work, index) => (
                                                    <MemoizedDraggableItem 
                                                        key={work._id}
                                                        work={work}
                                                        index={index}
                                                        handleEdit={handleEdit}
                                                        handleDelete={handleDelete}
                                                    />
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminWorkPanel;