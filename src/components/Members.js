import React, { useState, useEffect} from 'react';
import membersapi from '../api/membersapi';
import './members.css';

const Members = () => {
	
	const [members, setMembers] = useState([]);
	useEffect(() => {
		
		async function fetchData() {
			
			//const response = await membersapi.get('/members',
			const response = await membersapi.get('/employees',
		{
			method: "GET",
			mode: "no-cors",
			withCredentials: false,
			});
			
		setMembers(response.data);
		
		}
		fetchData();
	
	}, []);
	
console.log(members);
	 const fellows = members.data.map((member) => {
		return (
				
        <div className="container">
        	<div className="card">
				<div className="face face1">
					<div className="content">
						<img src={member.image} alt={member.name} />
						<h3>{member.name}</h3>
					</div>
				</div>
				<div className="face face2">
					<div className="content">
						<p>Office: {member.office}</p>
						
					</div>
				</div>
			</div>	
        </div>
		);
	});
	
   
    return (
		
			<div className="members-list">
				<div className="container">{fellows}</div>
			</div>
		
	)
	

};

export default Members;