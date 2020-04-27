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
		}
		this.isValidFile=this.isValidFile.bind(this)
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

	//after the submit button clicked 
	onClickHandler=()=>{
		if(this.isValidFile()){
		const data = new FormData();
		data.append('file',this.state.selectedFile);
		alert("server yet to configure");
		//use the axios API to send the file 
		}else{
		alert("Enter a file with valid format");
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
	    </div>
	//end of return expression
    );
	 //end of render method 
  }
}

export default App;
