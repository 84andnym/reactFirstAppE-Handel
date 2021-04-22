export const GreetUser =(props) => {

  const showAlert = () => {
    alert(Math.random())
  }

  return (
    <div>
      <h1 onClick={() => showAlert()}>Welcome to my website {props.name} {props.age}!
      </h1>
    </div>
  )
}