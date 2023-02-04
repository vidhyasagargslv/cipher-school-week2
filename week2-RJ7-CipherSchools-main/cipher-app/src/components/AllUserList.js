import React,{useState} from "react";
import UserDetails from "./UserDetails";

// // class AllUserList extends React.Component {
// const AllUserList = () => {
//     const [state,setState] = useState({
//         name: "Shubham",

//     })


//      allUsers = [
//       { name: "Alex", email: "alex@gmail.com", phoneNumber: "+91-9988765432" },
//       {   
//           name: "Alenn",
//           email: "alenn@email.com",
//           phoneNumber: "+91-8974767733",
//       },
//       {
//           name: "John",
//           email: "john@email.com",
//           phoneNumber: "+91-7989893444",
//       },
//     ];





//         return (
//           <div>
//             <Test name={state.name}/>
//               {/* <h1>The name is {state.name}</h1> */}
//               {allUsers.map((user, index) => (
//                 <UserDetails key={index} user={user} />
//             )    )}
//           </div>
//         );
//       }




const AllUserList = () => {
    let [state, setState] = useState({name: "Shubham"});

    return(
        <h1>The name is {state.name}</h1>
    )
};
export default AllUserList;