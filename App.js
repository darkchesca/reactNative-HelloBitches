import React from 'react';
import {Button, DatePickerAndroid, StyleSheet, Text, TimePickerAndroid, View, ViewPagerAndroid} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{paddingTop: 50, fontSize: 24}}>Hello Bitches!</Text>

            <ViewPagerAndroid initialPage={1} // ovvero pag 2
                              scrollEnabled={true}
                              style={{flex: 1, width: "100%", height: 100}}
            >
                <View style={{alignItems: "center", padding: 10}}>
                    <Text style={styles.pageTitle}>Page Number 1 {"\n"}swipe --></Text>
                    <Button title="Date-Picker Android"
                            onPress={async () => {
                                const {action, year, month, day} = await DatePickerAndroid.open({
                                    date: new Date()
                                });
                                if (action === DatePickerAndroid.dateSetAction) {
                                    console.log(year + " " + month + " " + day);
                                }
                                if (action === DatePickerAndroid.dismissedAction) {
                                    console.log("Dismissed");
                                }
                            }}
                    />
                </View>

                <View style={{alignItems: 'center', padding: 20}}>
                    <Text style={styles.pageTitle}>Page Number 2{"\n"}{"<--"}swipe</Text>
                    <Button title="Time-Picker Android"
                            onPress={async () => {
                                const {action, hour, minute} = await TimePickerAndroid.open({
                                    hour: 16, minute: 30, is24Hour: true
                                });
                                if (action === TimePickerAndroid.timeSetAction) {
                                    console.log(hour + ":" + minute);
                                }
                                if (action === TimePickerAndroid.dismissedAction) {
                                    console.log("Dismissed");
                                }
                            }}
                    />
                </View>
            </ViewPagerAndroid>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 14,
        padding: 10
    }
});
