
import React, {classes, Component} from 'react';
import {Grid} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";

function RepoPage() {
  
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      
      <div className="bx--row repo-page__banner">
        <div className="bx--col-lg-16">1</div>
      </div>
      
      <div className="bx--row repo-page__r2">
        <div className="bx--col-md-4 bx--col-lg-7">7/16
        <div className="RepoPage_GridA11">
              <Grid container xs = {10} spacing = {2} direction="column" style={{backgroundColor: '#fffacd'}} alignItems="center">
                <div style={{backgroundColor: '#d3d3d3'}}></div>
                <Grid item xs={10} style={{backgroundColor: '#d3d3d3'}} spacing = {20}>
                  <div style={{backgroundColor: '#d3d3d3'}} pstyle = {{padding: 10 }}>Hurry nothing is here!</div>
                </Grid>
                <Grid item xs={10} style={{backgroundColor: '#d3d3d3'}} spacing = {20}>
                  <div style={{backgroundColor: '#d3d3d3'}} pstyle = {{padding: 10 }}>Hurry nothing is here!</div>
                </Grid>

                
                <Grid item xs={10} style={{backgroundColor: '#d3d3d3'}} spacing = {20}>
                  <div style={{backgroundColor: '#d3d3d3'}} pstyle = {{padding: 10 }}>Hurry nothing is here!</div>
                </Grid>

                
                <Grid item xs={10} style={{backgroundColor: '#d3d3d3'}} spacing = {20}>
                  <div style={{backgroundColor: '#d3d3d3'}} pstyle = {{padding: 10 }}>Hurry nothing is here!</div>
                </Grid>

                
                <Grid item xs={10} style={{backgroundColor: '#d3d3d3'}} spacing = {20}>
                  <div style={{backgroundColor: '#d3d3d3'}} pstyle = {{padding: 10 }}>Hurry nothing is here!</div>
                </Grid>
              </Grid>
          </div>
        </div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">8/16</div>
      </div>
      
      <div className="bx--row repo-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
      </div>
    
    </div>
  );
  
}
  
export default RepoPage;
  
  
  
  
  
  
  
  
  