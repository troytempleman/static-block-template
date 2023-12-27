// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { 
	RichText, 
	useBlockProps 
} from '@wordpress/block-editor';

// Save
export default function Save( { attributes } ) {
	
	// Attributes
	const { textAlign, content } = attributes;

	// Wrapper 
	const wrapperAttributes = useBlockProps.save( {
		className: classnames( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );

	return (
		<RichText.Content
			{ ...wrapperAttributes }
			tagName="div"
			value={ content }
		/>
	);
}