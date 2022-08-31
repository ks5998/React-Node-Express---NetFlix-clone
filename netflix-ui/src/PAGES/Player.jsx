import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Player = () => {

    const navigate = useNavigate();

  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={() => navigate(-1)} />
            </div>
            <iframe src="https://www.youtube.com/embed/b9EkMc79ZSU?&modestbranding=1&showsearch=0&rel=1&iv_load_policy=3&loop=1" title="Stranger Things | Official Final Trailer | Netflix" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .player{
        width: 100vw;
        height: 100vh;

        .back{
            position: absolute;
            padding: 2rem;
            z-index: 1;

            svg{
                font-size: 3rem;
                cursor: pointer;
            }
        }

        iframe{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`

export default Player