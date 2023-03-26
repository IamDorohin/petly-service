import { Card, Dog, Woof, Text } from './NoResult.styled'
import dog from '../../../img/dog.png'


export default function NoResult({match = 'match'}) {
    return <Card>
        <Dog src={dog} alt="sad dog" />

        <div>
            <Woof>Woof...</Woof>
            <Text>We couldn't find anything for {match}</Text>
        </div>

    </Card>
}