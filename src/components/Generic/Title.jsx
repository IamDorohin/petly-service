
import { H1Title } from "./Title.styled";
export default function Title(props) {
    return <H1Title component="h1">{props.children}</H1Title>
}