import React, { Component } from 'react';
import './Header.css';
import SubscribeToNewsletter from 'Components/Entities/NewsletterSubscriptions/SubscribeToNewsletter';
import SubscribeButtonWithOverlay from 'Components/Entities/NewsletterSubscriptions/Renders/SubscribeButtonWithOverlay';
export default class Header extends Component{
  render() {
    return (
      <header className="Header d-flex">
        <div className="container-fluid justify-content-center align-self-center">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Feel The Beat Of</h2>
              <h1>Nigeria's Biggest Music Community.</h1>
              <SubscribeToNewsletter>
                <SubscribeButtonWithOverlay />
              </SubscribeToNewsletter>
            </div>
          </div>
        </div>
      </header>
    );
  }
};
