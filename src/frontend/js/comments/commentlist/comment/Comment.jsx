import React, {Component}  from 'react';
import marked              from 'marked';

const rawMarkup = (htmlString) => {
  const rawMarkup = marked(htmlString || '', {sanitize: true});
  return { __html: rawMarkup};
};

class Comment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={rawMarkup(this.props.children)}/>
      </div>
    );
  }

}

Comment.propTypes = {
  author: React.PropTypes.string.isRequired
};

export default Comment;
