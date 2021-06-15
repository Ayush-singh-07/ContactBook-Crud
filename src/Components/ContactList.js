import React from 'react';
import ContactForm from './ContactForm'
import { Container, Row, Col } from 'react-bootstrap';



class ContactList extends React.Component{

state={
			currentIndex: -1,
			list: this.returnlist()
		}


	returnlist (){
		if(localStorage.getItem('Contacts')==null)
			localStorage.setItem('Contacts', JSON.stringify([]))
		return JSON.parse(localStorage.getItem('Contacts'))
	}

	onaddoredit= (data) =>{
		let list = this.returnlist()
		if(this.state.currentIndex===-1) 
		list.push(data)
		else
		list[this.state.currentIndex] =data 
		localStorage.setItem('Contacts', JSON.stringify(list))
		this.setState({list : list , currentIndex: -1})
	}

	handleEdit=(index)=>{
		this.setState({
			currentIndex: index
		})
	}

	handleDelete=(index)=>{
		let list = this.returnlist()
		list.splice(index, 1)
		localStorage.setItem('Contacts', JSON.stringify(list))
		this.setState({list : list , currentIndex: -1})


	}


	render(){
		return(
				
				<div>
								   <ContactForm
										onaddoredit={this.onaddoredit}
										currentIndex={this.state.currentIndex}
										list={this.state.list}/>
							
					    	
					    	<div class="pa4 ">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center ba " cellspacing="0">
      <thead>
        <tr class="stripe-dark ">
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">First Name</th>
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">Last Name</th>
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">Email</th>
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">Work Number</th>
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">Home Number</th>
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">Address</th>
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">Edit Contact</th>
          <th class="fw6 tl pa3 bg-near-black f5 lh-copy">Delete Contact</th>
        </tr>
      </thead>
      <tbody class="lh-copy">
      {this.state.list.map((item, index)=>{

      

       return( <tr key='index' class="stripe-dark">
          <td class="pa3 table-item bg-dark-gray">{item.firt_name}</td>
          <td class="pa3 table-item bg-dark-gray">{item.last_name}</td>
          <td class="pa3 table-item bg-dark-gray">{item.email}</td>
          <td class="pa3 table-item bg-dark-gray">{item.work_number}</td>
          <td class="pa3 table-item bg-dark-gray">{item.home_number}</td>
          <td class="pa3 table-item bg-dark-gray">{item.address}</td>
          <td className='bg-dark-gray'> 
          <button class="f6 link dim ph3 pv2 mb2 dib white bg-green"
           	 onClick={()=> this.handleEdit(index)}>Edit</button>
           	  </td>
           <td className='bg-dark-gray' ><button class="f6 link dim ph3 pv2 mb2 dib white bg-red"
           	 onClick={()=> this.handleDelete(index)}>Delete</button>
           </td>
		</tr>
         )}

      )} 
      </tbody>
    </table>
  </div>
</div>
	

				</div>
				
			);
	}
}


export default ContactList;