import './cardStyle.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cardStyle.css'; 

import PlayerCard from './playerCard';
function PlayersList() {
    //i used a react hook use state. we used it to store the players in the players array[]
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({
        name: '',
        team: '',
        nationality: '',
        jerseyNumber: 0,
        age: 0,
        image: ''
    });

     // use effect is  hook that allows you to fetch data from an API
    useEffect(() => {
        fetchPlayers();
    }, []);
     // [] in useeffect means the effect will only run once when the component mounts
    const fetchPlayers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/players/getAllPlayer');

            setPlayers(response.data);
        } catch (error) {
            console.error('Error fetching players:', error);
        }
    };

    const addPlayer = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/players/addPlayer', newPlayer);
            setPlayers([...players, response.data]);
            setNewPlayer({
                name: '',
                team: '',
                nationality: '',
                jerseyNumber: 0,
                age: 0,
                image: ''
            });
        } catch (error) {
            console.error('Error adding player:', error);
        }
    };

    const deletePlayer = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/players/deletePlayer/${id}`)
            setPlayers(players.filter(player => player._id !== id))
        } catch (error) {
            console.error('Error deleting player:', error);

        }
    };

   
    const updatePlayer = async (id, updatedPlayer) => {
        try {
            // Make the PUT request to update the player
            const response = await axios.patch(`http://localhost:4000/api/players/updatePlayer/${id}`);
    
            // Update the state with the new player data
            setPlayers(players.map(player => 
                player._id === id ? response.data : player // Replace the updated player with the new data
            ));
        } catch (error) {
            console.error('Error updating player:', error);
        }
    };


    return (
        <div className="players-list">
            {players.map(player => (
                <PlayerCard 
                    key={player._id} 
                    player={player} 
                    onDelete={deletePlayer} 
                    onUpdate={updatePlayer} 
                />
            ))}
            {/* Form to add a new player */}
            <div>
                <input type="text" placeholder="Name" value={newPlayer.name} onChange={e => setNewPlayer({ ...newPlayer, name: e.target.value })} />
                <input type="text" placeholder="Team" value={newPlayer.team} onChange={e => setNewPlayer({ ...newPlayer, team: e.target.value })} />
                <input type="text" placeholder="Nationality" value={newPlayer.nationality} onChange={e => setNewPlayer({ ...newPlayer, nationality: e.target.value })} />
                <input type="number" placeholder="Jersey Number" value={newPlayer.jerseyNumber} onChange={e => setNewPlayer({ ...newPlayer, jerseyNumber: e.target.value })} />
                <input type="number" placeholder="Age" value={newPlayer.age} onChange={e => setNewPlayer({ ...newPlayer, age: e.target.value })} />
                <input type="text" placeholder="Image URL" value={newPlayer.image} onChange={e => setNewPlayer({ ...newPlayer, image: e.target.value })} />
                <button onClick={addPlayer}>Add Player</button>
            </div>
        </div>
    )
}

export default PlayersList;
