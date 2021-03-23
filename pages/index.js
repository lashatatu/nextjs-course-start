import Link from 'next/link';

function HomePage (props) {
	return (
		 <div>
			 <h1>hi lasha next</h1>
			 <ul>
				 <li>
					 <Link href={'/portfolio'}>Portfolio</Link>
				 </li>
				 <li>
					 <Link href={'/clients'}>Clients</Link>
				 </li>
			 </ul>
		 </div>
	);
}

export default HomePage;