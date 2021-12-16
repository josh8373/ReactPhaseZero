import React, {classes} from 'react';
import {Grid} from '@material-ui/core';
import randomColor from 'randomcolor';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { CloudDataOps16, AugmentedReality16, AlignBoxMiddleCenter16 } from '@carbon/icons-react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "inherit"
  }
}));


const PracticePage3 = () => {
  return (  
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Design &amp; build with Carbon</h1>
        </div>
      </div>

      <div className="bx--row practice-page__row2">
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-4">
          <Grid container spacing ={2} direction="column" style={{background:randomColor()}} alignItems="center">
          <div style = {{padding: 10 }}>Authorisation</div>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}>Hooray something is here!</div>
              <CloudDataOps16/>
            </Grid>
            <Grid item></Grid>

            <Grid item class="container" style={{ backgroundColor: '#DCDCDC', width: '400px', height: '200px'}} align = "center" >
              <div class="element" style={{ color:'#0909FF', backgroundColor: '#98AFC7', width: '200px', height: '30px'}} align = "center">  Hooray something is here! </div>
            </Grid>

            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
        </Grid>
        </div>
        
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-4">
        <Grid container spacing ={2} direction="column" style={{background:randomColor()}} alignItems="center">
          <div style = {{padding: 10 }}>Authorisation</div>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}>Hooray something is here!</div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
        </Grid>
        </div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-5">
        <Grid container spacing ={2} direction="column" style={{background:randomColor()}} alignItems="center">
          <div style = {{padding: 10 }}>Authorisation</div>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}>Hooray something is here!</div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
            <Grid item xs={14} style={{background:randomColor()}}>
              <div style={{background:randomColor()}}> Hooray something is here! </div>
            </Grid>
            <Grid item xs={14}></Grid>
        </Grid>
        </div>
      
      </div>
      
      <div className="bx--row practice-page__r2">
        <div className="bx--col-md-4 bx--col-lg-7">7/16</div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">8/16</div>
      </div>
      
      <div className="bx--row practice-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
      </div>
    
    </div>
  );
};

export default PracticePage3;





{/* <Grid item class="container" style={{ backgroundColor: '#DCDCDC', width: '400px', height: '200px', verticalAlign:"center"}} justifyContent= "center" alignItems="center" align = "center" >
  <div class="element" style={{ color:'#0909FF', backgroundColor: '#98AFC7', width: '200px', height: '30px'}} justifyContent= "center" alignItems="center"  align = "center">  Hooray something is here! </div>
</Grid> */}