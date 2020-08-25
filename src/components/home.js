import React from 'react';
import axios from 'axios';
import Spinner from './spinner';
class Home extends React.Component{
    state={
        update:[],
        loading:false
    }
    componentDidMount=()=>{
      this.setState({loading:true});
axios.get('https://nepalcorona.info/api/v1/data/world',{
   header:{
    'Content-Type': 'application/json'
   } 
}).then(response=>this.setState({update:response.data,loading:false}))

    }
    render(){
      if(this.state.loading){
         return <Spinner />
      }
      else{
        return (
      
          <div >
              <div  className="ui container">
              <h1>CoVid-19 Spreaded Entire World</h1>
              </div><br />
             
              {this.state.update.map(items=>
                 <div key={items._id}>
                     <div className="ui container">
                     <div className="ui inverted segment">
<div className="ui inverted relaxed divided list">
  <div className="item">
    <div className="content">
              <div className="header" style={{color:"#FF8C00"}}><h2>Country: {items.country}</h2></div><br />
              <div className="meta"><h3>Total Cases: {items.totalCases}</h3></div>
              <div className="meta"><h3>New Cases: {items.newCases}</h3></div>
              <div className="meta"><h3>Total Deaths: {items.totalDeaths}</h3></div>
              <div className="meta"><h3>New Deaths: {items.newDeaths}</h3></div>
              <div className="meta"><h3>Active Cases: {items.activeCases}</h3></div>
              <div className="meta"><h3>Total Recovered: {items.totalRecovered}</h3></div>
              <div className="meta"><h3>Critical Cases: {items.criticalCases}</h3></div>
              <div className="meta"><h3>Tests Cases: {items.tests}</h3></div><br /><br/>
              <div className="meta" style={{color:"grey"}}><h4>Updated At: {items.updated}</h4></div>
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

export default Home;