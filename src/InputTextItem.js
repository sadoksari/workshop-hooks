import React from 'react';

const InputTextItem = (props) => {
	return (
		<div>	
            <label> {props.labelItem}
			<input
			    id=	{ props.idItem }	
				type= {props.type}
                name = {props.name }		
				value={props.valueItem}
                style= {{width: props.width}}                 
				onChange={(event) => props.onChangeMethode(event.target.value)}
				placeholder={props.placeHolder}
		    />  
		 </label>	    
		</div>
	);
};

export default InputTextItem;