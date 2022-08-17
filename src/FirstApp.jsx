//Función de un bloque, tiene una variable y la mandas a llamar con un return

// const nombre = 'Mi nombre es Rogger'

// export const FirstApp = () => {

    
//   return (
//     <>
//     <h1>{nombre}</h1>
//     <p>Soy developer Junior Frontend</p>
//     </>
//   )
// }


//Continua la clase


export const FirstApp = ({title, subTitle}) => {
    // console.log(props);

    
  return (
    <>
        <h1>{ title }</h1>
        <p>{subTitle}</p>
    </>
  )
}
