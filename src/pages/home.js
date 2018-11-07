import React from 'react'
import Pastmeetup from '../../src/component/contents/Pastmeetup'
// import '../../content.css'
import Nextmeetup from '../../src/component/contents/Nextmeetup';
import Aboutmeetup from '../../src/component/contents/Aboutmeetup';
import Withmaterial from '../../src/component/contents/Pastmeetup/withmaterial';
import MemberList from '../../src/component/contents/Members';

class Home extends React.Component {

    render() {
        const { members, films } = this.props
        return (
            <div>          
                <Withmaterial />
                <Nextmeetup /> 
                <Aboutmeetup />    
                <MemberList />
                <Pastmeetup />
            </div>
        )
    }
}

export default Home