

export const Hero = () => {
    
    return (
        <section id="hero" >
            <div className="hero_box">
                <div className="big-logo">
                    <p className='p-1'>Hi, I'm</p>
                    <h1>EMMANUEL<span>{'/>'}</span></h1>
                    <p className='p-2'>FRONTEND DEVELOPER</p>
                    {/* <ReactTyped
                        strings={[`<p class='p-1'>Hi, I'm</p><h1>EMMANUEL<strong>/></strong></h1><p class='p-2'>FRONTEND DEVELOPER</p>`]}
                        contentType="html"
                        cursorChar=""
                        typeSpeed={100}
                    /> */}
                </div>
            </div>
        </section>
    )
}
