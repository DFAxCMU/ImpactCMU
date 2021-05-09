import React from 'react';

export default function Prizes() {
    return (
        <section id="prizes">
            <h1>Prizes</h1>
            <p>
                Until May 11th at 11:59 PM, the ImpactCMU gallery will be open for public browsing. Carnegie Mellon students and faculty will also be able to vote for their 3 favorite projects and help them win funding!
            </p>
            <div className="container">
                <div className="row" style={{ textAlign: 'center' }} >
                    <div className="col">
                        <h2>$5000</h2>
                        Each of the top 5 submissions will receive $1000 in funds to support your project.
</div>
                    <div className="col">
                        <h2>$500</h2>
                        Voters will be automatically entered in a raffle for $500 worth of gift cards to Amazon, Starbucks, and Target.
</div>
                </div>
            </div>
        </section>
    )
}
