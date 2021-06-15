import React from 'react';
import 'tachyons';

const Navigation = () => {
	return(
		    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
  <nav className="f6 fw6 ttu tracked">
    <a className="link dim white dib mr3" href="#0" title="Home">Add a Contact Here</a>  
  <a className=" Button f6 link dim ph3 pv2 mb2 dib white bg-green" href="#0">Create New Contact</a>
  </nav>
</header>

		);
}


export default Navigation;