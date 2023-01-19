export async function getStaticPaths() {
    const res = await fetch(`https://www.gibbslaidler.co.uk/api/team`);

    const data = await res.json();

    const paths = data.map(member => {
        return {
            params: { profile: member.id.toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }
  }

export async function getStaticProps(context) {
    const profile = context.params.profile;
    const res = await fetch(`https://www.gibbslaidler.co.uk/api/team/${profile}`);
    const data = await res.json();

    return {
        props: {
            currentTeamMember: data
        }
    }
  }


const resume = ({currentTeamMember}) => {


    return (
        <>
            <div className="stripe">
                <div className="stripe__inner team__details">
                    <h2>{currentTeamMember.name} {currentTeamMember.certs}</h2>
                    {currentTeamMember.email ?
                        <div>
                            <span>E</span>: <a href={`mailto:${currentTeamMember.email}`}>{ currentTeamMember.email }</a>
                        </div> :null
                    }

                    {currentTeamMember.phone ?
                        <div>
                            <span>P</span>: <a href={`tel:${currentTeamMember.phone}`}>{ currentTeamMember.phone }</a>
                        </div> :null
                    }

                    <p>
                        { currentTeamMember.description }
                    </p>
                </div>
            </div>
        </>

    )
}

export default resume;