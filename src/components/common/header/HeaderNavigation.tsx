import './Header.scss';
import { NavLink } from 'react-router-dom';


interface HeaderNavigationProps {
    navigationString: string[];
  }

  interface LinkState {
    isActive: boolean
  }

  const setActive = ({isActive}:LinkState) => isActive ? "navigation__item-active" : "navigation__item"

  const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ navigationString }) => {
    return (
        <nav className="navigation">

        <NavLink to="/Portfolio" className={setActive}>
          {navigationString && navigationString[0]}
        </NavLink>

        <NavLink to="/Sevices" className={setActive}>
          {navigationString && navigationString[1]}
        </NavLink>
        
        <NavLink to="/locations" className={setActive}>
          {navigationString && navigationString[2]}
        </NavLink>

      </nav>
    )
}
export default HeaderNavigation;