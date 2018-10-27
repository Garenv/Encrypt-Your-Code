import React, { Component } from 'react';
import './Main.css';
import EncryptButton from '../../containers/ButtonEncrypt/ButtonEncrypt';
import Modal from '../../components/Backdrop/Backdrop';
import Backdrop from '../../components/Modal/Modal';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            encryptedValue: null,
            modalIsOpen: false
        };
    }

    showModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false})
    };

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

    render() {
        return(
            <div className="realEntire">
                <div className="entire">
                    <body className="boxSkull">
                        <div className="boxSkeleton">
                            <h1 className="title">Encrypt your code</h1>
                            <textarea placeholder="type something" id="inputText" />
                            <br/>
                            <Modal show={this.state.modalIsOpen} closed={() => this.closeModal()}/>
                            <Backdrop show={this.state.modalIsOpen}/>
                            <EncryptButton clicked={() => {this.encrypt(); this.showModal()}}/>
                            <h1 id="res">{this.state.encryptedValue}</h1>
                        </div>
                    </body>
                </div>
            </div>
        );
    }
}

export default Main;