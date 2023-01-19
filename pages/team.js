import TeamMemberCards from "../components/TeamMemberCards";

const team = ({teamMembers}) => {

    return (
        <div className="stripe ">
            <div className="stripe__inner container text-centered">
                <div>
                    <h2>Meet Our Team</h2>
                    <p>Gibbs Laidler has a team of specialist insurance and risk consultants available to our clients, and you can expect all of them to be involved in one way or another in the provision of the services we provide. <b>Click on our team&#39;s portfolios below</b> and get to know the people behind the company.</p>
                </div>
                <TeamMemberCards teamMembers={teamMembers}/>
            </div>
        </div>
    )
}

export default team;

export async function getStaticProps() {
    const res = await fetch('https://www.gibbslaidler.co.uk/api/team')
    const teamMembers = await res.json()
    return {
      props: {
        teamMembers,
      },
    }
  }