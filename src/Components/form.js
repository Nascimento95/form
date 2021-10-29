import React from "react"
import Button from './button'

class Form extends React.Component{
  render(){
    const { onChange, onChangePassword, chekboxRemember,handleSubmit } = this.props

    return(
        <div className="container">
            <form className="row needs-validation" novalidate onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                        <input 
                            onChange={onChange}
                            type="email" 
                            className="form-control " 
                            placeholder="entrez votre E-mail" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text" ></div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input 
                            onChange={onChangePassword}
                            type="password" 
                            className="form-control" 
                            placeholder="entrez votre Mot de passe" 
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                            onChange={chekboxRemember}
                            type="checkbox" 
                            className="form-check-input" 
                            id="Check"
                        />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <Button />
            </form>
                        
        </div>
           
    )
  }
}

export default Form;