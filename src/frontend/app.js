import React from 'react';
import {render} from 'react-dom';
import './css/base.css';

import CommentBox from './js/commentbox/commentBox';

render(
  <CommentBox/>, document.getElementById('content')
);
