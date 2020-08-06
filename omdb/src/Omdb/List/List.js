/*on click keep data, then addTo(' ')-> empty the list div*/


import React, { useState } from 'react';
import Item from './Item/Item';

function List(props) {
    const data = props.data;
        return (
            <div id="suggested">
                {
                    data && data.Search && data.Search.map(
                        itemData => {
                            return (<Item data={itemData}/>);
                        }
                    )
                }
            </div>
        );
    }

export default List;