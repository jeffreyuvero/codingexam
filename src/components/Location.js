import React, {Component } from 'react'

import {connect} from 'react-redux'
import {getLocation} from '../actions/locationActions'


class Location extends Component {
	constructor(props)
	{
		super(props);
	}

	
	render() {
		const title = this.props.match.params.title
		const type = this.props.match.params.type
		const long = this.props.match.params.long
		const id = this.props.match.params.id
		
		return (
			<div>
				<div className = "row">
					<div className = "col-lg-3">
					</div>
					<div className = "col-lg-6">
						<div class="card">
						  <div class="card-body">
						    <h1>Weather details</h1>
						    <h3>{id} : {title}</h3>	 
						    {type} <br />{long} 
						  </div>
						</div>
						
					</div>
					<div className = "col-lg-3">
					</div>
				</div>
			</div>
		)
	}
}


export default Location