import React, { Component } from 'react';

import './App.css'; // Import styles

// Declaration of the component as React Class Component
class SimpleModal extends Component {

    // Init of the component before it is mounted.
    constructor(props) {
        super(props);

        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    // Add listeners immediately after the component is mounted.
    componentDidMount() {
        
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    // Remove listeners immediately before a component is unmounted and destroyed.
    componentWillUnmount() {
        
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

  

    // Handle the mouse click on browser window.
    handleOutsideClick(e) {
        const { onCloseRequest } = this.props;

        if (!(this.modal === null)) {
            if (!this.modal.contains(e.target)) {
                onCloseRequest();
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
        }
    }

    // Render the component passing onCloseRequest and children as props.
    render() {
        const {
            onCloseRequest,
            children
        } = this.props;

        return (
            <div className="Overlay">
                <div
                    className="Modal"
                    ref={node => (this.modal = node)}
                >
                    <div className="title">
                        {children}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onCloseRequest}
                />
            </div>
        );
    }
}

// Export the component to use it in other components.
export default SimpleModal;