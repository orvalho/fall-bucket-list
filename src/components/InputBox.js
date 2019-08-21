import React, {Component} from 'react';

export default class InputBox extends Component {
    state = {
        title: '',
        desc: ''
    };

    onChange = e => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const title = this.state.title.trim();
        const desc = this.state.desc.trim(); 
        if (title.length && desc.length) {
            this.props.addIdea({
                title,
                desc,
                id: new Date().getTime()                           
            });
            this.setState({title: '', desc: ''});
        }
    };

    render() {
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <input 
                        name="title" 
                        value={this.state.title} 
                        onChange={this.onChange}
                        placeholder="Enter an idea"  
                        required
                    />
                </div>
                <div className="field">
                    <input 
                        name="desc" 
                        value={this.state.desc} 
                        onChange={this.onChange}
                        placeholder="Enter additional information"  
                        required
                    />
                </div>
                <button className="ui mini olive button">ADD</button>
            </form>
        );
    }
}