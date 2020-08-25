import React from 'react';
import axios from 'axios';
import Spinner from './spinner';
class About extends React.Component{
    state={
        updated:[],
        loading:false
    }
    componentDidMount=()=>{
      this.setState({loading:true});
axios.get('https://data.nepalcorona.info/api/v1/covid/timeline',{
   header:{
    'Content-Type': 'application/json'
   } 
}).then(response=>this.setState({updated:response.data,loading:false}))

    }
    render(){
      if(this.state.loading){
       return <Spinner />
      }
      else{
        return (
          <div>
              <div  className="ui container">
              <h1>CoVid-19 TimeLine of Nepal</h1>
              </div><br />
             
              {this.state.updated.map(items=>
                 <div key={items.date}>
                     <div className="ui container">
                     <div className="ui inverted segment">
<div className="ui inverted relaxed divided list">
  <div className="item">
    <div  className="content">
              <div className="header" style={{color:"#FF8C00"}}><h2>Date: {items.date}</h2></div><br />
              <div className="header" ><h3>Total Case: {items.totalCases}</h3></div>
              <div className="header" ><h3>New Cases: {items.newCases}</h3></div>
              <div className="header" ><h3>Total Recoveries: {items.totalRecoveries}</h3></div>
              <div className="header" ><h3>New Recoveries: {items.newRecoveries}</h3></div>
              <div className="header" ><h3>Total Deaths: {items.totalDeaths}</h3></div>
              <div className="header" ><h3>new Deaths: {items.newDeaths}</h3></div>
            <hr />
    </div>
  </div>
</div>
</div>
</div>
</div> 
)}
   </div>
      );
      }
        
    }

}



 
export default About;