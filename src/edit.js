// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { 
	AlignmentToolbar, 
	BlockControls,
	InspectorControls, 
	RichText, 
	useBlockProps 
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Editor styles
import './editor.scss';

// Edit
export default function Edit( { attributes, setAttributes } ) {
	
	// Attributes
	const { textAlign, content } = attributes;

	// Wrapper 
	const wrapperAttributes = useBlockProps( {
		className: classnames( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );

	return (
		<>
			<BlockControls >
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( value ) => setAttributes( { textAlign: value } ) }
				/>
			</BlockControls>
			<RichText
				{ ...wrapperAttributes }
				tagName="div"
				value={ content }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				placeholder={ __( 'Add content', 'basic-block-template' ) }
				onChange={ ( value ) => setAttributes( { content: value } ) }
			/>
		</>
	);
}