import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import React from 'react';

const CustomAccordionSummary = styled(AccordionSummary)`
	justify-content: center;
	p {
		margin: 0;
		text-align: center;
	}
`;

const AccordionComponent = () => {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<CustomAccordionSummary
					expandIcon={<Icon icon='uiw:caret-down' />}
					aria-controls='panel1-content'
					id='panel1-header'
				>
					<p>&quot;Who is there, and who can join?&quot;</p>
				</CustomAccordionSummary>
				<AccordionDetails>
					<p>
						Currently, we have an average of 10 kids between 3 and 10 years of age, and we are welcoming families with
						children 0-10 who speak English at home with at least one parent.
					</p>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<CustomAccordionSummary
					expandIcon={<Icon icon='uiw:caret-down' />}
					aria-controls='panel1-content'
					id='panel1-header'
				>
					<p>&quot;Is this for free?&quot;</p>
				</CustomAccordionSummary>
				<AccordionDetails>
					<p>
						We do not require any money for admission, but for material and such we ask every attending family to pay 25
						Euro for six months.
					</p>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<CustomAccordionSummary
					expandIcon={<Icon icon='uiw:caret-down' />}
					aria-controls='panel1-content'
					id='panel1-header'
				>
					<p>&quot;What do you do exactly?&quot;</p>
				</CustomAccordionSummary>
				<AccordionDetails>
					<p>
						Our activities include singing together and story time, as well as arts and crafts and other games. We try
						to make it as inclusive and engaging as possible for everybody, which for example includes grouping children
						for more age-appropriate activities.
					</p>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<CustomAccordionSummary
					expandIcon={<Icon icon='uiw:caret-down' />}
					aria-controls='panel1-content'
					id='panel1-header'
				>
					<p>&quot;Can I help?&quot;</p>
				</CustomAccordionSummary>
				<AccordionDetails>
					<p>
						Absolutely you can help! We appreciate every support - even if it is &quot;just&quot; for the cleanup
						afterwards. Please contact us so we can talk more.
					</p>
				</AccordionDetails>
			</Accordion>
		</>
	);
};
export default AccordionComponent;
