import React from 'react';
import Image from 'next/image';

function NotFoundPage (props) {
	return (
		 <div>
			 <Image
					src={'/24.svg'}
					alt={'picture of 404}'}
					layout="fill"  />
		 </div>
	);
}

export default NotFoundPage;