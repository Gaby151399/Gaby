function Footer() {
    return ( <>
                <footer>
                    <h1>Nos services</h1>
                    <div className="services">
                        <div className="service">
                            <h3>Livraison gratuite</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quidem recusandae explicabo veniam voluptatem voluptatum reprehenderit dignissimos ipsum magnam accusantium.</p>
                        </div>
                        <div className="service">
                            <h3>Paiement en ligne</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quidem recusandae explicabo veniam voluptatem voluptatum reprehenderit dignissimos ipsum magnam accusantium.</p>
                        </div>
                        <div className="service">
                            <h3>Nous envoyez un message</h3>
                            <input type="name" id="name" name="name" placeholder="votre nom"/><br/>
                            <input type="e-mail" id="email" name="email" placeholder="votre email"/><br/>
                            <textarea name="message" id="message" cols="22" rows="2" placeholder="votre message"></textarea><br/>
                            <input type="submit" value="envoyez"/>
                        </div>
                        <div className="service">
                            <h3>Contactez-nous</h3>
                            <p>Un problème, une question, envie de nous envoyer un message ? N’hésitez pas à utiliser ce formulaire pour prendre contact avec nous !</p>
                        </div>
                    </div>
                    <p id="contact">Contact : +261 32 64 312 31 | &copy; 2021, Pizza Gold.</p>
                </footer>
                </> );
}

export default Footer;