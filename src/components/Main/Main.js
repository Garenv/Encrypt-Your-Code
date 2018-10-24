import React, { Component } from 'react';
import './Main.css';
import Title from '../../containers/Title/Title';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            encryptedValue: null
        };
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
                    encryptedValue += "*";
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
                    encryptedValue += "||||||||";
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
                    encryptedValue += "8d7yg8irue";
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
            <div>
                <Title/>
                <div className="entire">
                    <body className="boxSkull">
                        <div className="boxSkeleton">
                            <textarea placeholder="type something" id="inputText" />
                            <br/>
                            <button onClick={() => this.encrypt()}>Click to encrypt</button>
                            <h1 id="res">{this.state.encryptedValue}</h1>
                        </div>
                    </body>
                </div>
            </div>
        );
    }
}

export default Main;