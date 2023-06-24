import React, { Component } from 'react'



// boostrap se late waqt 
// style hai toh uskko style ko js mai wrap kar usko object bana key value pair mai store kar
// props render ke andar return ke upar
// destructing karege
// phir usko directly use kar sakte hai


// date, author and source
// date and author ek muted text ke andar hai jo ki span mai hai 
// date ko ek naya func pass kiye .toString jisne usko ek string mai pass karidiya  {new Date(date).toString()} esse
// author directly aaya
// sabkok upar daale yaha let {title,desc,imageUrl,urlId,author,date,source}= this.props;
//  source ke liye badge liye usme thoda personal css daale 

export class NewsItem extends Component {
  render() {

    let {title,desc,imageUrl,urlId,author,date,source}= this.props;
    return (
        <div className="card my-3 " >
          <span class="   badge rounded bg-danger d-flex justify-content-end position-absolute right-0" >
          
    {source}</span>
        <img src={imageUrl?imageUrl:"https://static.toiimg.com/photo/101129015.cms"} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <hr/>
          <p className="card-text">{desc}</p>
          {/* baaki hai banana */}
          <hr/>
          <span><small class="text-danger">By {author?author :"Unknown"} on {new Date(date).toString()}</small></span><br/>
          <a href={urlId} className="btn btn-dark my-3">Readmore</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
