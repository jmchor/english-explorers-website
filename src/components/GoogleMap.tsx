import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';

import styled from 'styled-components';

const PinContainer = styled.div`
	display: flex;
	align-items: center;
	width: 180px;
	color: var(--blue);

	&:hover {
		cursor: pointer;
	}
`;

const PinIcon = styled(Icon)`
	font-size: 6rem !important;
`;

const PinText = styled.p`
	background: rgba(255, 255, 255, 0.9);
	border-radius: 10px;
	padding: 10px;
	font-size: 1.3em;
	color: var(--blue);
`;

const MapStyles = styled.div`
	height: 380px;
	width: 470px;
	border: 1px solid var(--blue);
	box-shadow: 0 0 5px var(--blue);

	@media screen and (max-width: 768px) {
		height: 260px;
		width: 320px;
	}
`;

const LocationPin = ({ text }: { text: string }) => (
	<PinContainer>
		<PinIcon icon='mdi:map-marker' />
		<PinText>{text}</PinText>
	</PinContainer>
);

export default function GoogleMap({ myKey }: { myKey: string }) {
	const location = {
		address: 'kreuzpunkt | Im Viertel',
		lat: 49.98128818482633,
		lng: 8.281744320541934,
	};

	return (
		// Important! Always set the container height explicitly
		<MapStyles>
			<GoogleMapReact bootstrapURLKeys={{ key: myKey }} defaultCenter={location} defaultZoom={18}>
				<LocationPin lat={location.lat} lng={location.lng} text={location.address} />
			</GoogleMapReact>
		</MapStyles>
	);
}
