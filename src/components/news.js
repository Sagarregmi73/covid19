import React from 'react';
import axios from 'axios';
import Spinner from './spinner';
class News extends React.Component{
    state={
news:[],
loading:false
    }
    
    componentDidMount=()=>{
      this.setState({loading:true});
        axios.get('https://nepalcorona.info/api/v1/news',{
            header:{
                'Content-Type': 'application/json'
            }
        }).then(response=>this.setState({news:response.data.data,loading:false}))
        }

    render(){
      if(this.state.loading){
        return <Spinner />
      }
      else{
        return (
          <div>
              <div className="ui container">
                  <h1>CoVid-19 News Portal!</h1>
                  </div>
              <br />
              {this.state.news.map(items=>
                 <div key={items._id}>
                     <div className="ui container">
                     <div  style={{width:"100%",marginBottom:"15px"}} className="ui card">
<div className="content">
              <div className="header">{items.title}</div>
  <div className="meta">{items.created_at}</div>
  <div className="description">
   
    <p>{items.summary}</p>
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

export default News;