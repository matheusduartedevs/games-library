import React, { useEffect, useState } from 'react'

const Home = () => {
    const [game, setGame] = useState([])
    const [description, setDescription] = useState('')

    const fetchGames = async () => {
        await fetch('http://localhost:3000/games')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGame(data)
            })
    }

    useEffect(() => {
        fetchGames()
    }, [])

    const show = () => {
        gamesList.push(game)
        gamesList.push(description)
    }

    return (
        <div>
            <h1>Dados do game</h1>
            <input
                type="text"
                placeholder='Insira o nome do jogo'
                value={game}
                onChange={(e) => setGame(e.target.value)}
            />

            <input
                type="text"
                placeholder='Faça uma breve descrição sobre ele'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={show}>Registrar</button>

            <div>
                {
                    game.map((item) => (
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home