import './MainServices.scss';
import Title from 'components/ui/forms/Title';
import ServicesItem from './ServicesItem';

const ServicesList = () => {
    return (
        <aside className='services-wrapper'>
           <Title text='услуги'/>
           <div className='services-items'>
              <ServicesItem />
           </div>
        </aside>
    )
}
export default ServicesList;