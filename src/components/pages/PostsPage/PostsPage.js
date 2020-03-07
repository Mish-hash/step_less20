import React from "react";
import {fetchPosts} from "../../../redux/actions/actionCreators";
import {connect} from "react-redux";

class PostsPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            itemsPerPage: 2,
            page: 1,
        }
    }

    renderButtons = () => {
        const buttons = [];
        const pages = Math.ceil(this.props.totalCount / this.state.itemsPerPage);
        for(let i=0; i < pages; i++) {
            buttons.push(<button key = {i} disabled={this.state.page === (i + 1)}>{i+1}</button>)
        }
        return buttons;
    };

    render() {
        return (
            <div>
                <div>JSON.stringify(this.props.posts)</div>
                <div>{this.renderButtons()}</div>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchPosts(this.state.itemsPerPage, this.state.page)
    }
}

const mapStateToProps = (state) => ({
    totalCount: state.authReducer.totalCount,
    posts: state.authReducer.posts,
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (itemsPerPage, page) => dispatch(fetchPosts(itemsPerPage, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)
