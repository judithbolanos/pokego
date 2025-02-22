import { createSignal ,type Component , type JSX } from "solid-js"
interface Props{
    initialValue:number,
    children?:JSX.Element
}

export const Counter: Component<Props> = (props) => {
    const [Counter,  setCounter] = createSignal(props.initialValue)
  return (
    <>
        {props.children}
        <h1 class="text-3xl">Counter</h1>
        <h3>Value: {Counter()}</h3>
        <button onclick={ () => setCounter((prev) => ++prev)} class="bg-blue-500 p-2 m-2 rounter">+1</button>
        <button onclick={ () => setCounter((prev) => --prev)} class="bg-blue-500 p-2 m-2 rounder">-1</button>
    </>
  )
}
