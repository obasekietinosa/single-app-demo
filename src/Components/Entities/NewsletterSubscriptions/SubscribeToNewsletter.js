import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading'

export default class SubscribeToNewsletter extends Component {
  constructor(props) {
        super(props)
        this.state = {
            status: "Done",
            message: ""
        }
    }

  submitEmail = email => {
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
        this.setState({
            message: "Please give us a valid email address",
            status: "Error"
        })
        return
    }
    this.setState({ message:"Please wait", status: "Loading" })
    fetch("https://blog-admin.wetalksound.co/newsletter/subscribe.php?email=" + email, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      switch (data.status) {
          case "Success":
            this.setState({ status: "Done", message: "Success! You'll receive an email for my next publication"})
            break;

          case "Duplicate":
            this.setState({ status: "Done", message: "Thanks! Seems like you've already subscribed."})
            break;
      
          default:
            throw new Error('Something went wrong')
        }
    })
    .catch(error => {
      let message = "There was an error adding your email. Please try again."
      this.setState({ message, status:"Error" })
    })
  }

  render() {

    return (
        React.cloneElement(
          this.props.children, 
          {
            onSubmit: this.submitEmail, 
            message: this.state.message, 
            status: this.state.status
          }
        )
    )
  }
}
