const CustomInput = ({ label, placeholder, type }) => {
  return (
    <div style={{marginBottom: "10px"}}>
      <label htmlFor="name">{label}</label>
      <input id="name" type={type} placeholder={placeholder} />
    </div>
  );
};

const FormTitle = ({text}) => {
    return  <h1>{text}</h1>
}

const CustomForm = () => {
  return (
    <div style = {{display :"flex", justifyContent: "center"}}>
      <form action="">
        <FormTitle text="Formulario"/>
        <CustomInput  type="text" label="Nombre "placeholder="Digite su nome" />
        <CustomInput  type="text" label="Edad "placeholder="Digite su edad" />
        <CustomInput  type="text" label="Nacionalidad " placeholder="Digite su nacionalidad" />
        <CustomInput  type="password" label="Contraseña " placeholder="Digite su nacionalidad" />
      </form>
    </div>
  );
};
ReactDOM.render(<CustomForm />, document.getElementById("container"));
