import React, {Component} from "react";


class Box extends Component{
	render() {
		return(
			
			<div className="Box">
				<img  className="images" src={this.props.img}/>
				<p className="popo">{this.props.name}</p>
			</div>

		);
	}
}

export default Box;