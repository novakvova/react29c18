import React, {Component} from 'react'

class Article extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         isOpen: true
    //     };
    // }
    state = {
        isOpen: true
    };
    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        console.log("--Article pops render--", this.props);
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? "close" : "open"}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        console.log('--click btn--');
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article