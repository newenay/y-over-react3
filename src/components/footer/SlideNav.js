import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class SlideNav extends Component {
 
  render() {
    return (
      <Pagination>
        <PaginationItem>
          <PaginationLink previous onClick={this.props.slideBackwards} />
        </PaginationItem>
        <PaginationItem disabled>
          <PaginationLink href="#">
            <span>{this.props._currentSlide-1}</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            <span>{this.props._currentSlide}</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            <span>{this.props._currentSlide+1}</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={this.props.slideForward} />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default SlideNav