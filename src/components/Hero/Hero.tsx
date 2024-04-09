import { ReactTyped } from 'react-typed';



export const Hero = () => {
    
    return (
        <section id="hero" >
            <div className="hero_box">
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
                                style={{
                                    fontSize: '6.5rem',
                                    position: 'relative',
                                    top: '10px'
                                }}
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
        </section>
    )
}
