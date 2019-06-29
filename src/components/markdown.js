import React from 'react';
import mdToHtml from '../util/mdToHtml';

export default ({ children }) => {
	return <div dangerouslySetInnerHTML={{ __html: mdToHtml(children) }} />;
};
