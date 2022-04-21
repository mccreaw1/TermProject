function SubscribeForm() {
    return (
      <>
        <div><h2>Subscribe to Banshi's Deals</h2></div>
        <form className="login">
          <div className="container">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstNameField"
              // onChange={this.onFirstNameChanged.bind(this)}
              // ref="firstNameField"
              // value={this.state.firstName}
            />
          </div>
  
          <div className="container">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastNameField"
              // onChange={this.onLastNameChanged.bind(this)}
              // ref="lastNameField"
              // value={this.state.lastName}
            />
          </div>
  
          <div className="subscription-form-field-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="emailField"
              // ref="emailField"
              // onChange={this.onEmailChanged.bind(this)}
              // value={this.state.email}
            />
          </div>
  
          <div className="subscription-form-field-group">
            {/* <input type="submit"  /> */}
          </div>
        </form>
      </>
    );
  }

  export default SubscribeForm