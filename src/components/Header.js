import { Text, Button } from "react-native";
import { Icon } from "react-native-elements";

export default function Header() {
  return (
    <>
      <Text>Sugarbean</Text>
      <Button>
        <Icon name='gear'></Icon>
      </Button>
    </>
  );
}