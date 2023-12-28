import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
    <Ionicons name="ios-search" size={24} color="#fff" />
    <TextInput
      style={styles.input}
      placeholder="Search"
      placeholderTextColor={"#fff"}
    />
  </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#D98100',
        padding: 10,
        marginTop: 10,
        borderRadius:20
      },
      input: {
        marginLeft: 10,
        flex: 1,
      },
})