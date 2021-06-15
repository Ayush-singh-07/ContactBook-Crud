import React from 'react';


class ContactForm extends React.Component{

     state={
			...this.getValues()
		}
	

	getValues(){
		if(this.props.currentIndex === -1)
			return{
				firt_name: '',
				last_name: '',
				email: '',
				work_number: '',
				home_number: '',
				address: ''
		}
		else
			return this.props.list[this.props.currentIndex]
	}


	componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.getValues() })
        }
    }



	handleInput=(e)=>{
		this.setState({[e.target.name]: e.target.value})
	}

	onsubmit=(e)=>{
		e.preventDefault();
		this.props.onaddoredit(this.state);
	}

	render(){
		return(
				<div>
   <article className=" ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
   <main className="pa4 black-80">
   <div className="measure center ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Create or Edit Contacts </legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="text"
             name="firt_name"
             value={this.state.firt_name}
             onChange={this.handleInput}/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Last Name</label>
            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="text"
             name="last_name"
             value={this.state.last_name}
             onChange={this.handleInput}
             id="last_name"/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">email</label>
            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email"
             name="email"
             placeholder="email"
             value={this.state.email}
             onChange={this.handleInput}/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Work Number</label>
            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="text"
             name="work_number"
             value={this.state.work_number}
             onChange={this.handleInput}/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Home number</label>
            <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="text"
            name="home_number"
            value={this.state.home_number}
             onChange={this.handleInput} />
          </div>
           <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Address</label>
            <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="text"
             name="address" 
             value={this.state.address}
             onChange={this.handleInput}/>
          </div>
              </fieldset>
           <div className="">
          <input
           className="b ph3 pv2 input-reset ba bw1 b--black grow bg-transparent  pointer f6 dib"
           type="submit"
           value="Add"
           onClick={this.onsubmit}/>
            </div>
            
    </div>
    </main>
    </article>
		</div>
			);
	}
}


export default ContactForm;