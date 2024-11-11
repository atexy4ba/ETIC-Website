
import PropTypes from 'prop-types';

function TitreSection(props) { 
    return ( 
        <div className='flex flex-row justify-center'>
            <h1 className='sm:text-2xl md:text-3xl lg:text-5xl font-bold font-satoshi mr-40 '>
                {props.h1}
                <span className= {props.Color}> {props.span}</span>
            </h1>
            <p className='text-xs md:text-xs lg:text-lg font-satoshi block  text-black '>{props.p}</p>
        </div>
    );
}

// Define prop types for validation
TitreSection.propTypes = {
    h1: PropTypes.string.isRequired,  // h1 must be a string and is required
    span: PropTypes.string.isRequired, // span must be a string and is required
    p: PropTypes.string.isRequired,    // p must be a string and is required
};

export default TitreSection;
