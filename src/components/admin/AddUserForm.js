import React, {useState, useEffect} from 'react';
import { ReactComponent as AddUserIcon } from '../../assets/icons/add_user.svg';
import axios from 'axios';
import { addDepartmentUser, addOfficeUser, addAdministrativeUser } from '../../context/adminUsers/user.actions';
import { useUsersState, useUsersDispatch } from '../../context/adminUsers/UserContext';

const AddUserForm = () => {

    const usersState = useUsersState();
    const dispatch = useUsersDispatch();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [field, setField] = useState('');
    const [allDepartments, setAllDepartments] = useState([]);
    const [allOffices, setAllOffice] = useState([]);
    const [department, setDepartment] = useState('');
    const [office, setOffice] = useState('');
    const [administrative, setAdministrative] = useState('');

    
    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

       if(name === 'full-name') {
            setFullName(value);
       } else if(name === 'email') {
            setEmail(value)
       } else if(name === 'contact-no') {
            setContactNo(value)
       } else if(name === 'username') {
            setUsername(value);
       } else if(name === 'password') {
           setPassword(value);
       } else if(name === 'field') {
           setField(value);
       } else if(name === 'department') {
           setDepartment(value);
       } else if(name === 'office') {
           setOffice(value);
       } else if(name === 'administrative') {
           setAdministrative(value);
       }

    }


    const getAllDepartments = async() => {
        const accessToken = localStorage.getItem('accessToken');

        const res = await axios.get('api/utils/departments',{
            headers: {'x-access-token' : accessToken}
        });    
    
        if(res.data.success) {
            setAllDepartments(res.data.result);
        }

    }

    const getAllOffices = async() => {
        const accessToken = localStorage.getItem('accessToken');

        const res = await axios.get('api/utils/offices',{
            headers: {'x-access-token' : accessToken}
        });    
    
        if(res.data.success) {
            setAllOffice(res.data.result);
        }
    }
    


    const handleAddUser = e => {
        e.preventDefault();

        if(field === 'Academic') {
            for(let i = 0; i < allDepartments.length; i++) {
                if(department === allDepartments[i].department_name) {
                   const d_id = allDepartments[i].department_id;

                   const newUserInfo = {
                    name: fullName,
                    email,
                    contact_no: contactNo,
                    department_id: d_id,
                    username,
                    password
                }
    
                addDepartmentUser(newUserInfo, dispatch);  
                }
            }

             

        } else if (field === 'Office') {
            for(let i = 0; i < allOffices.length; i++) {
                if(office === allOffices[i].office_name) {
                    const o_id = allOffices[i].office_id;     
                    
                    const newUserInfo = {
                        name: fullName,
                        email,
                        contact_no: contactNo,
                        office_id: o_id,
                        username,
                        password
                    }
            
                    addOfficeUser(newUserInfo, dispatch);           
                }
            }

            
        } else if (field === 'Administrative') {
            
            const newUserInfo = {
                name: fullName,
                email,
                contact_no: contactNo,
                administrative_type: administrative,
                username,
                password
            }

            addAdministrativeUser(newUserInfo, dispatch);
        }

       

    }

    useEffect(() => {
        getAllDepartments();
        getAllOffices();
    }, [])

    return (
        <form className="add-user" onSubmit={handleAddUser}>
            <label>
                Add User
            </label>
            <input placeholder="Full Name" name="full-name" type="text" onChange={onChange} required />
            <input placeholder="Email" name="email" type="email" onChange={onChange} required/>
            <input placeholder="Contact No." name="contact-no" type="tel" onChange={onChange} required />
            <input placeholder="Username" name="username" type="text" onChange={onChange} required />
            <input placeholder="Password" name="password" type="password" onChange={onChange} required />
            <select placeholder="Field" name="field" onChange={onChange} required>
                <option disabled selected>Field</option>
                <option>Academic</option>
                <option>Office</option>
                <option>Administrative</option>
            </select>

            { 
                field === 'Academic' && 
                <select placeholder="Departments" name="department" onChange={onChange} required>
                    <option disabled selected>Departments</option>
                    {
                        allDepartments.map((val, index) => {
                            return<option key={index}>{ val.department_name }</option>
                        })
                    }
                </select>
            }

            {
                field === 'Office' &&
                <select placeholder="Offices" name="office" onChange={onChange} required>
                    <option disabled selected>Offices</option>
                    {
                        allOffices.map((val, index) => {
                            return<option key={index}>{ val.office_name }</option>
                        })
                    }
                </select>
            }

            {
                field === 'Administrative' &&
                <input placeholder="Administrative Type" type="text" name="administrative" onChange={onChange} required />
            }

            {
                field !== '' && 
                <button type="submit"><AddUserIcon /> Add User</button>
            }
        </form>
    );
}

export default AddUserForm;