import React from 'react';
//import ReactDOM from 'react-dom';
import './Business.css';




class Business extends React.Component {
    //React.Component {
        render() {
            return (
                <div className="Business">
                    <div className="image-container">
                        <img src={this.props.business.imageSrc} alt=''/>
                    </div>
                    <h2>{this.props.business.name}</h2>
                    <div className="Business-information">
                    <div className="Business-address">
                        <p>Address: {this.props.business.address}</p>
                        <p>City: {this.props.business.city}</p>
                        <p>State: {this.props.business.state} Zip: {this.props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.catagoty}</h3>
                        <h3 className="rating">Rating: {this.props.business.rating}</h3>
                        <p>Reviews: {this.props.business.reviewCount}</p>
                    </div>
                    </div>
                </div>
                );
        }
    }
//}

export default Business;
