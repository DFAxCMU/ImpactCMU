import React from 'react';
import prize1 from "../images/prizes/Beach.png";
import prize2 from "../images/prizes/Hammock.png";
import prize3 from "../images/prizes/BoardGame.png";
import prize4 from "../images/prizes/Plushie.png";
import prize5 from "../images/prizes/Blanket.png";

const alt1 = "Picnic Blanket icon";
const alt2 = "Hammock Icon";
const alt3 = "Board Game Icon";
const alt4 = "Teddy Bear Icon";
const alt5 = "Folded blanket icon";

const name1 = "Beach/Picnic Blanket";
const name2 = "Hammock";
const name3 = "Hues and Cues Game";
const name4 = "Plushies x3";
const name5 = "Throw Blanket";

const prizeImgs = [
    { image: prize1, alt: alt1, name: name1 },
    { image: prize2, alt: alt2, name: name2 },
    { image: prize3, alt: alt3, name: name3 },
    { image: prize4, alt: alt4, name: name4 },
    { image: prize5, alt: alt5, name: name5 }
]

const Prizes = () => (
    <section id="about">
        <div className="content">
            <div className="two-colV2">
                <div className="container-border half">
                    <h1>Project Awards</h1>
                    <div className="item">
                        <div className="item2">
                            <h2 class="item">Most Impactful: $500</h2>
                        </div>
                        <p>General student Vote</p>
                    </div>
                    <div className="item">
                        <div className="item2">
                            <h2 class="item">Board Award: $500</h2>
                        </div>
                        <p>Decided by the DFA executive board</p>
                    </div>
                    <div className="item">
                        <div className="item2">
                            <h2 class="item">Faculty Favorite: $500</h2>
                        </div>
                        <p>Decided by our guest faculty judges</p>
                    </div>
                </div>

                <div className="container half">
                    <h1>Raffle Prizes</h1>

                    <div className="prizes">
                        { prizeImgs.map(prize => {
                            return <div className="prize">
                                <img className="prize-img" src={ prize.image } alt={ prize.alt }/>
                                <p className="center"><small>{ prize.name }</small></p>
                            </div>
                        }) }
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    </section>
)

export default Prizes;