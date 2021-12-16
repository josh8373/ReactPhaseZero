import React from 'react';


import { 
  Breadcrumb, 
  BreadcrumbItem, 
  StructuredListWrapper, 
  StructuredListCell,
  StructuredListRow,
  StructuredListBody,
  StructuredListHead,
  ModalWrapper,
  HeaderContainer
} from 'carbon-components-react';


const PracticePage1 = () => {
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
        <div className="bx--col-md-4 bx--col-lg-5">(

          <StructuredListWrapper ariaLabel="Structured list">
            <StructuredListHead>
              <StructuredListRow
                head
                tabIndex={0}
              >
                <StructuredListCell head>
                  Authorisation
                </StructuredListCell>
                <StructuredListCell head>
                  ColumnB
                </StructuredListCell>
                <StructuredListCell head>
                  ColumnC
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow tabIndex={0}>
                <StructuredListCell>
                  Row 1
                </StructuredListCell>
                <StructuredListCell>
                  Row 1
                </StructuredListCell>
                <StructuredListCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow tabIndex={0}>
                <StructuredListCell>
                  Row 2
                </StructuredListCell>
                <StructuredListCell>
                  Row 2
                </StructuredListCell>
                <StructuredListCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
        )
        </div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-4">4/16
          <ModalWrapper
            buttonTriggerText="Launch modal"
            modalHeading="Modal heading"
            modalLabel="Label"
          >
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus, sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis. Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis ultrices lorem condimentum, nec ullamcorper felis porttitor. </p>
          </ModalWrapper>
        </div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-5">5/16</div>
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

export default PracticePage1;


