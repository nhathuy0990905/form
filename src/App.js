import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      txtName : '' ,
      txtPass : '' ,
      txtDescription : '',
      gender : 1,
      rdLang : 'vi',
      checkStatus : false,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event){
    var target = event.target;
    var name   = target.name;
    var value  = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }

  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }

  render() {

    return (

      <div className="container mt-30">
        <div className="row">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Đăng ký thành viên</h3>
                </div>
                <div className="panel-body">
                   
                  <form onSubmit={this.onHandleSubmit}>
                    <legend>Nhập thông tin</legend>
                  
                    <div className="form-group">
                      <label>Tên đăng nhập</label>
                      <input  type="text" 
                              className="form-control" 
                              name="txtName" 
                              onChange= { this.onHandleChange }  
                              value= {this.state.txtName}       
                      />
                    </div>

                    <div className="form-group">
                      <label>Mật khẩu</label>
                      <input  type="password" 
                              className="form-control" 
                              name="txtPass" 
                              onChange= { this.onHandleChange }  
                              value={this.state.txtPass}        
                      />
                    </div>

                    <div className="form-group">
                      <label>Mô tả về bạn</label>
                      <textarea 
                                className="form-control"
                                name="txtDescription" 
                                cols="30" 
                                rows="5"
                                onChange = {this.onHandleChange}
                                value = {this.state.txtDescription}
                      >
                      </textarea>
                    </div>
                  
                    <label>Giới tính</label>
                    <select 
                            className="form-control" 
                            name="gender" 
                            onChange = { this.onHandleChange }
                            value={this.state.gender}
                    >
                      <option value="{0}">Nữ</option>
                      <option value="{1}">Nam</option>
                    </select>
                    <br/>

                    <label>Ngôn ngữ</label>
                    <div className="radio">
                      <label>
                        <input 
                            type="radio" 
                            name="rdLang" 
                            value="vi"
                            onChange = {this.onHandleChange}
                            checked = {this.state.rdLang === "vi"}
                        />
                          Vietnamese
                      </label>
                      <br/>
                      <label>
                        <input 
                            type="radio" 
                            name="rdLang" 
                            value="en"
                            onChange = {this.onHandleChange}
                            checked = {this.state.rdLang === "en"} 
                        />
                          English
                      </label>
                    </div>

                    <div className="form-group">
                      <label>Điều khoản tại website</label>
                      <textarea 
                                className="form-control"
                                name="txtDescription" 
                                cols="30" 
                                rows="3"
                                onChange = {this.onHandleChange}
                                value = " Tham gia vào website của Huy, bạn phải thừa nhận rằng Huy rất đẹp trai và phong độ !"
                      >
                      </textarea>
                    </div>

                    <div className="checkbox">
                      <label>
                        <input 
                            type="checkbox" 
                            name="checkStatus"
                            value={true}
                            onChange={ this.onHandleChange }
                            checked={ this.state.checkStatus === true}
                        />
                          Tôi đồng ý với các điều khoản trên.
                      </label>
                    </div>

                    

                    <button type="submit" className="btn btn-success">Lưu</button>
                    <button type="reset" className="btn btn-default">Xóa</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }

}

export default App;