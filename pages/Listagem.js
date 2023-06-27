import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
// import { signOut, getAuth } from '@firebase/auth'
// import app from '../FirebaseConfig';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
            <Text>Listagem</Text>
            <Text>{transactions.map((transaction, index) => {
                return (
                    <View>
                        <Text>{ transaction.reference }</Text>
                        <Text>{ transaction.amount }</Text>
                        <Text>{ transaction.date }</Text>
                    </View>
                )
            })}</Text>
        </View>
    );
}

