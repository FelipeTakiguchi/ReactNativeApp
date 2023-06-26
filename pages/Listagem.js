import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { signOut } from '@firebase/auth'
import { getAuth } from '@firebase/auth';
import app from '../FirebaseConfig';

export default function Listagem() {
    const auth = getAuth(app)

    const deslogar = () => {
        signOut(auth)
            .then((userCredentials) => {
                console.log(userCredentials)
                navigation.navigate('')
            }).catch((err) => {
                console.error(err)
            })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={deslogar}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>
                </View>
            </TouchableOpacity>
            <Text>Listagem</Text>
        </View>
    );
}

