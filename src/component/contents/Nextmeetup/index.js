import React from 'react';
import '../Nextmeetup/nextmeetup.css'
import Section from '../../Section';
import Card from '../../Card';

class Nextmeetup extends React.Component {
    render(){
        return(
            <Section title="Next Meetup">
                <Card>
                <h4>Awesome meetup and event</h4>
                <p>Hello javascrip & node.js Ninjas!
                    Get ready for our meetup JakartaJS! This will be our fifth meetup of 2018!
                    The meetup format will contain some short stories and technical talks.
                    If you have a short announcement you'll like to share with audience, you may do so during open mic announcement.

                    Remember to bring a photo ID to get through building security.

                    -------

                    See you there!

                    Best, Hengky, Geovani dkk
                </p>
                </Card>
            </Section>
        )
    }
}

export default Nextmeetup;