import './Header.scss';

const MobileMenu = () => {
    return (
        <div className='mobileMenu'>
           <nav className='mobileNavigation'>
             <a href="#" className='mobileNavigation-link'>Главная</a>
             <a href="#" className='mobileNavigation-link'>Портфолио</a>
             <a href="#" className='mobileNavigation-link'>Услуги</a>
             <a href="#" className='mobileNavigation-link'>Локации</a>
           </nav>
        </div>
    )
}
export default MobileMenu;