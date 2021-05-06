import React from 'react';

export default function Prizes() {
    return (
        <section id="prizes">
            <h1>Prizes</h1>
            <p>
                From May 1st to May 7th, the ImpactCMU gallery will be open for public browsing. Carnegie Mellon students and faculty will also be able to vote for their favorite projects in our 5 categories: education, health, technology, outreach, and environment.
            </p>
            <div className="container">
                <div className="row" style={{ textAlign: 'center' }} >
                    <div className="col">
                        <h2>$5000</h2>
                        Each winning submission will receive $1000 in funds to support your project.
</div>
                    <div className="col">
                        <h2>$500</h2>
                        Voters will be automatically entered in a raffle for $500 worth of gift cards to Amazon, Grubhub, Starbucks, and Target.
</div>
                </div>
            </div>
        </section>
    )
}
