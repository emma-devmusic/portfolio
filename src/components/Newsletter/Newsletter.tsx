import { useIntersection } from "../../helpers/helpers"

export const Newsletter = () => {

    const { ref, isVisible } = useIntersection()

    return (
        <section id="newsletter" ref={ref}>
            <div className="newsletter-box">
                <div className="newsletter-content">
                    <div className={`newsletter-text ${isVisible&&'animate-about'}`} ref={ref}>
                        <div className="icon-blur">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.948-.664l-2.667 1.135l-1.865-3.25l2.305-1.738q-.044-.272-.073-.56q-.028-.287-.028-.558q0-.252.028-.53t.073-.626L3.258 9.125l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.731l.362 2.912q.575.201 1.016.463q.442.262.909.654l2.725-1.116l1.865 3.212l-2.382 1.796q.082.31.092.568q.01.26.01.511q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.392-.94.673q-.474.281-.985.444L13.865 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.605-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72q-.04-.34-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.934t-1.4-.578L13 4h-1.994l-.312 2.688q-.756.162-1.39.52q-.633.36-1.26.986L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73q-.05.394-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.588.594 1.222.953t1.428.559zm.973-5.5q1.046 0 1.773-.727q.727-.727.727-1.773q0-1.046-.727-1.773q-.727-.727-1.773-.727q-1.052 0-1.776.727T9.473 12q0 1.046.724 1.773q.724.727 1.776.727M12 12" /></svg>
                            <span></span>
                        </div>
                        <h2>
                            Construyamos juntos <br />tu <strong>aplicación</strong>
                        </h2>
                        {/* <h2>Construyamos juntos <br />tu <span>aplicación</span></h2> */}
                    </div>
                    <div className="newsletter-form">
                        <input
                            type="text"
                            placeholder="correo@ejemplo.com"
                        />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
