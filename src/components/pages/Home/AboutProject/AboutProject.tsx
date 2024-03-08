import './AboutProject.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { aboutProjectInfo } from '../../../../store/slices/main/aboutProjectSlice';
import { useEffect } from 'react';
import AboutProjectFeatures from './AboutProjectFeatures';
import AboutProjectStatistics from './AboutProjectStatistics';


const AboutProject = () => {
const dispatch = useAppDispatch();
useEffect(() => {
dispatch(aboutProjectInfo())
},[dispatch])

const reduxInfo = useAppSelector((state) => state.aboutProject.aboutProject)


    return (
        <div className='aboutProject'>
            <div className='aboutProject-header'>
               <h3 className='aboutProject-header__title'>{reduxInfo && reduxInfo[0].attributes.mainTitle}</h3>
               <p className='aboutProject-header__description'>{reduxInfo && reduxInfo[0].attributes.headerDescription}</p>
            </div>
            <AboutProjectFeatures />
            <AboutProjectStatistics />
            <img src={reduxInfo && reduxInfo[0].attributes?.blur?.data?.attributes.url} alt="blur" className='blur'/>
        </div>
    )
}
export default AboutProject;