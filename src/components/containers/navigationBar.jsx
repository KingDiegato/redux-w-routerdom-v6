import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const NavigationBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname);

    const navigateTo = (path) => {
        navigate(path);
    }
    const homeNavigate = () => navigateTo('/')

    const dinamicCursor = {
        cursor: 'poiner',
        color: '#FEFFDF'
    }

    const yellowBird = {color: '#EDBD14'}
    

    return (
        <div>
        <section className='header'>

            <h1 style={dinamicCursor} onClick={homeNavigate}>Whisp<span style={yellowBird}>S</span>her</h1> 

            <div className='navigation'>
                <h1 style={{marginRight: '25px', color: '#EDBD14'}}>Links:</h1>
                <nav className='navigation__links'>

                    <h4 style={{margin: '10% 0% 0% 0%'}}>
                    <Link className='link' to='/faq'>       FAQ         </Link>
                    <Link className='link' to='/video'>     Video       </Link>
                    <Link className='link' to='/about'>     About us    </Link>
                    <Link className='link' to='/todoList'>  <span style={yellowBird}>To</span>Do <span style={{color: '#EDBD14'}}>List</span>   </Link>
                    </h4>
                    
                </nav>
            </div>
        </section>
        </div>
    );
}

export default NavigationBar;
