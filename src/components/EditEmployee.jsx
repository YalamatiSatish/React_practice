import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const EditEmployee = (Details,updateEmployee) => {
      const [name, setName] = useState(Details.Details.EmployeeDetails.name)
      const [role, setRole] = useState(Details.Details.EmployeeDetails.Role)

      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

     // console.log(Details.Details.EmployeeDetails)
    
      return (
        <>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={handleShow}>
        Update</button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <form id='editModal' className="w-full max-w-sm"
                  onSubmit={(e)=>{
                    handleClose();
                    e.preventDefault();
                    console.log("Update from edit employee")
                    console.log(Details.Details.EmployeeDetails.id, name, role )
                    updateEmployee(Details.Details.EmployeeDetails.id, name, role )}} >

                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                          Full Name
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="name" type="text" value={name} onChange={(e)=>setName(e.target.value) } />
                      </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                          Role
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="role" type="text"   value={role} onChange={(e)=>setRole(e.target.value)} />
                      </div>
                    </div>
                  </form>
            </Modal.Body>
            <Modal.Footer>
             
        <button  className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
           onClick={handleClose}
           >
                Close</button>
        <button form='editModal' className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
                Update</button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

export default EditEmployee