import Select from 'react-select';


const MultiSelect = ({multi,options,handleChangeSelect,name}) => {
return(
  <Select
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange ={(event) => handleChangeSelect(event,name)}
    isMulti = {multi}
/>
)


}

export default MultiSelect