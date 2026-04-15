import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";


export default function Index() {
  const [valor, setValor] = useState("");
  return (
    <View style={styles.container}>
      {/* CABEÇALHO  */}
      <View style={styles.header}>
        <Text style={styles.title}>Manage Workout</Text>
        <TouchableOpacity>
          <Ionicons name="person" size={32} color={"#fff"} />
        </TouchableOpacity>
      </View>

      {/* MONTAGEM DO TREINO */}
      <View style={styles.contents}>
        <Text style={styles.titleContents}>Monte seu Treino:</Text>

        <View style={styles.center}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={valor}
              onValueChange={(itemValue) => setValor(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="" color="#999" />
              <Picker.Item label="Peito" value="peito" />
              <Picker.Item label="Costas" value="costas" />
              <Picker.Item label="Perna" value="perna" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.textButton}>Procurar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* RESPOSTA DA API  */}
      <View style={styles.apiResponse}>

        <Text style={styles.titleResponse}>Supino Reto(Com barra)</Text>
        <Image
          style={{ width: 190, height: 190 }}
          source={require("../assets/image/supinoreto.gif")}
        />

        
          <Text style={styles.textDescription}>O supino reto é um exercício fundamental de 
            musculação para o peitoral, realizado deitado em um
            banco horizontal. Consiste em empurrar uma barra ou 
            halteres para cima, partindo da altura do peito, 
            focado no desenvolvimento do peitoral maior, tríceps e 
            deltoides anteriores, 
            mantendo os pés firmes no chão e escápulas travadas</Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.guardButtons}>
          <Text style={styles.textGuard}>Guardar</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.ignoreButtons}>
          <Text style={styles.textIgnore}>Ignorar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
