import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelative from './NewsRelative';

class NewsDetail extends Component {
  render() {
    return (
  
      <div>
      <header className="masthead tintuc">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-1 text-center">Trang Danh Sách Tin</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {
        dl.map((value,key)=>{
          if(value.id === parseInt(this.props.match.params.id,20)){ // lấy id trên đường link truyền qua(nhìn vào code đê thấy đường dẩn)
            return(
              <div className="jumbotron jumbotron-fluid"key={key}>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                    <a> <img className="card-img-top" src={value.anh} alt="" /></a>
                      <div className="col-12 text-center">
                          <h1 className="display-3">{value.tieuDe}</h1>
                          <p className="lead">{value.noiDung}</p>
                          <hr className="my-2" />
                          <p>More info</p>
                          <p className="lead">
                            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                          </p>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            )
          }
          return true;
        })
      }

  

  <div className="container">
    <div className="card border-primary">
      <div className="card-body">
        <h4 className="card-title">Title</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
        {
          dl.map((value,key)=>{
            if(value.id !== parseInt(this.props.match.params.id,20)){
              if(key <= 3){
                return(
                  <NewsRelative key={key}
                    tinId={value.id}
                    tieuDe={value.tieuDe}
                    noiDung={value.noiDung}
                    anh={value.anh}
                    
                  ></NewsRelative>
                )
              }
             
            }
            return true;  
          })
        }
          
          
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default NewsDetail;