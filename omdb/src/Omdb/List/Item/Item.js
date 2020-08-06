import React from 'react';

function Item(props) {
    const data = props.data;
    const onListItemClick=function(){        
        props.onListItemClick(data.Title);
    }

    return (
        <div className='item' onClick={onListItemClick}>
            {data.Poster !== "N/A" &&
                <div className='itemDetails'>
                    <img alt='' id="search_img" src={data.Poster} />
                    <div id="titleyear">
                        <div>{data.Title}</div>
                        <div>{data.Year}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Item;