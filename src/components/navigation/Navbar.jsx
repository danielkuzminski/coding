//styles
import "./navbar.css"

//routing
import { NavLink } from "react-router-dom"

//assets
import add from "../../assets/add_post.png"

//react

export default function Navbar() {
	return (
		<nav className="navigation">
			<ul className="nav__list">
				<li className="nav__item">
					<NavLink to="/" className="nav__link">
						domowa
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/javascript" className="nav__link">
						javascript
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/react" className="nav__link">
						react
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/firebase" className="nav__link">
						firebase
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/style" className="nav__link">
						style
					</NavLink>
				</li>
				<li className="nav__item">
                    <NavLink to="/post">
					    <img className="add" src={add} alt="add form button" />
                    </NavLink>
				</li>
			</ul>
		</nav>
	)
}
