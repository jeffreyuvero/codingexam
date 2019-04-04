import React , {Component} from 'react'


class Home extends Component {
	state = {
		'title' : [
			'San Diego' , 'San Francisco', 'Oklahoma City'
		]
	}

	render(){
		const titles = this.state.title; 
		return (
			<div>
				<h1>Location </h1>
				<div className = "row">
					<div className = "col-lg-9">
						<input type="text" class="form-control" id="usr" placeholder = "Search for the location" />
					</div>
				</div>
				<hr />
				<div className = "row">
					<div className = "col-lg-9">
						{titles.map(title => (
							<div class="card">
							  <div class="card-body">
							     <a href= "#">{ title }</a>
							  </div>
							</div>
						))}	
					</div>
				</div>
			</div>
		)
	}
} 

export default Home