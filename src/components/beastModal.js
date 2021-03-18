import React from 'react'
import { Button, Modal, Card } from 'react-bootstrap'

class BeastModal extends React.Component{

  constructor(){
    super();
    this.state = {
      showHide : false
    }
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }

  render(){
    return(
      <div>
        <Card.Img variant="top" src={this.props.src}  alt={this.props.description} title={this.props.title} onClick={() => this.handleModalShowHide()}/>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.src} alt={this.props.description} title={this.props.title} width="100%"/>
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
    
}

export default BeastModal;