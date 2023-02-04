import React from "react";
import "./test.css";
import PropTypes from "prop-types";

//  //class Test extends Component {
//   state = {isLoggedIn: false};

//   render() {
//     return (
//       <div>
//           {!this.state.isLoggedIn ? (
//             <h1>You are not Logged In!</h1>
//              ) : (     
//             <h1>Congratulations, you are logged in!</h1>
//               )}
//           <button
//             onClick={(e) => this.setState({ isLoggedIn: !this.state.isLoggedIn })}
//           >
//             Login!

//           </button>
//       </div> 
//     );
//           }
//         }
//   //     export default Test;

// const Test = ({name}) => {
//   return (
//     <>
//      <h1>The name is: {name}</h1>
//    <input
//   // type= "text"
//   // value={name}
//   // onChange={(e)} => setName(e.target.value)}
//   // />
//   </>
//  ); 
// };
Test.PropTypes  = {
  name: PropTypes.string,
  setName: PropTypes.func,
};


export default Test;