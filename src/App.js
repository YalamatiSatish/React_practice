import './App.css';
import Employee from './components/Employee';
import React,{useState} from 'react';

function App() {
  const [EmployeeDetails, setEmployeeDetails] = useState(  
    [
        {
          id:1, name:"Vijay", Role:"FrontEnd", img:"https://w0.peakpx.com/wallpaper/483/391/HD-wallpaper-vijay-actor-bigil-fans-kerala-kollywood-master-tamil-thalapathy-theri.jpg"
        },
        {
          id:2, name:"Ajith", Role:"BackEnd", img:"https://w0.peakpx.com/wallpaper/573/677/HD-wallpaper-thala-ajith-actor-hero-kingmaker-kollywood-style-tamil-ultimate-star-viswasam.jpg"
        },
        {
          id:3, name:"Vikram", Role:"FullStack", img:"https://w0.peakpx.com/wallpaper/990/599/HD-wallpaper-actor-tamil-vikram-chiyaan-tollywood-hero.jpg"
        },
        {
          id:4, name:"Kamal", Role:"DEvops", img:"https://w0.peakpx.com/wallpaper/19/589/HD-wallpaper-kamal-hassan-actor-black-cinema-hero-indian-kollywood-tamil-ulaganayagan.jpg"
        }, {
          id:5, name:"Suriya", Role:"Cyber", img:"https://w0.peakpx.com/wallpaper/75/854/HD-wallpaper-surya-tamil-actor.jpg"
        }, {
          id:6, name:"Rajini", Role:"Intern", img:"https://w0.peakpx.com/wallpaper/447/914/HD-wallpaper-rajinikanth-actor-hero-kaala-kollywood-petta-rajini-superstar-tamil-telugu-tollywood.jpg"
        },
        {
          id:7, name:"Vikram", Role:"FullStack", img:"https://w0.peakpx.com/wallpaper/990/599/HD-wallpaper-actor-tamil-vikram-chiyaan-tollywood-hero.jpg"
        },
        {
          id:8, name:"Kamal", Role:"DEvops", img:"https://w0.peakpx.com/wallpaper/19/589/HD-wallpaper-kamal-hassan-actor-black-cinema-hero-indian-kollywood-tamil-ulaganayagan.jpg"
        }, {
          id:9, name:"Suriya", Role:"Cyber", img:"https://w0.peakpx.com/wallpaper/75/854/HD-wallpaper-surya-tamil-actor.jpg"
        }, {
          id:10, name:"Rajini", Role:"Intern", img:"https://w0.peakpx.com/wallpaper/447/914/HD-wallpaper-rajinikanth-actor-hero-kaala-kollywood-petta-rajini-superstar-tamil-telugu-tollywood.jpg"
        },
    ]
  )
  function updateEmployee(id, newName, newRole){
    console.log("update employee inside of app.js, the apppp")
      const updateEmployees = EmployeeDetails.map((employee)=>{
        if(id === employee.id){
          return{...employee, name:newName, Role:newRole}
        }
        return employee;
      })
      setEmployeeDetails(updateEmployees)
  }
  return (
    <div className="bg-blue-400 h-screen p-1 ">
      <div className='flex flex-wrap justify-center '> 
      { 
      EmployeeDetails?.map((item, employeeid) => {
        return ( 
        <Employee 
        EmployeeDetails={item}  
        key={employeeid} 
        updateEmployee={updateEmployee}/> 
      )
        })
      }
      </div>
    </div>
  );
}

export default App;
