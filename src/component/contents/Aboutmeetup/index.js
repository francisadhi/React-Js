import React from 'react'
import '../Aboutmeetup/aboutmeetup.css'
import Section from '../../Section/'

class Aboutmeetup extends React.Component {
    render() {
        return(
            <Section title="About Meetup">
                 <p>
                 Come and meet other developers interested in the javascript and it's libraby in the greater Jakarta area.
                 <br />
                 Twitter : @JakartaJS and we use the hashtag #jakartajs
                 </p>
            </Section>
        )
    }
}

export default Aboutmeetup