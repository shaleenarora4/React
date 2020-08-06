import React from 'react';

function Item(props) {
    const data = props.data;
    return (
        <div className='item' >
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