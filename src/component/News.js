import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu';

class News extends Component {
    render() {
        return (
            <div>
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
                    <div className="container">
                      <div className="row mt-3 mb-3">
                          {
                            dl.map((value,key) => {
                              return(
                                <NewsItem key={key}
                                anh={value.anh}
                                tieuDe={value.tieuDe}
                                tinId={value.id}
                                trichDan={value.trichDan}
                                noiDung={value.noiDung}
                                ></NewsItem>
                              )
                            })
                          }
                      </div>
                    </div>
                  </div>  

            </div>
        );
    }
}

export default News;