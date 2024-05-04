import './AboutProject.scss';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { aboutProjectInfo } from 'store/slices/main/aboutProjectSlice';
import { useEffect } from 'react';
import AboutProjectFeatures from './AboutProjectFeatures';
import AboutProjectStatistics from './AboutProjectStatistics';
import blur from "@img/blur.webp"


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
            <img src={blur} loading="lazy" alt="blur" className='about-project__blur'/>
        </div>
    )
}
export default AboutProject;