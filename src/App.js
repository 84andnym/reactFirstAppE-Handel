import { GreetUser } from './GreetUser'
import { Counter } from './Counter'
export const App = () => {
  return (
    <div>
      <GreetUser name="Andreas" age={37}/>
      <Counter/>
    </div>
  )
}
