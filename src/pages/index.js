import {Heading} from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Announcement from '@codeday/topo/Organism/Announcement'
import Page from '../components/page';
import Box, { Grid } from '@codeday/topo/Atom/Box'
import Text, { Link } from '@codeday/topo/Atom/Text'
import IconBox, { HeaderIcon, HeaderText, Body } from '@codeday/topo/Molecule/IconBox'
import { CodeDay, Labs, Community } from '@codeday/topo/Atom/Logo'
export default function Home() {
	return (
		<Page slug="/">
			<Content>
				<Announcement />
				<Box>
					<Text>
						Due to the ongoing COVID-19 pandemic, in-person CodeDay events have been put on hold. Our staff have been working hard on making events like <a href="https://virtual.codeday.org"><b>Virtual CodeDay</b></a> and <a href="https://labs.codeday.org"><b>CodeDay Labs</b></a> to keep students engaged and learning while staying safe at home.
					</Text>
					<Text>
						We miss having CodeDays just as much as you do, and we will make an announcement once we feel it is safe again to host them.
					</Text>
					<Text>
						In the meantime, please <Link href="https://codeday.to/discord">join our Discord</Link> to stay in touch with our community, and check out our virtual events below!
					</Text>
				</Box>
				<Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)'}}>
					<a href="https://virtual.codeday.org">
						<IconBox maxWidth={64}>
							<HeaderIcon><CodeDay /></HeaderIcon>
							<HeaderText>Virtual CodeDay</HeaderText>
							<Body>Join thousands of students to make new friends, and make an amazing app or game.
(Plus a virtual gaming tournament, workshops, prizes, and more!)</Body>
						</IconBox>
					</a>
					<a href="https://labs.codeday.org">
						<IconBox maxWidth={64}>
							<HeaderIcon><Labs /></HeaderIcon>
							<HeaderText>CodeLabs</HeaderText>
							<Body>The 100% online tech internship for everyone.</Body>
						</IconBox>
					</a>
					<a href="https://codeday.to/discord">
						<IconBox maxWidth={64}>
							<HeaderIcon><Community /></HeaderIcon>
							<HeaderText>Discord</HeaderText>
							<Body>Chat with our community and stay up-to-date on events!</Body>
						</IconBox>
					</a>
				</Grid>
			</Content>
		</Page>
	)
}