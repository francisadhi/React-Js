import React from 'react'
import Section from '../../Section';
import { List, ListItem, Avatar, ListItemText, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchMembers } from '../../../actions/member'



// const MemberList = ({members}) => {
//         return(
//             <Section title="Members">
//                 {members.length <= 0 ? <CircularProgress />:
//                 <List>
//                     {members.map((member,index) => (
//                         <Link to={`member/${index+1}`}>
//                         <ListItem key={member.name} button>
//                             <Avatar style={{backgroundColor: 'red'}}>{member.name[0].toUpperCase()}
//                             </Avatar>
//                             <ListItemText primary={member.name} secondary={member.tahunLahir} />
//                         </ListItem>
//                         </Link>
//                     ))
//                     }
//                 </List>
//                 }
//             </Section>
//         )
// }

class MemberList extends React.Component {
    componentDidMount(){
        this.props.fetchMembers()
    }

    render() {
        const { members } = this.props
        return(
            <Section title="Members">
                {members.length <= 0 ? <CircularProgress />:
                <List>
                    {members.map((member,index) => (
                        <Link to={`member/${index+1}`}>
                        <ListItem key={member.name} button>
                            <Avatar style={{backgroundColor: 'red'}}>{member.name[0].toUpperCase()}
                            </Avatar>
                            <ListItemText primary={member.name} secondary={member.tahunLahir} />
                        </ListItem>
                        </Link>
                    ))
                    }
                </List>
                }
            </Section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        members:state.members.userData
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMembers: () => dispatch(fetchMembers())
})

export default connect(mapStateToProps,mapDispatchToProps)(MemberList)