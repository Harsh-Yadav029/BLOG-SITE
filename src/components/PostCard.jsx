import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-full justify-center">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="h-48 w-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-900 truncate">{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;