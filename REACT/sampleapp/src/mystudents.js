//import React, { useState } from "react";
//import './mystudents.css'; 
//function based component-- to display multiple student records on the tabel.
//a specific hook called as useState() will be used for this implementaions

//const StudentTabel =() =>{
       //[]--- it means using array
// const [students] = useState([
// {id:1, name: "Nandy", age:25, grade:'A'},
// {id:2, name:"Teja", age:22, grade:'A'},
// {id:3, name: "Ashlina", age:23, grade:'C'},
// {id:4,  name: "Krishna", age:23, grade:'B'},
// {id:5, name:"Harris", age:22, grade:'E'}
// ]);

//     return(
// <div>
//     <h2>studentsDetails</h2>
//     <table>
//         <tr>
//             <th>ID</th>
//             <th>StudentName</th>
//             <th>Age</th>
//             <th>Grade</th>
//         </tr>
//         {/* insted of for we use map (for for loop) */}
// {students.map((student) =>(

// <tr key={student.id}>
//     <td>{student.id}</td>
//     <td>{student.name}</td>
//     <td>{student.age}</td>
//     <td>{student.grade}</td>
// </tr>

// ))}

//     </table>
// </div>
//     );
// }

// export default StudentTabel;