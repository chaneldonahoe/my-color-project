import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {copied: false};
        this.changeCopyState=this.changeCopyState.bind(this)
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1000);
        })
    }
    render(){
        const {name, background} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background}} className='ColorBox'>
                    <div 
                        className={`copy-overlay ${copied && 'show'}`}
                        style={{background}} 
                    />
                    <div className={`copy-msg ${copied && 'show'}`}> 
                        <h2>copied!</h2>
                        <p>{this.props.background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}
export default ColorBox;

