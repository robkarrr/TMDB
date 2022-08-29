// NAVIGATION COMPONENT

import { Link, NavLink } from 'react-router-dom'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">React Query</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/discover">Discover</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular">Popular</Nav.Link>
						<Nav.Link as={NavLink} end to="/top">Top Rated</Nav.Link>
						<Nav.Link as={NavLink} end to="/latest">Latest</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation