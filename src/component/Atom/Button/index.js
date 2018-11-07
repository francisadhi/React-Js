import React from 'react'
import Button from '@material-ui/core/Button'

const style = {
  marginRight: 20,
  color: 'red',
};
// class Button extends React.Component {
//     render() {
//       const { color } = this.props
  
//       const buttonStyle = {
//         backgroundColor: color,
//         color: 'white',
//         padding:10,
//         margin:5,
//       }
  
//       return (
//         <button
//           {...this.props}
//           style={buttonStyle}
//         />
//       )
//     }
//   }

const myButton = ({children, myClick}) => (
  <Button onClick={myClick} style={style}>{children}</Button>
)
  
export default myButton