import React from 'react';
import FilterContainer from '../containers/filterContainer'

const FilterOption = () => {
    return (
        <div className='filters'>
            { /* filter containers */ }
            <FilterContainer filter="SHOW_ALL">
                All
            </FilterContainer>
            <FilterContainer filter="SHOW_ACTIVE">
                Active
            </FilterContainer>
            <FilterContainer filter="SHOW_COMPLETED">
                Completed
            </FilterContainer>
        </div>
    );
};


export default FilterOption;
