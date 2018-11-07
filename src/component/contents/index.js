import React from 'react'
import Pastmeetup from '../contents/Pastmeetup'
import './content.css'
import Nextmeetup from './Nextmeetup';
import Aboutmeetup from './Aboutmeetup';
import Withmaterial from './Pastmeetup/withmaterial';
import MemberList from '../contents/Members';

class Content extends React.Component {

    render() {
        const { members, films } = this.props
        return (
            <div>          
                <Withmaterial />
                <Nextmeetup /> 
                <Aboutmeetup />    
                <MemberList members={members} />
                <Pastmeetup films={films}/>
            </div>
        )
    }
}

export default Content