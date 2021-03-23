import React from 'react';
import {router} from 'next/client';

function ClientProjects (props) {

	function loadProjectHandler(){
		router.push('/clients/max/projecta')
	}

	return (
		 <div>
			 <h1>client projects</h1>
			 <button onClick={loadProjectHandler}>load project a</button>
		 </div>
	);
}

export default ClientProjects;