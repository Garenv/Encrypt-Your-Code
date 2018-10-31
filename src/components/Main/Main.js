import React, { Component } from 'react';
import './Main.css';

import Aux from '../../hoc/Aux';
import ButtonEncrpyt from '../../containers/Buttons/ButtonEncrypt/ButtonEncrypt';
import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';
import ButtonToScroll from '../../containers/Buttons/ButtonToScroll/ButtonToScroll';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            encryptedValue: null,
            modalIsOpen: false
        };
        this.aboutRef = React.createRef();
    }

    encrypt = () => {
        let input = document.getElementById("inputText").value;
        let encryptedValue = " ";

        for(let i = 0; i < input.length; i++) {
            switch(input[i]) {
                case "a":
                    encryptedValue += "!**#";
                    break;
                case "b":
                    encryptedValue += "@4r4s";
                    break;
                case "c":
                    encryptedValue += "#sdfas";
                    break;
                case "d":
                    encryptedValue += "$#&(*#";
                    break;
                case "e":
                    encryptedValue += "%-=}{}";
                    break;
                case "f":
                    encryptedValue += "{c(]";
                    break;
                case "g":
                    encryptedValue += "&";
                    break;
                case "h":
                    encryptedValue += "*!~~~~~";
                    break;
                case "i":
                    encryptedValue += "(";
                    break;
                case "j":
                    encryptedValue += ")";
                    break;
                case "k":
                    encryptedValue += "-";
                    break;
                case "l":
                    encryptedValue += "+";
                    break;
                case "m":
                    encryptedValue += "=";
                    break;
                case "n":
                    encryptedValue += "||`|1|~~``|";
                    break;
                case "o":
                    encryptedValue += "(}}|{}";
                    break;
                case "p":
                    encryptedValue += "*:>iusd";
                    break;
                case "q":
                    encryptedValue += "23442342";
                    break;
                case "r":
                    encryptedValue += "*sdf34";
                    break;
                case "s":
                    encryptedValue += "l7_(*&a562ks894";
                    break;
                case "t":
                    encryptedValue += "*ssdkjnf";
                    break;
                case "u":
                    encryptedValue += "^&**(";
                    break;
                case "v":
                    encryptedValue += "$#$@";
                    break;
                case "w":
                    encryptedValue += "*&^*^&GYD";
                    break;
                case "x":
                    encryptedValue += "hdiufsdds";
                    break;
                case "y":
                    encryptedValue += "847938ouihf";
                    break;
                case "z":
                    encryptedValue += "78}??!~~";
                    break;
                default:
                    encryptedValue += " ";
            }
        }
        document.getElementById("res").innerHTML = encryptedValue;
        this.setState({encryptedValue: encryptedValue});
    };

    showModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false})
    };

    scrollToAbout() {
        return window.scrollTo(0, this.aboutRef.current.offsetTop);
    }

    render() {
        return(
            <Aux>
                <div className="boxSkull">
                    <div className="outsideEntire">
                        <Modal
                            show={this.state.modalIsOpen}
                            showResult={this.state.encryptedValue}
                            closed={this.closeModal}
                            id="res"
                        />
                        <Backdrop show={this.state.modalIsOpen}/>
                        <ButtonToScroll clicked={() => this.scrollToAbout()}/>
                            <div className="realEntire">
                                    <div className="entire">
                                        <div className="boxSkeleton">
                                            <textarea placeholder="Enter your code" id="inputText" />
                                            <ButtonEncrpyt clicked={() => {this.encrypt(); this.showModal()}}/>
                                        </div>
                                    </div>
                                </div>
                            <p className="aboutText" ref={this.aboutRef}>
                                It's extremely necessary to encrypt your code these days.
                                People out there are trying their very best to steal your well written code and
                                use it to their advantage without giving you any credit for it.
                                Code Encryption allows the user to enter
                                the code of whatever language they’re using and encrypt it with a click of a button.
                            </p>
                    </div>
                </div>
                <hr/>
                <footer>
                    <div className="wrap">
                        <nav>
                            <h3>Created by Garen Vartanian</h3>
                        </nav>
                    </div>
                </footer>
            </Aux>
        );
    }
}

export default Main;