import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./style";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textLogo}>facebook</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Mobile number or email address"
        />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonTextLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPassword}>
        <Text style={styles.buttonTextPassword}>Forgotten password?</Text>
      </TouchableOpacity>
      <View style={styles.lineOr}>
        <View style={styles.line} />
        <Text style={styles.lineText}>or</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.buttonAccount}>
        <Text style={styles.buttonTextAccount}>Create New Account</Text>
      </TouchableOpacity>

      <View style={styles.containerFooter}>
        <Text style={styles.footerText}>About</Text>
        <Text style={styles.footerText}>Help</Text>
        <Text style={styles.footerText}>More</Text>
      </View>
      <Text style={styles.textCopyright}>Meta © 2022</Text>
    </SafeAreaView>
  );
}
