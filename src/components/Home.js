import React , {Component} from 'react'


import {connect} from 'react-redux'
import {getLocation} from '../actions/locationActions'

import {Link} from 'react-router-dom'
class Home extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			'locations' : [],
			'search': ""
		}

	}
	
	onChange(event) {
		this.props.getLocation(event.target.value)
		this.setState(({
			locations: this.props.loc
		}))
	}

	render(){
		const locatns = this.state.locations; 
		console.log(locatns)
		return (
			<div>
				<div className = "row">
					<div className = "col-lg-3">
					</div>
					<div className = "col-lg-6">
						<h1>Location </h1>
						<input type="text" class="form-control"  placeholder = "Search for the location" onChange = {this.onChange.bind(this)} />
					</div>
					<div className = "col-lg-3">
					</div>
				</div>
				<hr />
				<div className = "row">
					<div className = "col-lg-9">
						{locatns.map(local => (
							<div class="card">
							  <div class="card-body">
							    <Link to={`location/${local.title}/${local.location_type}/${local.latt_long}/${local.woeid}`}>{local.title}</Link>
							  </div>
							</div>
						))}	
					</div>
				</div>
			</div>
		)
	}
} 

const mapStateToProps = (state) => ({
  loc: state.locations.locations,
}) 

export default connect(mapStateToProps,{getLocation})(Home)