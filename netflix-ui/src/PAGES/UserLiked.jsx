import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../COMPONENTS/Navbar';
import { fetchMovies, getGenres, getUserLikedMovies } from '../STORE';
import { firebaseAuth } from '../UTILS/firebase-config';
import styled from 'styled-components'
import Slider from '../COMPONENTS/Slider';
import NotAvaible from '../COMPONENTS/NotAvaible';
import SelectGenres from '../COMPONENTS/SelectGenres';
import Card from '../COMPONENTS/Card';

const UserLiked = () => {

    const [ isScrolled, setIsScrolled ] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    const [email, setEmail] = useState(undefined);

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate('/login');
      });
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
      if(email){
        dispatch(getUserLikedMovies(email))
      }
    }, [email]);
  
    window.onscroll = () => {
       setIsScrolled(window.pageYOffset === 0 ? false : true );
       return () => (window.onscroll = null);
    };

  return (
    <Container>
        <Navbar isScrolled={isScrolled}/>
        <div className="content flex column">
            <h1>My List</h1>
            <div className="grid flex">
                {
                    movies.map((movie, index) => {
                        return ( 
                            <Card
                            movieData={movie}
                            index={index}
                            key={movie.id}
                            isLiked={true} 
                            />
                        );
                    })
                }
            </div>
        </div>
    </Container>
  )
};

const Container = styled.div`
    .content{
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;

        h1{
            margin-left: 3rem;
        }

        .grid{
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`

export default UserLiked