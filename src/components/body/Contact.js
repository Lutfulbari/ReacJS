import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state ={
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: "",
        }
        this.handelInputChange = this.handelInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handelInputChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked :  event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    })
}
handleSubmit = event =>{
    console.log(this.state);
    event.preventDefault();
}

    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign:"left"}}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                     <Form onsubmit={this.handleSubmit}>
                         <FormGroup row>
                            <lable htmlFor="firstname" md={2}>First Name</lable>
                            <Col md={10}>
                                <Input
                                type="text" 
                                name="firstname" 
                                placeholder="First Name" 
                                value={this.state.firstname} 
                                onChange={this.handelInputChange}
                                />
                             </Col>
                         </FormGroup>
                         
                         <FormGroup row>
                            <lable htmlFor="lastname" md={2}>Last Name</lable>
                            <Col md={10}>
                                <Input type="text" 
                                name="lastname" 
                                placeholder="lastname" 
                                value={this.state.lastname} placeholder="Last name"
                                onChange={this.handelInputChange}
                                />
                             </Col>
                         </FormGroup>
                         
                         <FormGroup row>
                            <lable htmlFor="telnum" md={2}>Contact Tel.</lable>
                            <Col md={10}>
                                <Input 
                                type="telnum" 
                                name="telnum" 
                                placeholder="telnum" 
                                value={this.state.telnum} 
                                placeholder="Tel. Number" 
                                onChange={this.handelInputChange}
                                />
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                            <lable htmlFor="email" md={2}>Email</lable>
                            <Col md={10}>
                                <Input 
                                type="text" 
                                name="email" 
                                placeholder="email" 
                                value={this.state.email} 
                                placeholder="email"
                                onChange={this.handelInputChange}
                                />
                             </Col>
                         </FormGroup>
                        
                         <FormGroup row>
                            <Col md={{size: 6, offset:2}}>
                              <FormGroup check>
                                 <Label check>
                                     <Input 
                                     type="checkbox" 
                                     name="agree" 
                                     checked={this.state.agree} 
                                     onChange={this.handelInputChange}
                                     /> 
                                     <strong>May we contact you?</strong>
                                 </Label>
                              </FormGroup>
                            </Col>
                                <Col md={{size: 3, offset: 1 }}>
                            <Input 
                            type="select" 
                            name="contactType" 
                            value={this.state.contactType}
                            onChange={this.handelInputChange}
                            >
                                    <option>Tel.</option>
                                    <option>Email</option>
                            </Input> 
                               </Col>
                         </FormGroup>
                        
                         <FormGroup row>
                            <lable htmlFor="message" md={2}>Your Feedback</lable>
                            <Col md={10}>
                                <Input 
                                type="textarea" 
                                name="message" 
                                value={this.state.message} row="12"
                                onChange={this.handelInputChange}
                                />
                             </Col>
                         </FormGroup>

                        <FormGroup>
                            <Col md={{size: 10, offset:2}}>
                                <Button 
                                type="submit" 
                                color="primary">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                     </Form>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default Contact; 