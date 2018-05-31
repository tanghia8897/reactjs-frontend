import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

class Contact extends Component {
    constructor(props){
      super(props);
      this.state={
        isRedirect : false
      }
    }
    isFileChange=(event)=>{
      const tenanh = event.target.files[0].name;
      this.setState({
        fAnh : tenanh
      })
    }
    ischange=(event)=>{
      const name = event.target.name; //Lấy ra name trong input được lưu trong target
      const value = event.target.value;
      this.setState({
        [name]:value //set mãng tên với mãng value đã lấy ra
      })
    }
    getValue = () =>{
      var noiDung ="";
      noiDung+= "Tên nhận được là: "+this.state.fName;
      noiDung+= "/ Email nhận được là: "+this.state.fEmail;
      noiDung+= "/ Phone nhận được là: "+this.state.fPhone;
      noiDung+= "/ Message nhận được là: "+this.state.fMess;
      noiDung+= "/ Date nhận được là: "+this.state.fDate;
      noiDung+= "/ Image nhận được là: "+this.state.fAnh;
      return noiDung;
    }
    submitForm = (event)=>{ // làm form k load lai trang khi submit
      event.preventDefault();
      this.setState({
        isRedirect:true
      })
    }
    render() {
      if(this.state.isRedirect){
        console.log(this.getValue());
        return <Redirect to="/"/>
      }
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
                  {/* Contact Section */}
                  <section id="contact">
                    <div className="container">
                      <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                      <hr className="star-dark mb-5" />
                      <div className="row">
                        <div className="col-lg-8 mx-auto">
                          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                          {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                          <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input name="fName" onChange={(event) => this.ischange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger" />
                              </div>
                            </div>
                            <div className="control-group">
                              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input name="fEmail" onChange={(event) => this.ischange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                              </div>
                            </div>
                            <div className="control-group">
                              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input name="fPhone" onChange={(event) => this.ischange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                              </div>
                            </div>
                            <div className="control-group">
                              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea name="fMess" onChange={(event) => this.ischange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                <p className="help-block text-danger" />
                              </div>
                            </div>

                            <div className="control-group">
                              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Select Date</label>
                                  <div className="form-group">   
                                    <select className="form-control" name="fDate" onChange={(event) => this.ischange(event)} >
                                      <option value="thu3">Ngày thứ 3</option>
                                      <option value="thu5">Ngày thứ 5</option>
                                      <option value="thu7">Ngày thứ 7</option>
                                      <option value="chunhat">Ngày chủ nhật</option>
                                    </select>
                                  </div>
                                <p className="help-block text-danger" />
                              </div>
                            </div>
                            
                            <div className="control-group">
                              <div className="form-group floating-label-form-group controls mb-0 pb-2">                                 
                                  <input type="file" name="fFile" onChange={(event) => this.isFileChange(event)} className="form-control-file" aria-describedby="fileHelpId"/>
                                <p className="help-block text-danger" />
                              </div>
                            </div>

                            <br />
                            <div id="success" />
                            <div className="form-group">
                              <button type="submit" onClick = {(event) => this.submitForm(event) } className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

            </div>
        );
    }
}

export default Contact;