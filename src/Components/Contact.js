import React, { Component } from 'react';
// const nodemailer = require('nodemailer')

const encode = (data) => {
   return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = { ContactName: "", ContactEmail: "", ContactMessage: "" };
   }

   handleSubmit = e => {
      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact", ...this.state })
      })
         .then(() => alert("Success!"))
         .catch(error => alert(error));

      e.preventDefault();
   };

   handleChange = e => this.setState({ [e.target.name]: e.target.value });

   render() {

      const { ContactName, ContactEmail, ContactMessage } = this.state;

      if(this.props.data){
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone= this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
       }


      return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>

               <div className="ten columns">
                  <p className="lead">{message}</p>
               </div>
            </div>

            <div className="row">
               <div>
                  <form id="contactForm" onSubmit={this.handleSubmit}>
                  <fieldset>
                     <div className="col-12"> 
                        <label for="contactName">
                           Your Name: <span className="required">*</span>
                        </label>
                        <input size="35" id="contactName" type="text" name="name" value={ContactName} onChange={this.handleChange} />
                     </div>
                     <div>
                        <label>
                           Your Email: 
                           <span className="required">*</span>
                        </label>
                        <input type="email" size="35" id="contactEmail" name="email" value={ContactEmail} onChange={this.handleChange} />
                     </div>
                     <div>
                        <label>
                           Message: <span className="required">*</span>
                        </label>
                        <textarea name="message"  cols="50" rows="15" id="contactMessage"  value={ContactMessage} onChange={this.handleChange} />
                     </div>
                     <div>
                        <button type="submit">Send</button>
                     </div>
                     </fieldset>
                  </form>

               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        {email}<br />
                        <span>{phone}</span>
                     </p>
                  </div>


               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
