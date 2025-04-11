import React, { Component } from 'react'
import '/src/css/Jobposting.css';
import { BASEURL, callApi } from '../api';


export default class JobPosting extends Component {
   constructor()
  {
    super();
    this.state = {
        id:'',
      title: '',
      company:'',
      location:'',
      jobtype:'',
      salary:'',
      description:''
    };
    this.state = {jobList:[]};
    this.readResponse = this.readResponse.bind(this);
    this.updateResponse=this.updateResponse.bind(this);
    this.saveResponse=this.saveResponse.bind(this);
  }
  componentDidMount()
  {
    callApi("GET", BASEURL + "jobs/read", "", this.readResponse);
  }
  readResponse(response)
  {
    if(response.includes("404::")){
          alert(response.split("::")[1]);
          return;
    }
    let data = JSON.parse(response);
    this.setState({jobList:data});
  }
  loadInputChange(event)
  {
    this.setState({[event.target.name] : event.target.value});
  }
  saveJob()
  {
    let data = JSON.stringify(this.state);
    callApi("POST", BASEURL + "jobs/create", data, this.saveResponse)
  }
  saveResponse(response)
  {
    let data = response.split("::");
    alert(data[1]);
  }
  showPopup()
  {
    jppopup.style.display = "block";
  }
  closepopup()
  {
    jppopup.style.display = "none";
  }
  updateData(id)
  {
    callApi("GET", BASEURL + "jobs/getdata/" + id, "", this.updateResponse);
  }
  updateResponse(response)
  {
    if(response.includes("404::"))
    {
      alert(response.split("::")[1]);
      return;
    }
    let data = JSON.parse(response);
    this.setState({
      id:data.id,
      title:data.title,
      company:data.company,
      location:data.location,
      jobtype:data.jobtype,
      salary:data.salary,
      description:data.description
    });
    this.showPopup();
  }
  deleteData(id)
  {
    let resp = confirm("Click OK to confirm the deletion");
    if(resp === false)
        return ;
    callApi("DELETE", BASEURL + "jobs/delete/" + id, "", this.saveResponse);
  }
  render() {
    const{title, company, location, jobtype, salary, description} = this.state;
    const{jobList} = this.state;
    return (
      <div className='jpcontainer'>
            <div id='jppopup' className='popup'>
                    <div className='popupwindow'>
                      <div className='popupheader'>
                            <label>Add Job Post</label>
                            <span onClick={()=>this.closepopup()}>&times;</span>
                    </div>
                          <div className='popupcontent'>
                                    <label>Job Title</label>
                                    <input type='text' id="T1" name='title' value={title} onChange={(event)=>this.loadInputChange(event)} />
                                    <label>Company Name</label>
                                    <input type='text' id="T2" name='company' value={company} onChange={(event)=>this.loadInputChange(event)} />
                                    <label>Location</label>
                                    <input type='text' id='T3' name='location' value={location} onChange={(event)=>this.loadInputChange(event)}  />
                                    <label>Job Type</label>
                                    <select id = 'T4' name='jobtype' value={jobtype} onChange={(event)=>this.loadInputChange(event)} >
                                              <option value="0"></option>
                                              <option value="1">Full-Time</option>
                                              <option value="2">Part-Time</option>
                                    </select>
                                    <label>Salary</label>
                                    <input type='text' id="T5" name='salary' value={salary} onChange={(event)=>this.loadInputChange(event)}  />
                                    <label> Job Description</label>
                                    <textarea id = "T6" rows="5" name='description' value={description} onChange={(event)=>this.loadInputChange(event)} ></textarea>
                                    <button onClick={()=>this.saveJob()}>Save</button>
                          </div>
                          </div>
                          <div className='popupfooter'></div>
            </div>
            <div className='header'>
                <label>All Jobs</label>
            </div>
  <div className='content'>
                {jobList.map((data)=>(
                    <div className='result'>
                          <div className='div1'>
                                      <label>{data.title}</label>
                                      <span>{data.salary}</span>
                                      <img src='images/delete.png' alt='' onClick={()=>this.deleteData(data.id)}/>
                                      <img src='images/edit.png' alt=''onClick={()=>this.updateData(data.id)} />
                          </div>
                          <div className='div2'>
                            {data.company}  | {data.location}  |  {data.jobtype === "1"? 'Full-Time':'Part-Time'}
                          </div>
                          <div className='div3'>
                            {data.description}
                          </div>
                    </div>
                ))}
              </div>
              <div className='footer'>
                <button onClick={()=>this.showPopup()}>Add New Job</button>
              </div>
      </div>
    )
  }
}