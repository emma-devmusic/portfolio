import { ReactTyped } from 'react-typed';
import profileImg from '../../assets/img/emma-profile.png';
import { Navbar } from '../Navbar/Navbar';
import { SectionAdvanceButton } from '../SectionAdvanceButton/SectionAdvanceButton';


export const Hero = () => {

    const typedStyle: React.CSSProperties = {
        fontSize: '4rem',
        position: 'relative',
        top: '10px'
    }

    return (
        <section id="hero" className='flex flex-col justify-center !w-full'>
            <div className='image_box w-fit'>
                <div className="img-hero">
                    <img 
                        src={profileImg} 
                        alt="Emma Profile" 
                        width={300}
                        height={300}
                        decoding="async"
                        fetchPriority="high"
                    />
                </div>
            </div>
            <div className="hero_box w-fit !m-0">
                <div className={`big-logo animate-logo`}>
                    <p className='p-1'>
                        <span className="span-1">Hola!</span> <span className="span-2">Soy</span>
                    </p>
                    <div className="emmanuel">
                        <h1>
                            <ReactTyped
                                startDelay={1100}
                                strings={['<strong className="span-4">EMMANUEL</strong>']} 
                                typeSpeed={80}
                                style={typedStyle}
                                cursorChar=''
                            />
                        </h1>
                        <div>
                            <span className="span-5">{'/>'}</span>
                        </div>
                    </div>
                    <p className='p-2'>
                        <span className="span-3">FRONTEND DEVELOPER</span>
                    </p>
                </div>
            </div>
            <Navbar />
            <SectionAdvanceButton
                sectionId="hero"
                targetId="welcome-visitor"
                label="Ir a la sección de presentación"
                delayMs={5000}
            />
        </section>
    )
}
