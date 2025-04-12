import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Profile = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No authentication token found. Please log in.');
          return;
        }

        const response = await axios.get('http://localhost:4002/api/videos/videos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (response.data.success && response.data.videos.length > 0) {
          setVideos(response.data.videos);
          setError(null);
        } else {
          setError('No videos available');
        }
      } catch (error) {
        setError(error.response?.data?.message || 'Error fetching videos');
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
    setIsPlaying(false);
    lastTimeRef.current = 0;
  };

  const getVideoUrl = (video) => {
    if (!video) return '';
    return `http://localhost:4002/api/videos/${video._id}/stream`;
  };

  const getThumbnailUrl = (video) => {
    if (!video?.thumbnail) return null;
    const cleanPath = video.thumbnail
      .replace(/\\/g, '/')
      .replace(/^\/+/, '')
      .replace(/\/+/g, '/');
    return `http://localhost:4002/${cleanPath}`;
  };

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      lastTimeRef.current = videoRef.current.currentTime;
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleSeeking = () => {
    setIsPlaying(false);
  };

  const handleSeeked = () => {
    if (videoRef.current) {
      lastTimeRef.current = videoRef.current.currentTime;
      setIsPlaying(!videoRef.current.paused);
    }
  };

  const getCurrentVideoTime = () => {
    if (videoRef.current && isPlaying) {
      console.log(`Current Time: ${videoRef.current.currentTime.toFixed(2)} seconds`);
    }
  };

  return (
    <div className="mt-20 px-4 py-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profile Page</h1>
        
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            {selectedVideo && (
              <div className="mb-8 bg-white rounded-lg shadow p-6">
                <video 
                  ref={videoRef}
                  controls 
                  className="w-full rounded-lg"
                  src={getVideoUrl(videos.find(v => v._id === selectedVideo))}
                  onTimeUpdate={getCurrentVideoTime}
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onSeeking={handleSeeking}
                  onSeeked={handleSeeked}
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div 
                  key={video._id}
                  className={`bg-white rounded-lg shadow overflow-hidden cursor-pointer transform transition-transform hover:scale-105 ${
                    selectedVideo === video._id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => handleVideoSelect(video._id)}
                >
                  <div className="aspect-video bg-gray-100 relative">
                    {getThumbnailUrl(video) ? (
                      <img 
                        src={getThumbnailUrl(video)} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg 
                          className="w-16 h-16 text-gray-400" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-gray-600 text-sm mb-2">
                        {video.description}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm">
                      Duration: {Math.floor(video.duration / 60)}m {video.duration % 60}s
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 