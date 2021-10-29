import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Components/form"


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      passwordIsValid: e.target.value.length > 5
    })
  }

  handleRememberMeChange(e) {
    // jai  log e pour recupéré la clef de cet objet qui etais target et checked qui contenait un booleen
     this.setState({rememberMe:e.target.checked })
  }


  handleEmailChange(e) {
    const regexEmail =  /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    // recup la valeur de l'input email et on verifier avec la regexemail et la methode js .test() que c'est bien un email 
    this.setState({
      email: e.target.value,
      emailIsValid: regexEmail.test(e.target.value)
    }) 
  }

  handleSubmit(e) {
    e.preventDefault()
    //  cette syntaxe me permet de verifier si il sont true sans faire de if
    this.setState({isSubmitted: this.state.emailIsValid  && this.state.passwordIsValid}) 
    
    
  }

  


  render(){
    console.log('valeur de isSubmitted ', this.state.isSubmitted);
     const {rememberMe, isSubmitted , email} = this.state
    return(
      <>
        <h1 className="text-center">Login</h1>
        {isSubmitted ? (
          <div className="container-fluid bg-success" >
            <h1 className="text-center">Succes</h1> 
            <p className="text-center fs-1">{email} </p>
          </div>
        ) : (
          <Form 
            handleSubmit={this.handleSubmit}
            value={rememberMe}
            chekboxRemember={this.handleRememberMeChange}
            onChangePassword={this.handlePasswordChange} 
            onChange={this.handleEmailChange} 
          />
        )}
      </>
    )
  }
}

export default App;
