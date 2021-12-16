import React, {classes, Component} from 'react';
import { Grid, Button, ButtonSet, ExpressiveCard, TextArea, Checkbox, ToastNotification, Dropdown } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import { Loop20 } from '@carbon/icons-react';


function Lp2() {
     
  return(

      <div className="bx--grid bx--grid--full-width landing-page">
        
        <div className="bx--row login-page__banner">
          <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-8"></div>
          <div className="bx--offset-lg-1 bx--col-sm-2 bx--col-md-4 bx--col-lg-7">
              <h2>Phase Zero Data Collection</h2>
              <h4>A tool to collect activity data for phase zero analysis</h4>
          </div>
        </div>

        <div className="bx--row login-page__r2">
            <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-5" ></div>
            <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-3" >
              <p>Username</p>
              <Grid item class="container" style={{ backgroundColor: '#DCDCDC', width: '400px', height: '200px'}} align = "center" ></Grid>
            </div>
            <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-4" ></div>
        </div>
          
        <div className="bx--row login-page__r3">
          <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-1"></div>
          <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
            <Grid item class="container" style={{ backgroundColor: '#DCDCDC', width: '400px', height: '200px'}} align = "center" >
              <div class="element" align = "center">
                <Button kind="primary" align = "center">Client</Button> 
              </div>
            </Grid>
          </div>
          <div className="bx--offset-lg-2 bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
            <Grid item class="container" style={{ backgroundColor: '#DCDCDC', width: '400px', height: '200px'}} align = "center" >
              <div class="element"  align = "center">
                <Button kind="secondary" align = "center">Consultant</Button> 
              </div>
            </Grid>
          </div>
         
          <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-1"></div>
          </div>

          <div className="bx--row login-page__r4">
            <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-5" ></div>
            <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-3" >
              <h4>New User?</h4>
              <Button kind="secondary">Click here to register</Button>
            </div>
            <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-4" ></div>
          </div>

        </div>
  );

}

export default Lp2;