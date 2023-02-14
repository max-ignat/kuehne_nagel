import items from "./items";
import { NavItem, NavList, Ref } from "./Navbar.styled";


const Navbar = () => {
    const elements = items.map(({ id, text, link }) =>
        <NavItem key={id}>
            <Ref to={link}> { text } </Ref>
        </NavItem>
    )

    return (
        <NavList>
            {elements}
        </NavList>
    )
}
export default Navbar;