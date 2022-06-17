import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Playlist.css'

function shuffle(array){
    let currentIndex = array.length, randomIndex;
    while(currentIndex!==0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}

export default function Playlist({model, playlist}) {

    const [songs, setSongs] = useState([])
    const [error,setError] =useState(false)

    useEffect(() => {
        if(model==="M1"){
            model = "Model1"
        }
        else{
            model="Model2"
        }

        axios.get(`https://vibyapi.herokuapp.com/Playlist/${model}?mood=${playlist}`).then((res)=>{
            setSongs(shuffle(res.data))
            setError(false)
        })
        .catch((err) => {
            setError(true)
            setSongs([])
        })
    },[])

    return (
    <div>
        <h1>{playlist} Playlist Generated by {model}</h1>
        <table>
            <thead>
                <tr className='table-header'>
                    <th>#</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Play</th>
                </tr>
            </thead>
            <tbody>
        {songs.length>0 && songs.slice(0,100).map((song,index)=>{
            return(
                    <tr key={index}>
                    <td>
                        {index+1}
                    </td>
                    <td>
                        <div className='title'>
                        <img className="album-cover" src={song.album_cover} alt="album-cover"/>
                        {song.track_name}
                        </div>
                    </td>
                    <td>
                        {song.artist_name}
                    </td>
                    <td>
                        {song.album_name}
                    </td>
                    <td>
                        <div className='play'>
                        {song.preview_link!=="null" && <a href={song.preview_link}>
                            <button>
                                Preview
                            </button>
                        </a>}
                        <a href={song.spotify_link}>
                            <button>
                                Spotify
                            </button>
                        </a>
                        </div>
                    </td>
                </tr>
            )
            
        })}
         </tbody>
        </table>
        {error && <h1>Loading...</h1>}
    </div>
    )
}
