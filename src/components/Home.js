import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.css';

function Home() {
    const history = useHistory();
    const handleMembers = () => {
        history.push('/members');
    }
    return (
        <div className="card-holder">
                   <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>_members</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">                   
                                <button onClick={handleMembers}><i className="far fa-address-card"></i></button>
                                <button><i className="fas fa-filter"></i></button>
                                <button><i className="fas fa-sort-amount-down-alt"></i></button>
                                <button><i className="fas fa-share-alt"></i></button>              
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>_scraper</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <button><i className="fas fa-magnet"></i></button>
                                <button><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
            </div>
        
    )
}

export default Home;
