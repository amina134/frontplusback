import React, { useState } from 'react';
import './cardStyle.css'; 

const PlayerCard = ({ player, onDelete, onUpdate }) => {
    // Track the edit state and the updated values for the player
    const [isEditing, setIsEditing] = useState(false);
    const [updatedPlayer, setUpdatedPlayer] = useState({
        name: player.name,
        team: player.team,
        nationality: player.nationality,
        jerseyNumber: player.jerseyNumber,
        age: player.age,
        image: player.image,
    });

    // Toggle the editing state
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    // Handle changes to the input fields
    const handleChange = (e) => {     
        setUpdatedPlayer((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle save/update action
    const handleSaveClick = () => {
        onUpdate(player._id, updatedPlayer);  // Send the updated player data to the parent component
        setIsEditing(false);  // Disable editing mode
    };

    return (
        <div className="player-card">
        <div className='image-container'>
            <img src={player.image} alt={player.name} className="player-image" />
            </div>
            <p className=" hey player-name">
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value={updatedPlayer.name} 
                    onChange={handleChange} 
                    disabled={!isEditing} 
                />
            </p>
            <p className=" hey player-team">
                Team: 
                <input 
                    type="text" 
                    name="team" 
                    value={updatedPlayer.team} 
                    onChange={handleChange} 
                    disabled={!isEditing} 
                />
            </p>
            <p className=" hey player-nationality">
                Nationality: 
                <input 
                    type="text" 
                    name="nationality" 
                    value={updatedPlayer.nationality} 
                    onChange={handleChange} 
                    disabled={!isEditing} 
                />
            </p>
            <p className=" hey player-jersey-number">
                Jersey Number: 
                <input 
                    type="number" 
                    name="jerseyNumber" 
                    value={updatedPlayer.jerseyNumber} 
                    onChange={handleChange} 
                    disabled={!isEditing} 
                />
            </p>
            <p className=" hey player-age">
                Age: 
                <input 
                    type="number" 
                    name="age" 
                    value={updatedPlayer.age} 
                    onChange={handleChange} 
                    disabled={!isEditing} 
                />
            </p>
            <div className="button-container">
                {isEditing ? (
                    <button className="save-button" onClick={handleSaveClick}>Save</button>
                ) : (
                    <button className="edit-button" onClick={handleEditClick}>Edit</button>
                )}
                <button className="delete-button" onClick={() => onDelete(player._id)}>Delete</button>
            </div>
        </div>
    );
};

export default PlayerCard;
