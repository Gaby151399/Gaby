function Section() {
    return ( <>
    <section className="menu-p" id="produits">
        <div className="content">
            <div className="carde">
                <div className="left">
                    <h1>Nos valeurs</h1>
                    <p>Mangez sainement mais délicieusement. Nos clients sont rois, nos clients sont nos patrons.</p>
                </div>
                <div className="right">
                    <img src="pizza1.jpg" alt=""></img>
                </div>
            </div>

            <div className="carde">
                <div className="left">
                    <h1>Nos recettes</h1>
                    <p>Nous mettons à votre disposition les recettes de nos pizza les plus délicieux ! </p>
                </div>
                <div className="right">
                    <img src="pizza2.jpg" alt=""></img>
                </div>
            </div>
        </div>
    </section>
</> );
}

export default Section;