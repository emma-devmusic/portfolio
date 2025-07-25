

import { useIntersection } from '../../helpers/helpers';

interface Props {
    imgBack: string
    imgFront: string
}


export const AboutProject = ({imgBack, imgFront}: Props) => {

    const { ref, isVisible } = useIntersection()

    return (
        <section id="about" className=''>
            <div className={`about-box ${isVisible && 'animate-about'} px-4 max-w-[1200px] mx-auto`}>
                <div className="about-text">
                    <div className={`about-line`} ref={ref}>
                        <h2 className='text-4xl mr-5 top-0.5 relative'>
                            Ding.com.ar
                        </h2>
                        <div className="icon-blur">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z" /></svg>
                            <span />
                        </div>
                        <hr />
                    </div>
                    <p className='text-lg mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aperiam, excepturi eius provident impedit fugit cum, quia, asperiores inventore debitis magnam? Id, in neque distinctio incidunt explicabo illo laudantium architecto.</p>
                </div>
                <div className="about-image">
                    <img src={imgBack} alt="image coding" className='aspect-video' />
                    <img src={imgFront} alt="image coding" className='aspect-video' />
                </div>
            </div>
        </section>
    )
}
