import React from 'react';
import {Redirect} from "react-router-dom";
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import sbheader from "../../sbrheader.png";
import the_boys from "../../theboys.png";
import './portfolio.css'


class Portfolio extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {

        };
    };


    render() {

        return(
            <div className="container-fluid d-flex align-items-center">

                    <Col className="col-md-2" id="left-col">
                        
                    </Col>

                    <Col className="col-lg-8" id="center-col">
                        <header>
                            <h1 className="text-center" id="header">Ben Jerke's Coding Projects</h1>
                        </header>

                        <Card className="text-center prjcard" id="superhero-battle-royale">
                            <Card.Body className="lowerborder bg-light">
                                <Card.Title>Bootcamp Project 1: "Superhero Battle Royale"</Card.Title>
                                <br/>
                                <Image src={sbheader}/>
                                <br/>
                                <br/>
                                <Card.Text>
                                This fun little website pits two superheroes against each other. <br/>
                                Finally, a way to settle arguments between superfans!
                                </Card.Text>
                                <Button variant="outline-primary" href="https://danhauen.github.io/Project1/">Try it out!</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">Developed by Dan Hauen, Haillie Weintraub, Robert Forster and Ben Jerke</Card.Footer>
                        </Card>

                        <Card className="text-center prjcard" id="superhero-battle-royale">
                            <Card.Body className="lowerborder bg-light">
                                <Card.Title>Testing Tool: Random MBI Generator</Card.Title>
                                <br/>
                                <span>👉📑</span>
                                <br/>
                                <br/>
                                <Card.Text className="text-align-left">
                                I made this tool to help my fellow software testers who work on healthcare apps. <br/>
                                Since I could never remember the format, I let the computer do it for me!
                                </Card.Text>
                                <Button variant="outline-primary" href="https://benjerke.github.io/MBI-Generator/">Try it out!</Button>
                            </Card.Body>
                        </Card>

                        <Card className="text-center prjcard" id="superhero-battle-royale">
                            <Card.Body className="lowerborder bg-light">
                                <Card.Title>Bootcamp Project 2: "Interest Quest"</Card.Title>
                                <br/>
                                <Image src={the_boys}/>
                                <br/>
                                <br/>
                                <Card.Text>
                                This is an unfinished fantasy game with a custom-built engine. <br/>
                                It's about a man who must find treasure in a dangerous dungeon to pay off a loan.
                                </Card.Text>
                                <Button variant="outline-primary" href="https://interest-adventure-game.herokuapp.com/">Try it out!</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">Developed Robert Forster, Dan Hauen, and Ben Jerke</Card.Footer>
                        </Card>

                    </Col>

                    
                    <Col className="col-md-2" id="right-col">
                        
                    </Col>

            
            </div>
        )

    }
}

export default Portfolio;