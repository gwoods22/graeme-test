import remark from 'remark';
import remarkHtml from 'remark-html';

const mdToHtml = (input) => {
	return remark()
		.use(remarkHtml)
		.processSync(input)
		.toString();
};

export default mdToHtml;
