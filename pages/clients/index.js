import Link from 'next/link';

function ClientsPage (props) {
	const clients = [
		{
			id: 'max',
			name: 'Maximilian'
		},
		{
			id: 'manu',
			name: 'manuel'
		},
		{
			id: 'lasha',
			name: 'lashatatu'
		}
	];
	return (
		 <div>
			 <h1>clients page</h1>
			 <ul>
				 {clients.map(client =>
						<li key={client.id}>
							<Link
								 href={{
									 pathname: '/clients/[id]',
									 query: {id: client.id}
								 }}>{client.name}</Link>
						</li>)}
			 </ul>
		 </div>
	);
}

export default ClientsPage;
