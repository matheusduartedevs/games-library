import React, { useState } from 'react'

const Home = () => {
    const [game, setGame] = useState('')
    const [description, setDescription] = useState('')

    const show = () => {
        gamesList.push(game)
        gamesList.push(description)
    }

    console.log(gamesList)

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
                <>
                    <h4>Jogo</h4>
                    <p>Descrição</p>
                </>
            </div>
        </div>
    )
}

export default Home