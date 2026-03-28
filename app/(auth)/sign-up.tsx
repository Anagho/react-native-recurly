import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go to Sign In</Link>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})