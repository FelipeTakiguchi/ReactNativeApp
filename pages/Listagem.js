import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
// import { signOut, getAuth } from '@firebase/auth'
// import app from '../FirebaseConfig';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

export default function Listagem() {
    // const auth = getAuth(app)

    // const deslogar = () => {
    //     signOut(auth)
    //         .then((userCredentials) => {
    //             console.log(userCredentials)
    //             navigation.navigate('')
    //         }).catch((err) => {
    //             console.error(err)
    //         })
    // }
    const [transactions, setTransactions] = useState([]);
    const navigation = useNavigation()

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:3000/transactions')
                if (response.status === 200) {
                    setTransactions(response.data);
                    console.log(transactions)
                    console.log(response.data)
                }
            } catch (err) {
                console.log(err);
            }
        }

        getTransactions();
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.rightComponent} onPress={
                () => navigation.navigate('newTransaction')
            }>
                <View style={styles.buttonIcon}>
                    <Text style={styles.buttonIconText}>+</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.titleText}>Listagem</Text>

            <View style={styles.containerList}>
                <Text>{transactions.map((transaction, index) => {
                    return (
                        <View style={styles.card}>
                            <Text>{transaction.reference}</Text>
                            <Text>{transaction.amount}</Text>
                            <Text>{transaction.date}</Text>
                        </View>
                    )
                })}</Text>
            </View>
        </View >
    );
}

