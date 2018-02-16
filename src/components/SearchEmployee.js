import React from 'react';

const SearchEmployee = props => {
      return (
        <div>
            <div className="editfields">
                <div>
                    <label>Search: </label>
                    <input
                        name="name"
                        placeholder="name"
                        onChange={props.onSearch}
                    />
                    <br/>
                </div>
            </div>
        </div>
      );
  };

export default SearchEmployee;