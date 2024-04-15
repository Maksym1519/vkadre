import './AboutProject.scss';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { aboutProjectInfo } from 'store/slices/main/aboutProjectSlice';
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
        <div className='about-project'>
              <div className='about-project__header'>
               <h3 className='about-project__title'>{reduxInfo && reduxInfo[0].attributes.mainTitle}</h3>
               <p className='about-project__description'>{reduxInfo && reduxInfo[0].attributes.headerDescription}</p>
            </div>
            <AboutProjectFeatures />
            <AboutProjectStatistics />
            <img src={reduxInfo && reduxInfo[0].attributes?.blur?.data?.attributes.url} alt="blur" className='about-project__blur'/>
        </div>
    )
}
export default AboutProject;