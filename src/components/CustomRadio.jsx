const CustomRadio = props => {
  const { label, ...inputProps } = props;
  return (
    <div>
      <label>
        {label}
        <input {...inputProps} type="radio" />
      </label>
    </div>
  );
};

export default CustomRadio;
