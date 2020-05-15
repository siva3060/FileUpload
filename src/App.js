/*
 * Description : Fileuploader React Component
 * 		 validates the file format & user click
 *
 *  Author : Siva Charan
 *  Email : Siva3060@gmail.com
 */
import React, { Component } from 'react';
import axios from 'axios';
import {btn} from './App.css';

class App extends Component {

	//cronstructor method for App
	constructor(props){
		super(props);
		this.state = {
			selectedFile:null,
			httpRequest:"not updated",
		}
		this.isValidFile=this.isValidFile.bind(this)
		this.handleHttpRequest=this.handleHttpRequest.bind(this)
	}


	//after the file is uploaded 
	onChangeHandler=event=>{
		this.setState({
      		selectedFile: event.target.files[0],
      		loaded: 0,
    		})

	//end of onChangeHandler
	}

	//if the user hits the submit button with out file upload 
	//fileExist = {
	//}

	//validating the file format & validatin user invalid submit button
	isValidFile=()=> {
	      const fileLength = this.state.selectedFile.name.split(".");
	      const fileExtension = fileLength[1];
		if(fileLength.length >  1 && fileExtension == "csv"){ 
			return true;
		}
		else{
			return false;
		}
	}

	handleHttpRequest = async ()=>{
		const resp = await axios.get('http://15.188.74.126:8086/keepalive');
		const data = resp.entity;
		this.setState({httpRequest:data});
	}

	//after the submit button clicked 
	onClickHandler=()=>{
		console.log("insdie onclick handler");
		if(this.isValidFile()){
		const data = new FormData();
		data.append('upload_file',this.state.selectedFile[0]);
		this.handleHttpRequest();
		//use the axios API to send the file 
		/*axios.post("https://15.188.74.126/Upload",data).then(res => {
			//console.log("File has been uploaded sucessfully")
			console.log(res.statusTest);
			alert("File has been uploaded sucessfully");
		});
		}else{
		alert("Enter a file with valid format");
		}
		*/
	}
	}


  render() {
    return (
	    <div className="file_upload">
	    <table className="table_upload">
	    <caption>Upload File.</caption>
	    <tr>
	   <td><input type="file"  className="input_file"onChange={this.onChangeHandler}/></td>
	   <td><button type="button" className="btn" onClick={this.onClickHandler}>Upload</button></td>
	    </tr>
	    </table>
	    <h1> Health Check  >>>>>>>>> {this.state.httpRequest}</h1>
	    </div>
	//end of return expression
    );
	 //end of render method 
  }
}

export default App;
