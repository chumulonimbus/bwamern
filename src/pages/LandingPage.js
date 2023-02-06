import React, { Component } from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'
import Breadcrumb from "element/Breadcrumb"

import landingPage from 'json/landingPage.json'
export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }
  state = {
      value: "1"
  };

  handleChange = e =>{
      this.setState({value: e.target.value});
  };
  render() {
    const breadcrumbList = [
        { pageTitle: "Home", pageHref: ""},
        { pageTitle: "House Details", pageHref: ""}
    ];
    return (
        <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
        <Categories data={landingPage.categories}/>
        <Testimony data={landingPage.testimonial}></Testimony>
        <Footer />
        <div className="container">
                <div
                className="row align-items-center justify-content-center"
                style={{ height: "100vh" }}
                >
                <div className="col-auto">
                    <Breadcrumb data={breadcrumbList}/>
                </div>
                </div>
            </div>
        </>
    );
  }  
}
