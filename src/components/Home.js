import React , {Component} from 'react'


import {connect} from 'react-redux'
import {getLocation} from '../actions/locationActions'


class Home extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			'locations' : []
		}

	}
	
	onChange() {
		this.props.getLocation()
		this.setState(({
			locations: this.props.loc
		}))
	}

	render(){
		const locatns = this.state.locations; 
		return (
			<div>
				<h1>Location </h1>
				<div className = "row">
					<div className = "col-lg-9">
						<input type="text" class="form-control" placeholder = "Search for the location" onChange = {() => this.onChange()} />
					</div>
				</div>
				<hr />
				<div className = "row">
					<div className = "col-lg-9">
						{locatns.map(local => (
							<div class="card">
							  <div class="card-body">
							     <a href= "#">{ local.title }</a>
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