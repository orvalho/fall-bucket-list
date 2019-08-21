import React, {Component} from 'react';

export default class UpdateBox extends Component {
    state = {
        title: this.props.idea.title,
        desc: this.props.idea.desc
    };

    onChange = e => {
       this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const id = this.props.idea.id;
        const title = this.state.title;
        const desc = this.state.desc;
        this.props.updateIdea(id, title, desc);
        this.props.editing(null);
    };

    render() {
            return (
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onSubmit}>
                        <div className="field">
                            <input 
                                name="title" 
                                value={this.state.title} 
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="field">
                            <input 
                                name="desc" 
                                value={this.state.desc} 
                                onChange={this.onChange}
                            />
                        </div>
                        <button className="ui mini olive button">
                            SAVE UPDATES
                        </button>
                    </form>
                </div>
            );
        };
    }