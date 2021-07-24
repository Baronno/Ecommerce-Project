import React from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  //event preventDefault prevent the browser to submit it autmotically, to make us have a full control
  //of our ,submit event. 
  //the onSubmit is the method to submit the form
  //EVENT 作为js的内置函数，在DOM事件触发时用于去查询相关信息。
  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='sign-in'>
        <h2> I have an acount</h2>
        <span> signin with your email </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label= 'email'
            required />
 
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required />
 
          <CustomButton type='submit' >Sign in</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
