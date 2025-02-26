import React, { useState } from 'react';
import Child from './Child';
import '../../css/Parent.css';

function Parent() {
    const [name, setName] = useState("n1");
    const [salary, setSalary] = useState(0);
    const [location, setLocation] = useState("l1");
    const [age, setAge] = useState("a1");

    const changeUser = (n, s, l, a) => {
        setName(n);
        setSalary(s);
        setLocation(l);
        setAge(a);
    };

    return (
        <div className="parent-container">
            <div className="input-section">
                <Child changeUser={changeUser} />
            </div>
            <div className="output-section">
                <div>
                    Name: {name}
                    <br /><br />
                    Salary: {salary}
                    <br /><br />
                    Location: {location}
                    <br /><br />
                    Age: {age}
                    <br /><br />
                </div>
            </div>
        </div>
    );
}

export default Parent;