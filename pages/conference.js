const conference = () => {
    return (
        <>
            <section className="stripe">
                <div className="stripe__inner container">
                    <h1>Gibbs Laidler Risk and Insurance Annual Conference</h1>
                    <p>Details for the 2023 Gibbs Laidler annual conference will be coming soon.</p>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/images/conference-desktop.webp"/>
                        <img srcSet="/images/conference-mobile.webp" alt="Man giving speach at conference"/>
                    </picture>
                </div>
            </section>
        </>
    )
}

export default conference;