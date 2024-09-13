// src/components/ResourceList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourceList.css';  

const ResourceList = ({ resources }) => {
    const navigate = useNavigate();

    const handleResourceClick = (path) => {
        navigate(path);
    };

    return (

            <div className="resource-list">
                {resources.map(resource => (
                    <div className="resource-item" key={resource.id} onClick={() => handleResourceClick(resource.path)}>
                        {resource.name}
                    </div>
                ))}
            </div>

    );
};

export default ResourceList;
