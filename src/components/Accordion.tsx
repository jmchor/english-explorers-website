import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const CustomAccordionSummary = styled(AccordionSummary)`
	justify-content: center;
	p {
		margin: 0;
		text-align: center;
	}
`;

const AccordionComponent = ({ summary, details }: { summary: string; details: string }) => {
	return (
		<Accordion>
			<CustomAccordionSummary
				expandIcon={<Icon icon='uiw:caret-down' />}
				aria-controls='panel1-content'
				id='panel1-header'
			>
				<p>{summary}</p>
			</CustomAccordionSummary>
			<AccordionDetails>
				<p>{details}</p>
			</AccordionDetails>
		</Accordion>
	);
};
export default AccordionComponent;
