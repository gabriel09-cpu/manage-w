import { Text, View } from "react-native";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';


export default function Index() {
  return (
    <View style={styles.container}>
      
      {/* CABEÇALHO  */}
      <View style={styles.header}>
        <Ionicons name="person"  size={32} color={"#fff"}/>
      <Text style={styles.title}>Manage Workout</Text>
      </View>
    </View>
  );
}
