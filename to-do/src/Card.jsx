import'./Card.css';
function Card(){
    return(
        <div className="card">
            <div className="naruto">
                <div className="image">
                    <img src="https://preview.redd.it/am-i-the-only-one-who-actually-likes-when-naruto-uses-talk-v0-oken1vbmebvd1.jpeg?auto=webp&s=31a7f36a0083ed8b79f092d5a355601cf9a87281" alt="naruto" />
                </div>
                <div className="heading">
                    <h2><a href='https://en.wikipedia.org/wiki/Naruto_Uzumaki' target='_blank'>Naruto</a></h2>
                </div>
                <div className="desctiption">
                    <p>Naruto Uzumaki is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Serving as the eponymous protagonist of the series, he is a young ninja from the fictional village of Konohagakure. He aims to be the greatest Leader of Konohagukure in its history.</p>
                </div>
            </div>
            <div className="sasuke">
                <div className="image">
                    <img src="https://pm1.aminoapps.com/6455/40710b4a6450d4c058c81b15120f346fc6affe6f_00.jpg" alt="naruto" />
                </div>
                <div className="heading">
                    <h2><a href='https://en.wikipedia.org/wiki/Sasuke_Uchiha' target='_blank'>Sasuke</a></h2>
                </div>
                <div className="desctiption">
                <p>Sasuke Uchiha is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. He is a member of the Uchiha clan, one of Konohagakure's most powerful families, and serves as Naruto Uzumaki's rival and best friend. His quest for revenge and eventual redemption is a central plot point of the series.</p>
                </div>
            </div>
            <div className="sakura">
                <div className="image">
                    <img src="https://static1.personality-database.com/profile_images/894f607994de4fed8736456783cfe357.png" alt="sakura" />
                </div>
                <div className="heading">
                    <h2><a href='https://en.wikipedia.org/wiki/Sakura_Haruno' target='_blank'>Sakura</a></h2>
                </div>
                <div className="desctiption">
                <p>Sakura Haruno is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. She is a member of Team 7 alongside Naruto Uzumaki and Sasuke Uchiha. Initially portrayed as a love-struck girl, Sakura develops into one of the most talented medical-nin in the series and becomes an essential support to her teammates.</p>
                </div>
            </div>
        </div>
            
    );
}
export default Card;